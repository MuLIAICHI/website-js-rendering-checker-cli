#!/usr/bin/env node

const puppeteer = require('puppeteer');
const program = require('commander');

program
  .version('1.0.0') // Set the version of your tool
  .option('-u, --url <url>', 'URL of the website to check')
  .parse(process.argv);

if (!program.url) {
  console.error('Please provide a URL using the -u or --url option.');
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(program.url);
    await page.waitForTimeout(2000);

    const contentBefore = await page.content();

    await page.setJavaScriptEnabled(false);
    await page.reload();
    await page.waitForTimeout(2000);

    const contentAfter = await page.content();

    const isJavaScriptEnabled = contentBefore !== contentAfter;

    if (isJavaScriptEnabled) {
      console.log("The website uses JavaScript rendering.");
    } else {
      console.log("The website does not use JavaScript rendering.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await browser.close();
  }
})();
