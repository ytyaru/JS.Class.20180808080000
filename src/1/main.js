const Human = class Human {
    constructor() {
        this.name = null;
    }
    Speak() {
        console.log("name: " + this.name);
        alert("name: " + this.name);
    }
};
let human = new Human();
human.Speak();
human.name = "NAME";
human.Speak();
