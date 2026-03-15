// Q14

const fs = require("fs");
const path = require("path");

function read_file_synchronously(file_path) {
    return fs.readFileSync(file_path, 'utf8');
}

console.log(read_file_synchronously(path.resolve("file.txt")));
