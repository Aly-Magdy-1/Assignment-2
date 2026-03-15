// Q12

const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
    console.log("Welcome event triggered!");
});

eventEmitter.emit("start");