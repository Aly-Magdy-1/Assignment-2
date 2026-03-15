// Q5

const path = require("path");

function getFilenameandext(filePath) {
    return { name: path.parse(filePath).name, ext: path.parse(filePath).ext };
}

this_file_path = __filename;

console.log(getFilenameandext(this_file_path));