const puppeteer = require('puppeteer');

const b3 = [
    'ifix/',
    'petrobras-petr4/',
    'vale-vale3/'  
]

b3.forEach(async (action) => {
  const browser = await puppeteer.launch({ headless: false });
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  await page.goto(`https://www.infomoney.com.br/cotacoes/${action}`);
  const element = await page.$(".value");
    const text = await page.evaluate(element => element.textContent, element);

    console.log(text)

  await browser.close();
});