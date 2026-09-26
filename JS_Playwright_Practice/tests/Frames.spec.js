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
    await page.goto("https://www.omrbranch.com/javatraininginchennaiomr");

    const textpage = page.locator("//p[text()=' Please Contact-']")
    console.log(await textpage.textContent())
    
    //frameLocator is used to locate the frame and then we can perform actions on the frame
    const HaveFunFrame= page.frameLocator("#java-content")

    const HaveFunText= HaveFunFrame.locator("//h4[text()='Have Fun While You Learn']")
    console.log(await HaveFunText.textContent())

    //const AutomationFrame= page.frameLocator("//iframe[contains(@src,'automation')]")



} 
)