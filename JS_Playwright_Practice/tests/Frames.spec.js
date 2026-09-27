import { expect } from "@playwright/test";
import test,{chromium} from "@playwright/test";
test("browserLaunch", async ({}) => {

    //To launch chrome browser
    const browser = await chromium.launch({ headless: false})
    
    //To create a new profile
    const NewContext = await browser.newContext();

    //To create new tab or page
    const page = await NewContext.newPage();

    //To load url
    await page.goto("https://www.omrbranch.com/javatraininginchennaiomr");

    const textpage = page.locator("//p[text()=' Please Contact-']")
    console.log(await textpage.textContent())
    

    //USING FRAMELOCATOR TO SWITCH TO FRAMES//
    //---------------------------------------------------------------------------------------
    //frameLocator is used to locate the frame and then we can perform actions on the frame
    const HaveFunFrame= page.frameLocator("#java-content")

    const HaveFunText= HaveFunFrame.locator("//h4[text()='Have Fun While You Learn']")
    console.log(await HaveFunText.textContent())

    //Switching to the next frame using frameLocator 
    const AutomationFrame = page.frameLocator("//iframe[contains(@src,'automation')]")

    //switching to the next frame using frameLocator
    const coreJAvaFrame =AutomationFrame.frameLocator("#core-java")

    //Switching to the next frame [oops] using frameLocator
    const oopsFrame = coreJAvaFrame.frameLocator("#oops")
    const oopstext = oopsFrame.locator("//p[text()='1.1 OOPS']")
    console.log(await oopstext.textContent())

    //Switching to the next frame [Selenium] using frameLocator
    const seleniumFrame = AutomationFrame.frameLocator("#selenium")
    const seleniumText = seleniumFrame.locator("//h4[text()='Selenium']")
    console.log(await seleniumText.textContent())

    //Switching to the next frame [Actions] using frameLocator
    const actionsFrame = seleniumFrame.frameLocator("#actions")
    const actionstextcontent = actionsFrame.locator("//li[text()='Move to Ele']")
    console.log(await actionstextcontent.textContent())


    //USING FRAME TO SWITCH TO FRAMES//
    //---------------------------------------------------------------------------------------
    //Frame is used to switch into the any frame and then we can perform actions

    const oopsFrame1 = page.frame({url:/oops.html/})
    const oopstext1 = oopsFrame1.locator("//p[text()='1.1 OOPS']")
    console.log(await oopstext1.textContent())

    //Other variation to switch to the frame using frame method is by using name & title of the frame
    //const oopsFrame2 = page.frame({ name: 'oops' })
    //const oopsFrame3= page.frame({ title: 'OOPS' })

    //-------------------------------------------------------------------------------------------
    //To get all the frames present in the page we can use frames() method
    const allFrames = page.frames()
    console.log("Total Frames present in the page: ", allFrames.length)
    console.log("Total Frames present in the page: "+allFrames.length)

    //To get the all the frames url present in the page we can use url() method
    for (const X of allFrames){
        console.log("Frame URL: ", X.url())
    }

    //To get the frame by using index
    const frameByIndex = allFrames[1]
    console.log("Frame by index: ", await frameByIndex.name())

    //To get the frame by using its name
    const frameByName = page.frame({name: "oops"})
    console.log("Frame by name: ", await frameByName.name())

} 
)