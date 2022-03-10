const puppeteer = require('puppeteer');

const b3 = [
    'bitcoin-btc/',
    'ambev-abev3/',
    'gerdau-ggbr4/',
    'itau-unibanco-itub4/',
    'magazine-luiza-mglu3/'  
]

async function actionValue(action) {
  const browser = await puppeteer.launch({ headless: false });
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  await page.goto(`https://www.infomoney.com.br/cotacoes/${action}`);
  const element = await page.$(".value");
    const text = await page.evaluate(element => element.textContent, element);

    console.log(text)

  await browser.close();
};

b3.forEach(actionValue);
