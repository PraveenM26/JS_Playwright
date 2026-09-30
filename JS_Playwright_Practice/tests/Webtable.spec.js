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
    await page.goto("https://demoqa.com/webtables");

    const table = page.locator("//*[@class='-striped -highlight table table-striped table-bordered table-hover']")

    //To get all rows in Webtable
    const tableRows = await table.locator("tr").all()

    for (let i=0 ; i<tableRows.length ;i++){
        const rows =await tableRows[i].textContent();
        console.log(rows)
    }

    //To get table headers and datas
    for(let i=0; i<tableRows.length ;i++){
        const tableHeaders= await tableRows[i].locator("th").all()
        for(let j=0; j<tableHeaders.length; j++){
            const header=await tableHeaders[j].textContent()
            console.log(header)
        }

        const tableDatas =await tableRows[i].locator("td").all()
        for(let k=0; k<tableDatas.length ;k++){
            const data= await tableDatas[k].textContent()
            console.log(data)
        }
    }


    //To get the particular row from Webtable
    const table1 = page.locator("//*[@class='-striped -highlight table table-striped table-bordered table-hover']")

    //To get all rows in Webtable
    const tableRows1 = table1.locator("tr")

    //Picking row which have word "Vega"
    const filer1= await tableRows1.filter({hasText:"Vega"}).textContent()
    console.log(filer1)

    //Picking 1st row
    console.log(await tableRows1.first().textContent())
    //Picking Last row
    console.log(await tableRows1.last().textContent())
}
)