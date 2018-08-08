//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Human = require('js/app/Human');
    let human = new Human();

    human.addr = "ADDR"; // クラス定義に存在しないaddrが新規作成されてしまう！
    console.log("human.addr: ", human.addr)
    alert("human.addr: ", human.addr);
});
