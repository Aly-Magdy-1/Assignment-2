// Q16

const fs = require("fs");

function dir_exists(dirPath) {
    return fs.existsSync(dirPath);
}

console.log(dir_exists('./mySynchronousFolder'));