//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Human = require('js/app/Human');
    let human = new Human();
    human.Speak();
    human.name = "NAME";
    human.Speak();
});
