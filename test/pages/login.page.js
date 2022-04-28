//login.page.js

const App = require ('./app');
const data = require ('../data/data')
 
class LoginPage extends App {
 
     //page locators:
        get inputUsername(){ 
            return $('#username') 
        }
        get inputPassword(){ 
            return $('#password') 
        }
        get loginBtn(){ 
            return $('#loginbtn') 
        }
 
      //page actions:  
        //to open a URL
        async open(url) {
            await super.open(url)
        } 

        async navigate(){
            const LoginLink = await $('=Log in');
            await LoginLink.click();
            await this.validatePageTitle(data.loginPageTitle);
        }

        //to enter username and password into login form and click login button
        async loginAs (username, password) {
            await this.navigate();
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.loginBtn.click();
            await this.validatePageTitle(data.dashboardPageTitle)
        }
    }
 
module.exports = new LoginPage();