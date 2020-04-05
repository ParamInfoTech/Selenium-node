let webDriver = require("selenium-webdriver");
let By = require("selenium-webdriver").By;
let until = require("selenium-webdriver").until;
let Key = require("selenium-webdriver").Key;

async function googleSearch(){
    let driver = await new webDriver.Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.com");
    driver.manage().window().maximize();
    driver.manage().deleteAllCookies();
    await driver.findElement(By.name("q")).sendKeys("Selenium", " example", Key.RETURN);
}

googleSearch();