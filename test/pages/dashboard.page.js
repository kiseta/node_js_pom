//dashboard.page.js

const Page = require ('./app');

class DashboardPage extends Page{

        //page locators:

        get pageHeader(){ 
            return $('span=Dashboard') 
            
        }

        //page actions:  
        
        async isPageHeaderDisplayed() {
            return await this.pageHeader.isDisplayed(); 
        }
        
    }

module.exports = new DashboardPage();