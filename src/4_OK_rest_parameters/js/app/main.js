//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    const Human = require('js/app/Human');
    let human = new Human();
    human.Speak();
    human.name = "NAME";
    human.Speak("MESSAGE!!");
    human.name = "NAME-2";
    human.Speak(); // Speak(msg)のほうが実行されてしまう！　同名の別関数がロードされたときは引数の多い方が優先？　だったはずが、デフォルト引数（可変長引数）で解決！

    let h2 = new Human("NAME-3");
    h2.Speak();
    h2.Speak("メッセージ");
});
