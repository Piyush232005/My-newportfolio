import { Jimp } from 'jimp';
import path from 'path';
import fs from 'fs';

async function processImage() {
  const imgPath = path.resolve('./src/assets/aws.png');
  if (!fs.existsSync(imgPath)) {
    console.error("Image does not exist at " + imgPath);
    return;
  }
  const image = await Jimp.read(imgPath);
  const w = image.bitmap.width;
  const h = image.bitmap.height;

  let hasWhite = false;
  let hasBlack = false;

  const threshold = 230;

  image.scan(0, 0, w, h, function (x, y, idx) {
    const red   = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue  = this.bitmap.data[idx + 2];
    const alpha = this.bitmap.data[idx + 3];

    if (alpha === 0) return;

    // Check if pixel is close to white
    if (red > threshold && green > threshold && blue > threshold) {
      hasWhite = true;
      // Make it transparent
      this.bitmap.data[idx + 3] = 0;
    } else if (red < 120 && green < 120 && blue < 120) {
      hasBlack = true;
      // Many logos are black or dark gray on white. A dark logo on #1E1E2E bg is hardly visible.
      // We convert dark pixels to light gray/white for visibility.
      this.bitmap.data[idx + 0] = 230;
      this.bitmap.data[idx + 1] = 230;
      this.bitmap.data[idx + 2] = 230;
    }
  });

  const outPath = path.resolve('./src/assets/aws_processed.png');
  await image.write(outPath);
  console.log('Processed image saved to', outPath);
  console.log('Had white?', hasWhite, 'Had black?', hasBlack);
}

processImage().catch(console.error);
