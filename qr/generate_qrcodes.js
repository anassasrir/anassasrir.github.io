const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const targetUrl = 'https://anassasrir.github.io/';
const outputDir = path.join(__dirname, 'qr');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateQRCodes() {
  console.log('Generating QR Codes for:', targetUrl);

  // 1. Classic Light (Ideal for Print, PDF, Business Cards)
  await QRCode.toFile(path.join(outputDir, 'qrcode-light.png'), targetUrl, {
    errorCorrectionLevel: 'H',
    type: 'png',
    quality: 1,
    margin: 2,
    width: 1200,
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  });
  console.log('Generated qrcode-light.png');

  // 2. Dark Linear Theme (Ideal for Web, Dark presentations, Digital sharing)
  await QRCode.toFile(path.join(outputDir, 'qrcode-dark.png'), targetUrl, {
    errorCorrectionLevel: 'H',
    type: 'png',
    quality: 1,
    margin: 2,
    width: 1200,
    color: {
      dark: '#f8fafc',
      light: '#0b0c10'
    }
  });
  console.log('Generated qrcode-dark.png');

  // 3. Dark Accent (Cyan / Violet Linear Glow)
  await QRCode.toFile(path.join(outputDir, 'qrcode-accent.png'), targetUrl, {
    errorCorrectionLevel: 'H',
    type: 'png',
    quality: 1,
    margin: 2,
    width: 1200,
    color: {
      dark: '#38bdf8',
      light: '#0b0c10'
    }
  });
  console.log('Generated qrcode-accent.png');

  // 4. Transparent Vector SVG (Infinite scalability)
  const svgString = await QRCode.toString(targetUrl, {
    errorCorrectionLevel: 'H',
    type: 'svg',
    margin: 2,
    color: {
      dark: '#0f172a',
      light: '#00000000'
    }
  });
  fs.writeFileSync(path.join(outputDir, 'qrcode.svg'), svgString);
  console.log('Generated qrcode.svg');

  // 5. Dark SVG
  const svgDarkString = await QRCode.toString(targetUrl, {
    errorCorrectionLevel: 'H',
    type: 'svg',
    margin: 2,
    color: {
      dark: '#38bdf8',
      light: '#0b0c10'
    }
  });
  fs.writeFileSync(path.join(outputDir, 'qrcode-dark.svg'), svgDarkString);
  console.log('Generated qrcode-dark.svg');

  console.log('All QR codes generated successfully!');
}

generateQRCodes().catch(console.error);
