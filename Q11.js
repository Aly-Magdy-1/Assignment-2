// Q11

const fs = require("fs");

function create_sync_Folder(folderPath) {
    fs.mkdirSync(folderPath);
}

try {
    create_sync_Folder('./mySynchronousFolder');
    console.log('Folder created successfully.');
} catch (error) {
    console.log('Error creating folder:');
}

