const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', '..', 'public');

async function run() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

  // ── OG image 1200×630 ──────────────────────────────────────────────────────
  const og = await browser.newPage();
  await og.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await og.setContent(`<!DOCTYPE html><html><head><meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Gloock&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1200px;height:630px;background:#f8fafc;font-family:'DM Sans',sans-serif;
         display:flex;align-items:center;padding:80px;position:relative;overflow:hidden}
    .bar{position:absolute;top:0;left:0;right:0;height:5px;background:#2563eb}
    .inner{max-width:680px}
    .name{font-family:'JetBrains Mono',monospace;font-size:14px;color:#64748b;
          letter-spacing:.1em;text-transform:uppercase;margin-bottom:28px}
    h1{font-family:'Gloock',Georgia,serif;font-size:68px;line-height:1.08;
       color:#0f172a;margin-bottom:44px}
    .badges{display:flex;gap:10px;flex-wrap:wrap}
    .badge{font-family:'JetBrains Mono',monospace;font-size:13px;color:#475569;
           border:1px solid #cbd5e1;padding:5px 12px;letter-spacing:.04em}
    .url{position:absolute;bottom:36px;left:80px;font-family:'JetBrains Mono',monospace;
         font-size:12px;color:#94a3b8;letter-spacing:.06em}
    .rule{position:absolute;right:0;top:0;bottom:0;width:1px;background:#e2e8f0}
  </style></head><body>
  <div class="bar"></div>
  <div class="rule"></div>
  <div class="inner">
    <div class="name">Stuart Clark</div>
    <h1>ML Engineer for<br>regulated,<br>high-stakes domains</h1>
    <div class="badges">
      <span class="badge">Macro-AUC 0.78</span>
      <span class="badge">180k+ OSHA records</span>
      <span class="badge">Live on AWS ECS</span>
      <span class="badge">Open source</span>
    </div>
  </div>
  <div class="url">stuart-clark-portfolio.vercel.app</div>
  </body></html>`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));
  await og.screenshot({ path: path.join(PUBLIC, 'og-image.png') });
  console.log('saved og-image.png');
  await og.close();

  // ── Favicon 32×32 → favicon.ico ───────────────────────────────────────────
  const fav = await browser.newPage();
  await fav.setViewport({ width: 32, height: 32, deviceScaleFactor: 1 });
  await fav.setContent(`<!DOCTYPE html><html><head><meta charset="utf-8">
  <style>
    *{margin:0;padding:0}
    body{width:32px;height:32px;background:#2563eb;display:flex;
         align-items:center;justify-content:center;
         font-family:system-ui,sans-serif;font-weight:700;
         color:#fff;font-size:13px;letter-spacing:-.5px}
  </style></head><body>SC</body></html>`, { waitUntil: 'load' });
  const pngBuf = Buffer.from(await fav.screenshot({ type: 'png' }));
  await fav.close();
  await browser.close();

  // Wrap PNG in a minimal ICO container (PNG-in-ICO, supported by all modern browsers)
  const ico = Buffer.alloc(22);
  ico.writeUInt16LE(0, 0);              // reserved
  ico.writeUInt16LE(1, 2);              // type: icon
  ico.writeUInt16LE(1, 4);              // image count
  ico.writeUInt8(32, 6);                // width
  ico.writeUInt8(32, 7);                // height
  ico.writeUInt8(0, 8);                 // colour count (0 = >256)
  ico.writeUInt8(0, 9);                 // reserved
  ico.writeUInt16LE(1, 10);             // colour planes
  ico.writeUInt16LE(32, 12);            // bits per pixel
  ico.writeUInt32LE(pngBuf.length, 14); // size of image data
  ico.writeUInt32LE(22, 18);            // offset to image data
  fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), Buffer.concat([ico, pngBuf]));
  console.log('saved favicon.ico');
}

run().catch(e => { console.error(e); process.exit(1); });
