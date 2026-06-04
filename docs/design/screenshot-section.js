const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const outDir = path.join(__dirname);

  const shots = [
    { name: 'projects-desktop.png', width: 1440, height: 900 },
    { name: 'projects-mobile.png',  width: 390,  height: 844 },
  ];

  for (const { name, width, height } of shots) {
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));
    const el = await page.$('#project');
    if (el) {
      await el.screenshot({ path: path.join(outDir, name) });
    } else {
      await page.screenshot({ path: path.join(outDir, name), fullPage: true });
    }
    console.log('saved', name);
    await page.close();
  }

  await browser.close();
})();
