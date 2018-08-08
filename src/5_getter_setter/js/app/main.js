//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Human = require('js/app/Human');

    const yamada = new Human();
    yamada.Name = "山田";
    yamada.Name = null;      // 無視
    yamada.Name = undefined; // 無視
    yamada.Name = 0;         // 無視
    yamada.Name = false;     // 無視
    yamada.Name = "";        // 無視
    console.log("yamada.Name: ", yamada.Name);
    yamada.Speak();

    const suzuki = new Human();
    suzuki.Name = "鈴木";
    console.log("suzuki.Name: ", suzuki.Name);
    suzuki.Speak();
});
