//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Salesman = require('js/app/Salesman');
    const kimura = new Salesman();
    kimura.Name = "木村";
    kimura.Speak();
    console.log(kimura.Name, Salesman.Count);
});
