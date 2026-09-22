const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const { PDFDocument, StandardFonts, decodePDFRawStream, rgb } = require("pdf-lib");

const [sourcePath, outputPath] = process.argv.slice(2);

if (!sourcePath || !outputPath) {
  throw new Error("Usage: node scripts/rebrand-price-list-pdf.cjs <source.pdf> <output.pdf>");
}

const palette = [
  ["0.0823529 0.0235294 0.141176", "0.160784 0.207843 0.254902"], // violet-black -> NEXIV navy
  ["0.388235 0.223529 1", "0.686275 0.905882 0.0784314"], // violet -> NEXIV lime
  ["0.988235 0.984314 1", "0.960784 0.960784 0.960784"], // lavender-white -> site off-white
];

function rebrandStream(stream) {
  const content = Buffer.from(decodePDFRawStream(stream).getBytes()).toString("latin1");
  const recolored = palette.reduce(
    (result, [from, to]) => result.replaceAll(from, to),
    content
  );
  stream.contents = new Uint8Array(zlib.deflateSync(Buffer.from(recolored, "latin1")));
}

async function rebrandPriceList() {
  const document = await PDFDocument.load(fs.readFileSync(sourcePath));
  const logo = await document.embedPng(
    fs.readFileSync(path.join(process.cwd(), "public", "logos", "nexiv-lockup-light.png"))
  );
  const coverImage = await document.embedJpg(
    fs.readFileSync(path.join(process.cwd(), "public", "images", "price-list-cover.jpg"))
  );
  const headingFont = await document.embedFont(StandardFonts.HelveticaBold);
  const bodyFont = await document.embedFont(StandardFonts.Helvetica);

  document.getPages().forEach((page, index) => {
    const contents = page.node.Contents();
    const streams = contents?.asArray?.() ?? [contents];
    streams.forEach((stream) => stream && rebrandStream(stream));

    const isLastPage = index === document.getPageCount() - 1;
    if (isLastPage) {
      const { width, height } = page.getSize();
      page.setSize(width, height / 3);
    }
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
      page.drawSvgPath("M 0 0 L 390 0 L 440 46 L 440 225 L 0 225 Z", {
        x: 38,
        y: height - 470,
        color: rgb(0.160784, 0.207843, 0.254902),
        opacity: 0.92,
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

    if (isLastPage) {
      page.drawRectangle({ x: 0, y: 0, width, height, color: rgb(0.160784, 0.207843, 0.254902) });
      page.drawImage(logo, { x: 42, y: height - 72, width: 112, height: 50 });
      page.drawText("Contact Information", {
        x: 42,
        y: height - 108,
        size: 20,
        font: headingFont,
        color: rgb(1, 1, 1),
      });
      page.drawText("Contact us for a personalised quote or more information about our services.", {
        x: 42,
        y: height - 132,
        size: 9,
        font: bodyFont,
        color: rgb(0.960784, 0.960784, 0.960784),
      });
      page.drawRectangle({ x: 42, y: height - 150, width: width - 84, height: 1, color: rgb(0.686275, 0.905882, 0.0784314), opacity: 0.65 });
      page.drawText("LOCATION", { x: 42, y: height - 178, size: 8, font: headingFont, color: rgb(0.32549, 0.929412, 0.890196) });
      page.drawText("Mzuzu, Lubinga, Malawi", { x: 42, y: height - 198, size: 11, font: headingFont, color: rgb(1, 1, 1) });
      page.drawText("CONTACT", { x: 315, y: height - 178, size: 8, font: headingFont, color: rgb(0.32549, 0.929412, 0.890196) });
      page.drawText("+265 980 588 058", { x: 315, y: height - 198, size: 11, font: headingFont, color: rgb(1, 1, 1) });
      page.drawText("+265 884 288 849", { x: 315, y: height - 217, size: 11, font: headingFont, color: rgb(1, 1, 1) });
    }

    // Replace the legacy "PRICELIST / 2024" footer on every supplied page.
    page.drawRectangle({ x: 0, y: 0, width, height: isLastPage ? 30 : 96, color: rgb(1, 1, 1) });
    page.drawText("NEXIV", { x: 24, y: 18, size: 7, font: headingFont, color: rgb(0.160784, 0.207843, 0.254902) });
    page.drawText("2026", { x: width - 42, y: 18, size: 7, font: headingFont, color: rgb(0.686275, 0.905882, 0.0784314) });
  });

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, await document.save());
}

rebrandPriceList();
