const txtToJson = require("txt-file-to-json");
const Data = txtToJson({ filePath: "DB.txt" });

 function findAll () {
    return Data
  }
  
function findByUsername (username) {
    for (var i = 0; i < Data.length; i++) {
      if (Data[i].username == username){return Data[i];}
    } 
  }


 module.exports ={findAll,findByUsername};