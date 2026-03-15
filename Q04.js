// Q4

const path = require("path");

function getFileext(filePath) {
    return path.extname(filePath);
}

this_file_path = __filename;

console.log(getFileext(this_file_path));