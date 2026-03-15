// Q8

const path = require("path");

relative_path = path.basename(__filename);

function resolve_path(rp){
    return path.resolve(rp);
}

console.log(resolve_path(relative_path));
