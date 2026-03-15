// Q14

const fs = require("fs");
const path = require("path");

function write_file_asynchronously(file_path, content, callback) {
    fs.writeFile(file_path, content, 'utf8', (err) => {
        if (err) {
            callback("Error writing file: " + err);
        } else {
            callback("File written successfully.");
        }
    });
}

write_file_asynchronously(path.resolve("file.txt"), "Hello, World!", (result) => {
    console.log(result);
});
