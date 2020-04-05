let webDriver = require("selenium-webdriver");
let By = webDriver.By;
let until = webDriver.until;

let driver = new webDriver.Builder().forBrowser("chrome").build();
driver.get("https://library-app.firebaseapp.com/");

driver.findElement(By.css("input")).then(function(el){
   console.log("Found Element : " + el);
});

driver.findElement(By.css(".btn-lg")).getText().then(function (text){
   console.log("Found Visible Text : " + text);  //used '.' before 'btn-lg' because: it is css class name
});

driver.findElement(By.css("#ember3")).then(function (el){
   console.log("Found Element by id ember3 : " + el);  //used '#' before 'ember3' because: it is 'id'
});

driver.findElement(By.linkText("Authors")).getText().then(function (text) {
   console.log("Link Text : " + text);
});

//Search for multiple Elements
// search for 'li' tag inside 'nav' tag
driver.findElements(By.css("nav li")).then(function (elements) {
   console.log("Found Elements : " + elements.length);
   elements.map(function(elem){
      elem.getText().then(function(text){
         console.log("Link Text : " + text);
      });
   });
});
//driver.sleep(1000);
//driver.quit(); 