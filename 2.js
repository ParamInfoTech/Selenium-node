const webDriver = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
let By = require("selenium-webdriver").By;
const fsp = require('fs').promises;

let options = new chrome.Options();
options.addArguments('headless');

async function download(){
    let driver = await new webDriver.Builder().forBrowser("chrome").
    setChromeOptions(options).
    build();
    //driver.manage().window().maximize();

    await driver.get("https://github.com/ParamInfoTech/Selenium_try");

    let width = await driver.executeScript('return document.body.parentNode.scrollWidth');
    let height = await driver.executeScript('return document.body.parentNode.scrollHeight');

    await driver.manage().window().setRect({"width": width, "height": height, "x": 0, "y": 0});

    let image = await driver.findElement(By.tagName("body")).takeScreenshot()
    await fsp.writeFile("abc.png", image, 'base64')

}

download();

