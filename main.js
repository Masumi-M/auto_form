const puppeteer = require('puppeteer');
const input_form = {
    name: ['entry.1260234182','Masumi'],
    free: ['entry.149339606', 'Hello World.']
}

(async () =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://forms.gle/hHGxSqDqRKuBWCcd6');
    await page.type(`input[name="${input_form.name[0]}"]`, input_form.name[1]);
    await page.type(`input[name="${input_form.free[0]}"]`, input_form.free[1]);
    
})