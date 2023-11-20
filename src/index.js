const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
    //Write your code here
    try{
        await fs.access(fileName);
        console.log(`${fileName} already exists, Skiping write operation`);
    }catch(err){
        await fs.writeFile(fileName,fileContent);
        console.log(`${fileName} created and data written sucessfully!`);
    }
  
};
module.exports =  writeFile ;
