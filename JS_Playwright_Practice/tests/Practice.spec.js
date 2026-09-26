import test,{chromium} from "@playwright/test";
test("Login", async () => {

    //To launch chrome browser
     const browser = await chromium.launch({ headless: false})

    //To create a new profile
    const context =await browser.newContext();

    //To create new tab or page
    const page = await context.newPage();

    //To load url
    await page.goto("https://www.omrbranch.com/")

   



}
)