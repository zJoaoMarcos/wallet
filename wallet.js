const puppeteer = require('puppeteer');
const fs = require('fs');


const b3 = [
    'bitcoin-btc/',
    'ambev-abev3/',
    'gerdau-ggbr4/',
    'itau-unibanco-itub4/',
    'magazine-luiza-mglu3/'  
]

async function actionValues(actionName) {
  // const browser = await puppeteer.launch({ headless: false }); <-- para visualizar o chromium
  // const context = await browser.createIncognitoBrowserContext(); <-- para criar uma janela anônima
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.infomoney.com.br/cotacoes/${actionName}`);
  
  const actionValue = await page.evaluate(() => {
    
    const getValue = document.querySelector('.value p').innerText;

    return getValue

  });

  fs.appendFile(

    './myActions.txt',

    JSON.stringify(actionValue),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
  );
  
  await browser.close();
};

b3.forEach(actionValues);
