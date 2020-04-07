let webDriver = require("selenium-webdriver");
let By = webDriver.By;
let until = webDriver.until;

let driver = new webDriver.Builder().forBrowser("chrome").build();
driver.get("https://library-app.firebaseapp.com/");

console.log();
driver.findElement(By.css("input")).sendKeys("abc.753@gmail.com");
driver.findElement(By.css(".btn-lg")).click();
console.log(1);
driver.wait(until.elementLocated(By.css(".alert-success")), 10000).then(function(elem){
    console.log(2);
    driver.findElement(By.css(".alert-success")).getText().then(function(text){
        console.log("Alert Text : " + text);
    });
}).catch(function(ex){
    //Check for error: Element not found
    console.log(ex.name);
});