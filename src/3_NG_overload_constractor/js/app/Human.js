define(function() {
    return class Human {
        constructor() {
            this.name = null;
        }
        // コンストラクタのオーバーロードができない
        // Uncaught SyntaxError: A class may only have one constructor
        constructor(name) {
            this.name = name;
        }
        Speak() {
            console.log("name: " + this.name);
            alert("name: " + this.name);
        }
    };
});

