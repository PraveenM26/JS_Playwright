import xlsx from 'xlsx';
//Adding excel file path
const filePath = 'JS_Playwright_Practice\UtilFiles\PracticeExcel.xlsx' 

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