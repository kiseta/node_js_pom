//login.spec.js

const Pages = require ('../pages/pages');
const data = require('../data/data');

// const App = require ('../pages/app');
// const assert = require('assert');
// const LoginPage = require ('../pages/login.page');
// const HomePage = require('../pages/home.page');
// const DashboardPage = require('../pages/dashboard.page')


describe('Moodle: Add New User', () => {

  beforeEach(async function(){
    console.log(data.hr, this.currentTest.title, "Test started:", new Date().toLocaleString(), "\n")
  });

  afterEach(async function(){
    console.log(data.hr, this.currentTest.title, "Test ended at", new Date().toLocaleString(), "\n")
  });


    it(`Launch ${data.app} app, verify Home page`, async () => {
        
      await Pages.launchApp(data.baseUrl, data.homePageTitle)
      // await LoginPage.loginAs(data.admin_username, data.admin_password);

    });
   
    it('Login, validate Dashboard page' , async () => {
      // await LoginPage.navigate();
      // await LoginPage.validatePageTitle(data.loginPageTitle);
      await Pages.loginAs(data.admin_username, data.admin_password);
      // await DashboardPage.validatePageTitle(data.dashboardPageTitle);
      // validate user full name
      // validate url
    });




});