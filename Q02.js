// Q1

const path = require("path");

function getFileName(filePath) {
    return path.basename(filePath);
}

this_file_path = __filename;

console.log(getFileName(this_file_path));