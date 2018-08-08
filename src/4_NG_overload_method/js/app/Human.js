define(function() {
    return class Human {
        constructor() {
            this.name = null;
        }
        Speak() {
            console.log("name: " + this.name);
            alert("name: " + this.name);
        }
        Speak(msg) {
            console.log("name: " + this.name + "\n" + msg);
            alert("name: " + this.name + "\n" + msg);
        }
    };
});

