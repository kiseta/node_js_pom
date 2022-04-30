//addNewUser.spec.js

const Methods = require ('../methods/methods');
const data = require('../data/data');


describe('Moodle: Add New User', () => {

  beforeEach(async function(){
    console.log(data.hr, this.currentTest.title, "Test started:", new Date().toLocaleString(), "\n")
  });

  afterEach(async function(){
    console.log(data.hr, this.currentTest.title, "Test ended at", new Date().toLocaleString(), "\n")
  });


    it(`Launch ${data.app} app, verify Home page`, async () => {
        
      await Methods.launchApp(data.baseUrl, data.homePageTitle)


    });
   
    it('Login as Admin User, validate Dashboard page, logout' , async () => {

      await Methods.loginAs(data.admin_username, data.admin_password);
      await Methods.validateLogin(data.admin_fullName);
      await Methods.logOut();

    });




});