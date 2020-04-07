let webDriver = require("selenium-webdriver");
let By = webDriver.By;
let until = webDriver.until;

const chrome = require('selenium-webdriver/chrome');
let options = new chrome.Options();
options.addArguments('window-size=400,480');
let driver = new webDriver.Builder().forBrowser("chrome").setChromeOptions(options).build();
driver.get("https://library-app.firebaseapp.com/");

driver.findElement(By.css("input")).sendKeys("abc.753@gmail.com");
driver.findElement(By.css(".btn-lg")).click();

console.log(1);
driver.sleep(10000).then(function(){
    console.log(2);
    driver.findElement(By.css(".alert")).getText().then(function(text){
        console.log("Alert Text : " + text);
    });
});
