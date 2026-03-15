// 13

const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("login", (name) => {
    console.log(`User logged in: ${name}`);
});

eventEmitter.emit("login", "Ahmed");