define(function(require, exports, module) {
    const Human = require('js/app/Human');
    return class Salesman extends Human {
        constructor() { super(); }
        // オーバーライド
        Speak() {
            super.Speak(); // Salesman.js:7 Uncaught SyntaxError: 'super' keyword unexpected here
            alert("私、" + super.Name + "と申します。本日はどうぞ宜しくお願いいたします。");
            console.log("私、" + super.Name + "と申します。本日はどうぞ宜しくお願いいたします。");
        }
    };
});

