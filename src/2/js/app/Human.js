define(function() {
    return class Human {
        constructor() {
            this.name = null;
        }
        Speak() {
            console.log("name: " + this.name);
            alert("name: " + this.name);
        }
    };
});

