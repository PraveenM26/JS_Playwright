import test,{chromium} from "@playwright/test";
test("Locator methods", async ({}) => {

    //To launch chrome browser
    const browser = await chromium.launch({ headless: false})
    
    //To create a new profile
    const NewContext = await browser.newContext();

    //To create new tab or page
    const page = await NewContext.newPage();

    //To load url
    await page.goto("https://www.omrbranch.com/");

    
    const Name = page.locator("//a[contains(text(),'MR. VELMURUGAN')]")

    //isvisible() method is used to check whether the element is visible or not
    const visible = await Name.isVisible()
    console.log("Is the name visible? : "+visible)

    //isHidden() method is used to check whether the element is hidden or not
    const hidden = await Name.isHidden()
    console.log("Is the name hidden? : "+hidden)

    //isEnabled() method is used to check whether the element is enabled or not
    const enabled = await Name.isEnabled()
    console.log("Is the name enabled? : "+enabled)

    //isDisabled() method is used to check whether the element is disabled or not
    const disabled = await Name.isDisabled()
    console.log("Is the name disabled? : "+disabled)

    //isEditable() method is used to check whether the element is editable or not
    const Textbox= page.locator("#email")
    const editable = await Textbox.isEditable()
    console.log("Is the email textbox editable? : "+editable)
    await Textbox.fill("ABC")


    //isChecked() method is used to check whether the checkbox is checked or not
    const Checkbox= page.locator("//input[@name='remember_me']")
    await Checkbox.check()
    console.log("Is the checkbox checked? (After click) : ", await Checkbox.isChecked())
    await page.waitForTimeout(3000)
    await Checkbox.uncheck()
    console.log("Is the checkbox checked? (After second click) : ", await Checkbox.isChecked())
    await page.waitForTimeout(3000)

    const count = await page.locator("//a[contains(text(),'ABCD')]").count();
    if (count > 0) {
    console.log('Locator exists');
    } else {
    console.log('Locator not found');
    }
    

}
)