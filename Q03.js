// Q3

const path = require("path");

obj = { dir: "/folder", name: "app", ext: ".js"}

function build_path(obj){
    return path.format(obj);
}

console.log(build_path(obj));