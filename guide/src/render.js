// Renders guide.html to a 6x9 inch PDF and saves one PNG per page for checking.
// Run from this folder: node render.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const src = path.join(__dirname, 'guide.html');
  const outPdf = path.join(__dirname, '..', 'The-Quiet-Morning-Guide-DRAFT.pdf');
  const previewDir = process.argv[2] || path.join(__dirname, 'preview');
  fs.mkdirSync(previewDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 576, height: 864 }, deviceScaleFactor: 2 });
  await page.goto('file://' + src, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  // Spare space between the last piece of content and the footer, per page (negative = overflow).
  const info = await page.evaluate(() => [...document.querySelectorAll('.page')].map((p, i) => {
    const foot = p.querySelector('.foot');
    const kids = [...p.children].filter((c) => c !== foot && !c.classList.contains('cover__brand'));
    const last = kids[kids.length - 1];
    const limit = foot ? foot.getBoundingClientRect().top : p.getBoundingClientRect().bottom;
    return { page: i + 1, spare_px: Math.round(limit - last.getBoundingClientRect().bottom) };
  }));
  console.log(JSON.stringify(info));
  console.log('fonts ok:', await page.evaluate(() => document.fonts.check('12px "Instrument Serif"') && document.fonts.check('12px "Manrope"')));

  await page.pdf({ path: outPdf, width: '6in', height: '9in', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  const pages = await page.$$('.page');
  for (let i = 0; i < pages.length; i++) {
    await pages[i].screenshot({ path: path.join(previewDir, `p${String(i + 1).padStart(2, '0')}.png`) });
  }
  await browser.close();
  console.log('saved', outPdf, 'and', pages.length, 'page previews');
})();
