import { expect } from "@playwright/test";
import test,{chromium} from "@playwright/test";
test("browserLaunch", async ({}) => {

    //To launch chrome browser
    const browser = await chromium.launch({ headless: false})
    
    //To create a new profiled
    const NewContext = await browser.newContext();

    //To craete new tab or page
    const page = await NewContext.newPage();

    //To load url
    await page.goto("https://www.omrbranch.com/");

    //To get current url
    const URL=page.url()
    console.log(URL)

    //To get page title
    const Title=await page.title()
    console.log(Title)
    await expect(page).toHaveTitle("Thoraipakkam OMR Branch");

    //Enter Login credentials
    const emailInput = page.locator("//input[@id='email']")
    await emailInput.fill("test@example.com")

    const emailpassword = page.locator("#pass")
    await emailpassword.fill("testpassword")

    //To click on remember me checkbox
    const rememberMeCheckbox = page.locator(".form-check-input")
    await rememberMeCheckbox.check()

    await page.waitForTimeout(3000)

    await rememberMeCheckbox.uncheck()

    //Click on login button
    const loginButton = page.locator("//*[text()='Login']")
    await loginButton.click()

    await page.waitForTimeout(5000)

    ////To get page title
    // const Title=await page.title()
    // console.log(Title)
    ////Assert-Need to use--> import { test, expect } from '@playwright/test';
    //await expect(page).toHaveTitle("Thoraipakkam OMR Branch");

    
} )