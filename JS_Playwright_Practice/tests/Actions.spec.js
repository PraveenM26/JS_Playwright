//import { expect } from "@playwright/test";
import test,{chromium} from "@playwright/test";

test("ActionsClass", async ({}) => {

    //To launch chrome browser
    const browser = await chromium.launch({ headless: false})
    
    //To create a new profiled
    const NewContext = await browser.newContext();

    //To craete new tab or page
    const page = await NewContext.newPage();

    //To load url
    await page.goto("https://www.omrbranch.com/seleniumtraininginchennaiomr");

    //For mouse hover action, we have hover() method of page class
    const Hovercourses = page.locator("//a[text()='Courses ']")
    await Hovercourses.hover()

    //To perform drag and drop action
    const src=page.locator("//*[text()=' Actions ']")
    const tar=page.locator("//ol[@id='selenium-class']/li")

    //For drag and drop action, we have dragTo() method of locator class
    await src.dragTo(tar)

    // //To perform right click action, we have click() method of locator class with right click option
    const rightClick = page.locator("//*[text()=' Actions ']")
    await rightClick.click({button: "right"})

    //To perform double click action, we have dblclick() method of locator class
    const doubleClick = page.locator("//*[contains(text(),'Double click')]")
    await doubleClick.dblclick()

    //Another way to perform double click action, we have click() method of locator class with clickCount option
    //await doubleClick.click({clickCount: 2})

    await page.waitForTimeout(3000)
}
)
