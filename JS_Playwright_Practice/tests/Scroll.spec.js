import test,{chromium} from "@playwright/test";
test("browserLaunch", async ({}) => {

    //To launch chrome browser
    const browser = await chromium.launch({ headless: false})
    
    //To create a new profile
    const NewContext = await browser.newContext();

    //To create new tab or page
    const page = await NewContext.newPage();

    //To load url
    await page.goto("https://greenstech.in/Selenium-courses-content.html");

    //To scroll down to reference element
    const down = page.locator("//span[text()=' TRENDING SOFTWARE COURSES ']")
    await down.scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    //To scroll up to reference element
    const up = page.locator("//span[text()=' Greens Technology, ']")
    await up.scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    //Again down to reference element
    await page.locator("//span[text()=' TRENDING SOFTWARE COURSES ']").scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)
}

)