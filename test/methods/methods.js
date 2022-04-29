// methods.js
const assert = require('assert');
const data = require ('../data/data')


class Methods {
   
    //to go to a URL 
    open (path) {
        return browser.url(path);
    }

    async launchApp(url, title){
        // await browser.url(url);
        await this.open(url)
        await browser.maximizeWindow();
        await this.validatePageTitle(title);
        await this.validatePageUrl(url);
    }
    
    async validatePageTitle(title){
        const currentTitle = await browser.getTitle();
        await assert.strictEqual(currentTitle, title);
    }

    async validatePageUrl(url){
        const currentUrl = await browser.getUrl();
        await assert.strictEqual(currentUrl, url);     
    }

    //Login page locators:
    get inputUsername(){ return $('#username') }
    get inputPassword(){ return $('#password') }
    get loginBtn(){ return $('#loginbtn')  }

    //to enter username and password into login form and click login button
    async loginAs (username, password) {

        await $('=Log in').click();
        await this.validatePageTitle(data.loginPageTitle);

        await $('#username').setValue(username);
        await $('#password').setValue(password);
        await $('#loginbtn').click();

        await this.validatePageTitle(data.dashboardPageTitle)

        // add validate user Full Name

        
    }
    async addNewUser(){

    }

    async Logout(){

    }

    async searchUser(email){

    }

    async deleteUser(email){
        await this.searchUser(email)
    }
}
 

module.exports = new Methods();