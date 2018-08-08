define(function() {
    return class Human {
        constructor(name = null, ...params) {
            this.name = name;
            console.log("name: " + name);
            console.log("params: " + params);
        }
        Speak(msg = null) {
            let m = "name: " + this.name
            if (msg !== null) { m += "\n" + msg; }
            console.log(m);
            alert(m);
        }
    };
});

