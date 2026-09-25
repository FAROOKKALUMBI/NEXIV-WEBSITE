const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const { PDFDocument, PDFName, StandardFonts, decodePDFRawStream, rgb } = require("pdf-lib");

const [sourcePath, outputPath] = process.argv.slice(2);

if (!sourcePath || !outputPath) {
  throw new Error("Usage: node scripts/rebrand-price-list-pdf.cjs <source.pdf> <output.pdf>");
}

const palette = [
  ["0.0823529 0.0235294 0.141176", "0.160784 0.207843 0.254902"], // violet-black -> NEXIV navy
  ["0.388235 0.223529 1", "0.686275 0.905882 0.0784314"], // violet -> NEXIV lime
  ["0.988235 0.984314 1", "0.960784 0.960784 0.960784"], // lavender-white -> site off-white
];

function rebrandStream(stream, refreshYear = false) {
  let content = Buffer.from(decodePDFRawStream(stream).getBytes()).toString("latin1");
  if (refreshYear) content = content.replaceAll("[(202)20(4)] TJ", "[(202)20(6)] TJ");
  const recolored = palette.reduce(
    (result, [from, to]) => result.replaceAll(from, to),
    content
  );
  stream.contents = new Uint8Array(zlib.deflateSync(Buffer.from(recolored, "latin1")));
}

