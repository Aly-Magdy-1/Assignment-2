// Q6

const path = require("path");

function absolute(file_path){
    return path.isAbsolute(file_path);
}

this_file_path = __filename;

console.log(absolute(this_file_path));