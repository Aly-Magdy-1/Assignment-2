// Q9

const path = require("path");

path1 = "folder1";
path2 = "folder2/file.txt";

function join_segments(p1, p2){
    return path.join(p1, p2);
}

console.log(join_segments(path1, path2));