async function rebrandPriceList() {
  const document = await PDFDocument.load(fs.readFileSync(sourcePath));
  // Page 5 is the legacy Website Services continuation with hosting and premium-package content.
  if (document.getPageCount() > 4) document.removePage(4);
  // Replace the old contact page with a fresh, full-size contact page below.
  if (document.getPageCount() > 0) document.removePage(document.getPageCount() - 1);
  const logo = await document.embedPng(
    fs.readFileSync(path.join(process.cwd(), "public", "logos", "nexiv-lockup-light.png"))
  );
  const coverImage = await document.embedJpg(
    fs.readFileSync(path.join(process.cwd(), "public", "images", "price-list-cover.jpg"))
  );
  const headingFont = await document.embedFont(StandardFonts.HelveticaBold);
  const bodyFont = await document.embedFont(StandardFonts.Helvetica);

  // The supplied PDF already contains the old white footer rectangle and its
  // NEXIV / 2026 labels as separate streams. Remove those existing streams.
  document.getPages().forEach((page, pageIndex) => {
    const contents = page.node.Contents();
    const streams = contents?.asArray?.() ?? [contents];
    const keptStreams = streams.filter((streamRef) => {
      if (!streamRef) return false;
      const stream = document.context.lookup(streamRef);
      if (!stream?.contents) return true;
      const content = Buffer.from(decodePDFRawStream(stream).getBytes()).toString("latin1");
      const footerRectangle = /0 0 m 0 96 l \d+ 96 l \d+ 0 l h f/.test(content);
      const footerLabel = /1 0 0 1 [\d.]+ 18 Tm/.test(content) && /<(?:4E45584956|32303236)> Tj/.test(content);
      const coverCurve = pageIndex === 0 && (content.match(/ c/g) ?? []).length > 5;
      return !footerRectangle && !footerLabel && !coverCurve;
    });
    page.node.set(PDFName.Contents, document.context.obj(keptStreams));
  });

  document.getPages().forEach((page, index) => {
    const contents = page.node.Contents();
    const streams = contents?.asArray?.() ?? [contents];
    streams.forEach((streamRef) => {
      if (!streamRef) return;
      const stream = document.context.lookup(streamRef);
      if (stream?.contents) rebrandStream(stream, index > 0);
    });

    const { width, height } = page.getSize();

    if (index === 0) {
      page.drawImage(coverImage, { x: 0, y: 0, width, height });
      page.drawRectangle({ x: 0, y: 0, width, height, color: rgb(0.160784, 0.207843, 0.254902), opacity: 0.64 });
      // Website-style navigation header: strong navy, clear brand lockup and a concise page label.
      page.drawRectangle({ x: 0, y: height - 94, width, height: 94, color: rgb(0.160784, 0.207843, 0.254902), opacity: 0.94 });
      page.drawImage(logo, { x: 48, y: height - 86, width: 156, height: 70 });
      page.drawText("PRICE LIST  |  2026", {
        x: width - 156,
        y: height - 50,
        size: 10,
        font: headingFont,
        color: rgb(0.686275, 0.905882, 0.0784314),
      });
      page.drawText("NEXIV CREATIVE STUDIO", {
        x: 56,
        y: height - 306,
        size: 10,
        font: headingFont,
        color: rgb(0.32549, 0.929412, 0.890196),
      });
      page.drawText("PRICE LIST", {
        x: 56,
        y: height - 354,
        size: 38,
        font: headingFont,
        color: rgb(1, 1, 1),
      });
      page.drawText("Creative services designed to move your brand forward.", {
        x: 56,
        y: height - 386,
        size: 13,
        font: bodyFont,
        color: rgb(0.960784, 0.960784, 0.960784),
      });
      page.drawRectangle({
        x: 56,
        y: height - 440,
        width: 72,
        height: 30,
        color: rgb(0.686275, 0.905882, 0.0784314),
      });
      page.drawText("2026", {
        x: 69,
        y: height - 430,
        size: 12,
        font: headingFont,
        color: rgb(0.160784, 0.207843, 0.254902),
      });
    }

    // Restyle Section 3 with the dark design used by the following service page.
    if (index === 3) {
      const navy = rgb(43 / 255, 53 / 255, 66 / 255);
      const lime = rgb(0.686275, 0.905882, 0.0784314);
      const white = rgb(0.960784, 0.960784, 0.960784);
      page.drawRectangle({ x: 0, y: 0, width, height, color: navy });
      page.drawText("3.", {
        x: 34, y: height - 160, size: 132, font: headingFont, color: lime,
      });
      page.drawText("UI/UX &", {
        x: 170, y: height - 78, size: 42, font: headingFont, color: white,
      });
      page.drawText("Web Design", {
        x: 170, y: height - 128, size: 42, font: headingFont, color: white,
      });

      const packages = [
        {
          title: "Starter Pack", price: "K150,000",
          features: ["Up to 4 pages", "Mobile-responsive UI design", "1 wireframe revision", "Contact form design"],
        },
        {
          title: "Professional Pack", price: "K250,000",
          features: ["Up to 8 pages", "Mobile-responsive UI design", "UX wireframing & prototyping (Figma)", "SEO-friendly layout structure", "Content management design guide"],
        },
        {
          title: "Enterprise Pack", price: "K350,000",
          features: ["Custom page count", "Full UX research & wireframes", "High-fidelity prototypes", "Design system/component library", "E-commerce/advanced UI flows", "Analytics dashboard design", "Training & support"],
        },
      ];
      const blockTop = [height - 205, height - 382, height - 572];
      packages.forEach((item, packageIndex) => {
        const y = blockTop[packageIndex];
        page.drawRectangle({ x: 38, y: y + 12, width: 334, height: 1.5, color: lime });
        page.drawRectangle({ x: 420, y: y + 12, width: width - 458, height: 1.5, color: white });
        page.drawText(item.title, {
          x: 38, y: y - 25, size: 21, font: headingFont, color: white,
        });
        const tierLabel = item.title.replace(" Pack", "").toUpperCase();
        const tierLabelWidth = headingFont.widthOfTextAtSize(tierLabel, 18);
        page.drawText(tierLabel, {
          x: width - 38 - tierLabelWidth, y: y - 25, size: 18, font: headingFont, color: lime,
        });
        const priceWidth = headingFont.widthOfTextAtSize(item.price, 20);
        page.drawText(item.price, {
          x: width - 38 - priceWidth, y: y - 60, size: 20, font: headingFont, color: white,
        });
        item.features.forEach((feature, featureIndex) => {
          page.drawText(`${featureIndex + 1}. ${feature}`, {
            x: 38, y: y - 90 - featureIndex * 19, size: 16, font: bodyFont,
            color: white,
          });
        });
      });
    }

    // Keep Section 3's dark footer. Remove the old white footer bars on all other pages.
    if (index === 3) {
      page.drawRectangle({ x: 0, y: 0, width, height: 42, color: rgb(43 / 255, 53 / 255, 66 / 255) });
      page.drawRectangle({ x: 38, y: 41, width: width - 76, height: 0.8, color: rgb(0.686275, 0.905882, 0.0784314) });
      page.drawText("NEXIV", { x: 38, y: 17, size: 8, font: headingFont, color: rgb(0.686275, 0.905882, 0.0784314) });
      page.drawText("3", { x: width / 2 - 2, y: 17, size: 8, font: headingFont, color: rgb(0.960784, 0.960784, 0.960784) });
      page.drawText("2026", { x: width - 72, y: 17, size: 8, font: headingFont, color: rgb(0.686275, 0.905882, 0.0784314) });
    }
  });

  const contactPage = document.addPage([596, 390]);
  const contactNavy = rgb(43 / 255, 53 / 255, 66 / 255);
  const contactLime = rgb(0.686275, 0.905882, 0.0784314);
  const contactWhite = rgb(0.960784, 0.960784, 0.960784);
  contactPage.drawRectangle({ x: 0, y: 0, width: 596, height: 390, color: contactNavy });
  contactPage.drawImage(logo, { x: 44, y: 306, width: 126, height: 56 });
  contactPage.drawText("NEXIV CREATIVE STUDIO", {
    x: 44, y: 270, size: 9, font: headingFont, color: contactLime,
  });
  contactPage.drawText("Contact Information", {
    x: 44, y: 230, size: 28, font: headingFont, color: contactWhite,
  });
  contactPage.drawText("For a personalised quote or more information about our services, get in touch.", {
    x: 44, y: 204, size: 10, font: bodyFont, color: contactWhite,
  });
  contactPage.drawRectangle({ x: 44, y: 178, width: 508, height: 1.5, color: contactLime });
  contactPage.drawText("LOCATION", {
    x: 44, y: 145, size: 9, font: headingFont, color: contactLime,
  });
  contactPage.drawText("Mzuzu, Lubinga, Malawi", {
    x: 44, y: 123, size: 12, font: headingFont, color: contactWhite,
  });
  contactPage.drawText("CONTACT", {
    x: 320, y: 145, size: 9, font: headingFont, color: contactLime,
  });
  contactPage.drawText("+265 980 588 058", {
    x: 320, y: 123, size: 12, font: headingFont, color: contactWhite,
  });
  contactPage.drawText("+265 884 288 849", {
    x: 320, y: 102, size: 12, font: headingFont, color: contactWhite,
  });
  contactPage.drawRectangle({ x: 44, y: 42, width: 508, height: 0.8, color: contactLime });
  contactPage.drawText("NEXIV", {
    x: 44, y: 24, size: 8, font: headingFont, color: contactLime,
  });
  contactPage.drawText("2026", {
    x: 510, y: 24, size: 8, font: headingFont, color: contactWhite,
  });

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, await document.save());
}

rebrandPriceList();
