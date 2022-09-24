<<<<<<< HEAD
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

=======
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

>>>>>>> 1f2c30fb6b0b64e7246b8d5f11cf2c889cf015ff
module.exports = {saveFile}