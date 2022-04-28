// app.js
const assert = require('assert');
 
module.exports = class App {
   
    //to go to a URL 
    open (path) {
        return browser.url(path);
    }
    
    async validatePageTitle(title){
        const currentTitle = await browser.getTitle();
        await assert.strictEqual(currentTitle, title);

    }

    async validatePageUrl(url){

        const currentUrl = await browser.getUrl();
        await assert.strictEqual(currentUrl, url);     
    }

}