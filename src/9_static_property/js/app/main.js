//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Human = require('js/app/Human');
    alert("First count: " + Human.Count);
    Human.CountUp();
    const yamada = new Human();
    const suzuki = new Human();
//    yamada.CountUp(); // Uncaught TypeError: yamada.CountUp is not a function
//    suzuki.CountUp(); // Uncaught TypeError: suzuki.CountUp is not a function
    Human.CountUp();
    alert("Last count: " + Human.Count);
    Human.Count = 100;
    // Human.Count = null;      // セットされてしまう！
    Human.Count = undefined;
    Human.Count = NaN;
    //Human.Count = "";         // セットされてしまう！
    alert("Set count: " + Human.Count);
});
