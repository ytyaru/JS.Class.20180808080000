//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Human = require('js/app/Human');
    Human.SpeakTypeName();

    const yamada = new Human();
    const suzuki = new Human();
//    yamada.SpeakTypeName(); // Uncaught TypeError: yamada.SpeakTypeName is not a function
//    suzuki.SpeakTypeName(); // Uncaught TypeError: suzuki.SpeakTypeName is not a function
    Human.SpeakTypeName();
});
