import test,{chromium} from "@playwright/test";
test("Navigations", async ({}) => {

    //To launch chrome browser
    const browser = await chromium.launch({ headless: false})
    
    //To create a new profile
    const NewContext = await browser.newContext();

    //To create new tab or page
    const page = await NewContext.newPage();

    //To load url
    await page.goto("https://greenstech.in/Selenium-courses-content.html");
    await page.waitForTimeout(2000)
    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(2000)
    await page.goto("https://www.instagram.com/")

    await page.waitForTimeout(3000)

    await page.goBack() //To go back to the previous page(fb page)

    await page.waitForTimeout(3000)

    await page.goForward() //To go forward to the next page(instagram page)

    await page.waitForTimeout(3000)

    await page.goBack()
    await page.goBack() //To go back to the previous page(fb page) and then again to the previous page(greens tech page)
    await page.waitForTimeout(3000)

    await page.reload() //To reload the current page(greens tech page)

}
)