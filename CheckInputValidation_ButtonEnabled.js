let webDriver = require("selenium-webdriver")
let By = webDriver.By;
let until = webDriver.until;

let chrome = require("selenium-webdriver/chrome");
let options = new chrome.Options();
options.addArguments("window-size=480,400");
let driver = new webDriver.Builder().forBrowser("chrome").setChromeOptions(options).build();

driver.get("https://library-app.firebaseapp.com/");

driver.findElement(By.css("input")).then(function (input) {
    input.clear();
    input.sendKeys("Test@abc.com");
    driver.findElement(By.css(".btn-lg")).isEnabled().then(function (val) {
        console.log(val)
        if(val){
            console.log("Input is valid");
            driver.findElement(By.css(".btn-lg")).click().then(function(){
                console.log("Button is Clicked");
            });
        } else{
            console.log("Input is invalid and Button is not enabled");
        }
    });
}).catch(function(ex){
    console.log(ex);
});