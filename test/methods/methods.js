// methods.js
const assert = require('assert');
const data = require ('../data/data');


class Methods {
   
    //to go to a URL 
    open (path) {
        return browser.url(path);
    }

    async launchApp(url, title){
        // await browser.url(url);
        await this.open(url)
        await browser.maximizeWindow();
        await this.validateHomePage(url, title)
        
    }
    
    async validateHomePage(url, title){
        await this.validatePageTitle(title);
        await this.validatePageUrl(url);
    }

    async validatePageTitle(title){
        const currentTitle = await browser.getTitle();
        assert.strictEqual(currentTitle, title);
    }

    async validatePageUrl(url){
        const currentUrl = await browser.getUrl();
        assert.strictEqual(currentUrl, url);     
    }


    //Login page locators:
    get loginLink(){ return $('=Log in')  }
    get inputUsername(){ return $('#username') }
    get inputPassword(){ return $('#password') }
    get loginBtn(){ return $('#loginbtn')  }

    get userFullName(){ return $('span.usertext.mr-1') }
    get logoutLink(){ return $('.menu-action-text=Log out') }


    //to enter username and password into login form and click login button
    async loginAs (username, password) {

        // await $('=Log in').click();
        await this.loginLink.click();
        await this.validatePageTitle(data.loginPageTitle);

        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();

        await this.validatePageTitle(data.dashboardPageTitle)
    }

    async validateLogin(fullname){
        // add validate user Full Name
        const fullNameText = await this.userFullName.getText();
        assert.strictEqual(fullNameText, fullname);
    }

    async addNewUser(){

    }

    async logOut(){
        await this.userFullName.click();
        await this.logoutLink.click();
        await this.validateHomePage(data.baseUrl, data.homePageTitle)
    }

    async searchUser(email){

    }

    async deleteUser(email){
        await this.searchUser(email)
    }
}
 

module.exports = new Methods();