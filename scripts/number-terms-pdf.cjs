const fs = require("fs");
const path = require("path");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");

const [sourcePath, outputPath] = process.argv.slice(2);

if (!sourcePath || !outputPath) {
  throw new Error("Usage: node scripts/number-terms-pdf.cjs <source.pdf> <output.pdf>");
}

async function numberPages() {
  const document = await PDFDocument.load(fs.readFileSync(sourcePath));
  const font = await document.embedFont(StandardFonts.Helvetica);

  document.getPages().forEach((page, index) => {
    // The source document's original footer is at the lower right. Clear it
    // before drawing the human-readable, one-based page number.
    page.drawRectangle({ x: 445, y: 806, width: 105, height: 30, color: rgb(1, 1, 1) });
    page.drawText(`Page ${index + 1}`, {
      x: 456,
      y: 816,
      size: 8,
      font,
      color: rgb(0.16, 0.21, 0.25),
    });
  });

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, await document.save());
}

numberPages();
