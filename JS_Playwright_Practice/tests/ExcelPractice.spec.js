import xlsx from 'xlsx';
import { test } from '@playwright/test';

test ("ExcelPractice", async ({}) => {
//Adding excel file path
const filePath = 'JS_Playwright_Practice/UtilFiles/PracticeExcel.xlsx' 

//Reading the excel file by adding workbook variable and using readFile method of xlsx
const workbook = xlsx.readFile(filePath);

//To get the sheet names of the excel file
const allSheets = workbook.SheetNames;
console.log(allSheets);

//To get the first sheet of the excel file
const sheet = workbook.Sheets[allSheets[0]];

const jsonData = xlsx.utils.sheet_to_json(sheet);
console.log(jsonData);

//We will receive  JSON object in Array format. We can access the data by using index and key name of the column
//To iterate and get the data from the excel file, we can use forEach loop

for (const data of jsonData) {
    console.log(data)
    console.log(data.UserName)
    console.log(data.Password)
}

const jsonData1 = xlsx.utils.sheet_to_json(sheet)
console.log("Before update", jsonData1)

//Adding new row of the excel file
jsonData1.push({UserName: "NewUser", Password: "NewPassword"})
console.log("After update", jsonData1)

//Updating the 2nd row of excel file with new data
//jsonData1[2]={UserName: "UpdatedUser", Password: "UpdatedPassword"} or

jsonData1[1].UserName="Updateuser@gmail.com"
jsonData1[1].Password="UpdatedPassword@123"
console.log("After update", jsonData1)

//Now data is changed in the jsonData1 variable, we need to feed this data to excel file.
// For that we need to convert this data into sheet format and then write it to the excel file

const updatedNewSheet=xlsx.utils.json_to_sheet(jsonData1);

//Now we need to replace the old sheet with the new updated sheet in the "workbook variable"
workbook.Sheets[allSheets[0]] = updatedNewSheet;

//To save the updated data to the excel file, we need to use writeFile method of xlsx 
})