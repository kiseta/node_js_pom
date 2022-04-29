var rnd = require('generate-random-data');


// ------------------------------- site data --------------------------------------
const hr = '\n--------------~*~------------\n';
const baseUrl = 'http://52.39.5.126/';
const app = "\'Moodle\'";
const homePageTitle = "Software Quality Assurance Testing";
const loginPageTitle = "Software Quality Assurance Testing: Log in to the site";
const dashboardPageTitle = "Dashboard";
const usersPageTitle = "SQA: Administration: Users: Accounts: Browse list of users";
const addNewUserPageTitle = "SQA: Administration: Users: Accounts: Add a new user"

// -------------------------------- admin data ----------------------------------
const admin_username = 'tkuser'
const admin_password = 'Moodle!123';
const admin_fullName = 'Test User';

// --------------------------------- new user data ---------------------------------------
var new_firstName = [rnd.femaleFirstName(), rnd.maleFirstName()][Math.floor(Math.random() * 2)];
var new_lastName = rnd.lastName();
var new_userName = (new_firstName.concat("", new_lastName)).toLowerCase().substring(0, 10) + rnd.int(11,99);
var new_password = 'Moodle!123';
var new_fullName = new_firstName.concat(" ", new_lastName);
var tld = rnd.tld();
var random_domain = rnd.domain(tld);
var new_email = new_userName + "@" + random_domain;
var description_text = rnd.sentence(10, 50)

// -------------------------------------------------------------------------------------------

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
// ------------------------------------------------------------------------------------

module.exports = {
    hr, baseUrl, app, homePageTitle, loginPageTitle, dashboardPageTitle, usersPageTitle,addNewUserPageTitle, 
    admin_username, admin_password, admin_fullName,
    new_firstName, new_lastName, new_userName, new_password, new_fullName, tld, random_domain, new_email, description_text, dateTime
}
