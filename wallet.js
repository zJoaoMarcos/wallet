const puppeteer = require('puppeteer');
const fs = require('fs');

const actionValues = async(actionName) => {
  
  // const browser = await puppeteer.launch({ headless: false }); <-- to view browser working
  // const context = await browser.createIncognitoBrowserContext(); <-- to create an incognito window
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://www.infomoney.com.br/cotacoes/${actionName}`);
  
  const actionValue = await page.evaluate(() => {
    
    const getValue = document.querySelector('.value p').textContent;
    const getName = document.querySelector('h1').textContent;
     
    function Action(name, value) {
      this.name = name;
      this.value = value;
    }
    
    let getAction = new Action(getName, getValue)

    let actionArray = [getAction] 

    return actionArray
  });

  //wirte local file
  fs.writeFile('actions.json', JSON.stringify(actionValue, null, 2), err => {
    if(err) throw new Error('something went wrong');

    console.log('well done!')
  });
  
  await browser.close();
};  

/* actionValues('petrobras-petr4/') */

module.exports.actionValues = actionValues


/* 'magazine-luiza-mglu3/',
'ambev-abev3/',
'petrobras-petr4/',
'itau-unibanco-itub4/',
'vale-vale3/',
'bitcoin-btc/',
'walt-disney-disb34/',
'gerdau-ggbr4/'*/