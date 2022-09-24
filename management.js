const fs = require('fs');
const jsonToTxt = require("json-to-txt");


// const txtToJson = require("txt-file-to-json");
// const dataInJSON = txtToJson({ filePath: "txt2.txt" });
// console.log(dataInJSON);

function saveFile(Data){
    const dataInString = jsonToTxt({ data: Data });
    fs.writeFileSync("DB.txt",dataInString);
    return true
}

module.exports = {saveFile}