const webDriver = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
let By = require("selenium-webdriver").By;
const fsp = require('fs').promises;

let options = new chrome.Options();
options.addArguments('headless');
options.addArguments('window-size=400,480');
let driver = new webDriver.Builder().forBrowser("chrome").setChromeOptions(options).build();

driver.get("https://www.loksatta.com/");
//driver.get("https://in.yahoo.com/?p=us");

async function download(driver){
    let width = await driver.executeScript('return document.body.scrollWidth');
    let height = await driver.executeScript('return document.body.scrollHeight');
    await driver.manage().window().setRect({"width": width, "height": height+100, "x": 0, "y": 0});
    console.log(height);
    let image = await driver.findElement(By.tagName("body")).takeScreenshot()
    await fsp.writeFile("abc.png", image, 'base64')
}

download(driver);



