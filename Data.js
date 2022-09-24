<<<<<<< HEAD
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


=======
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


>>>>>>> 1f2c30fb6b0b64e7246b8d5f11cf2c889cf015ff
 module.exports ={findAll,findByUsername};