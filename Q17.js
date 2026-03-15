// Q17

const os = require("os");

function get_system_info() {
    return {
        platform: os.platform(),
        architecture: os.arch(),
    };
}

console.log(get_system_info());