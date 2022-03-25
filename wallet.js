const puppeteer = require('puppeteer');
const fs = require('fs');

async function actionValues(actionName) {
  
  // const browser = await puppeteer.launch({ headless: false }); <-- to view browser working
  // const context = await browser.createIncognitoBrowserContext(); <-- to create an incognito window
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.infomoney.com.br/cotacoes/${actionName}`);
  
  const actionValue = await page.evaluate(() => {
    
    const getValue = document.querySelector('.value p').textContent;
    const getName = document.querySelector('h1').textContent;
     
    function Action(nome, valor) {
      this.nome = nome;
      this.valor = valor;
    }
    
    let getAction = new Action(getName, getValue)

    /* let actionArray = [getAction] */
    /* const actionValue = actionArray.map( ({innerText}) => ({
        innerText
    })) */

    return getAction
  });

  //
  fs.appendFile('actions.json', JSON.stringify(actionValue, null, 2), err => {
    if(err) throw new Error('something went wrong');

    console.log('well done!')
  });
  
  await browser.close();
};  

actionValues('gerdau-ggbr4/')