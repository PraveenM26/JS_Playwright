import test,{chromium} from "@playwright/test";
test("browserLaunch", async ({}) => {

    //To launch chrome browser
    const browser = await chromium.launch({ headless: false})
    //To create a new profile
    const NewContext = await browser.newContext();
    //To craete new tab or page
    const page = await NewContext.newPage();
    //To load url
    await page.goto("https://www.omrbranch.com/");

    //To get current url
    const URL=page.url
    console.log(URL)

    //To get page title
    const Title=await page.title()
    console.log(Title)

    //Need to use import { test, expect } from '@playwright/test';
    //await expect(page).toHaveTitle("Thoraipakkam OMR Branch");


} )