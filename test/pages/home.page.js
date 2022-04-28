//home.page.js

const App = require ('./app');
const data = require ('../data/data')

class HomePage extends App{

        //page locators:

        get pageHeader(){ 
            return $('div.page-header-headings > h1') 
        }

        //page actions:  
        
        async isPageHeaderExist() {
            return await this.pageHeader.isDisplayed(); 
        }
        
        async getPageHeader(){
            return  await this.pageHeader.getText();
        }

        async launchApp(url, title){
            await browser.url(url);
            await browser.maximizeWindow();
            await this.validatePageTitle(title);
            await this.validatePageUrl(url);
        }
    }

module.exports = new HomePage();