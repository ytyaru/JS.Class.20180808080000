//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Human = require('js/app/Human');
    Human.CountUp();

    const yamada = new Human();
    const suzuki = new Human();
//    yamada.CountUp(); // Uncaught TypeError: yamada.CountUp is not a function
//    suzuki.CountUp(); // Uncaught TypeError: suzuki.CountUp is not a function
    Human.CountUp();
});
