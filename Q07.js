// Q7

const path = require("path");

segments = ["src","components", "App.js"]

function join_segments(segments){
    return path.join(...segments);
}

console.log(join_segments(segments));