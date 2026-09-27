import test,{chromium} from "@playwright/test";
test("Screenshot", async ({}) => {

//To launch chrome browser
const browser = await chromium.launch({ headless: false})
    
//To create a new profile
const NewContext = await browser.newContext();

//To create new tab or page
const page = await NewContext.newPage();

//To load url
await page.goto("https://greenstech.in/Selenium-courses-content.html");

//To take screenshot of the page
await page.screenshot({path:"JS_Playwright_Practice//Screenshots//screenshot1.png"})

//To take full page screenshot
await page.screenshot({path:"JS_Playwright_Practice//Screenshots//screenshot2.jpeg", fullPage:true})

//To take screenshot of the specific element
const elementToScreenshot = page.locator("//h2[text()=' Best IT Training Institutes']")
await elementToScreenshot.screenshot({path:"JS_Playwright_Practice//Screenshots//screenshot3.jpg"})

await page.locator("//h2[text()=' Best IT Training Institutes']").screenshot({path:"JS_Playwright_Practice//Screenshots//screenshot4.jpg"})


} )