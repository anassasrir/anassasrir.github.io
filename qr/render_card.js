const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const cardHtmlPath = 'file:///' + path.join(__dirname, 'digital_card.html').replace(/\\/g, '/');
const outputDir = __dirname;

async function renderCard(width, height, outputFilename) {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const port = 9250;
  const proc = spawn(edgePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--no-sandbox',
    `--window-size=${width},${height}`,
    cardHtmlPath
  ]);

  await new Promise(r => setTimeout(r, 1500));

  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/json`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const targets = JSON.parse(data);
        const page = targets.find(t => t.type === 'page');
        if (!page) {
          proc.kill();
          return reject('no page');
        }

        const ws = new WebSocket(page.webSocketDebuggerUrl);

        ws.onopen = () => {
          ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
          ws.send(JSON.stringify({
            id: 2,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
              width: width,
              height: height,
              deviceScaleFactor: 1,
              mobile: false
            }
          }));

          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 10,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          }, 1200);
        };

        ws.onmessage = (event) => {
          const msg = JSON.parse(event.data);
          if (msg.id === 10) {
            const imgBuffer = Buffer.from(msg.result.data, 'base64');
            const savePath = path.join(outputDir, outputFilename);
            fs.writeFileSync(savePath, imgBuffer);
            console.log('Saved to', savePath);
            ws.close();
            proc.kill();
            resolve();
          }
        };
      });
    }).on('error', (err) => {
      proc.kill();
      reject(err);
    });
  });
}

async function run() {
  await renderCard(1080, 1920, 'carte-digitale-wallpaper.png');
  console.log('Digital card rendered successfully!');
}

run().catch(console.error);
