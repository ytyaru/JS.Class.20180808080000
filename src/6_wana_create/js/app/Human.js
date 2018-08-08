define(function() {
    return class Human {
        constructor() {
            this._name = null;
        }
        get Name() { return this._name; }
        set Name(v) { if (v) { this._name = v; console.log("set Name: " + this._name); } }
        Speak() {
            console.log("name: " + this._name);
            alert("name: " + this._name);
        }
        Speak(msg) {
            console.log("name: " + this._name + "\n" + msg);
            alert("name: " + this._name + "\n" + msg);
        }
    };
});

