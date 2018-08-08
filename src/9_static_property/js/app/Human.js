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
        static get Count() { if (this._count === undefined) { this._count = 0; } return this._count; }
        static set Count(v) { if (isFinite(v)) { this._count = v; } }
        static CountUp() {
            console.log(this);
            if (this._count === undefined) { this._count = 0; }
            this._count++;
            console.log("count: " + this._count);
            alert("count: " + this._count);
        }
    };
});

