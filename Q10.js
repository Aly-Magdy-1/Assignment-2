// Q10

const fs = require("fs");

function deleteFile(filePath) {
    return fs.unlinkSync(filePath);
}

this_file_path = "C:\\Users\\Aly\\OneDrive\\Assignment 2\\file.txt";


if(fs.existsSync(this_file_path)){
    deleteFile(this_file_path)
    console.log("File deleted successfully.");
}  
else{
    console.log("File does not exist.");
}




