# このソフトウェアについて

JavaScript(ES6)でclassを使ってみる。[demo](https://ytyaru.github.io/JS.Class.20180808080000/)

# コード概要

main.js
```javascript
const Human = require('js/app/Human');
let h = new Human();
h.name = "NAME";
h.Speak();
```

Main.js
```javascript
class Human {
    constructor() {
        this.name = null;
    }
    Speak() {
        alert("name: " + this.name);
    }
};
```

# 技術情報

## プロトタイプベースのオブジェクト志向

C#やJavaとは違う。Pythonに近い。

* カプセル化できない
    * アクセス修飾子`private`, `protected`などの概念がない
* オーバーロードできない
    * コンストラクタ
        * Uncaught SyntaxError: A class may only have one constructor
    * メソッド
        * 一度でも引数が多い方を実行すると、そちらが実行されてしまうっぽい
* static
    * メソッド,getter,setterに付与できる（変数にはできない）
        * staticメソッド内の`this`はクラス変数になる（インスタンス変数でなく）
* interfaceがない

## 参考

* [クラス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes)
* [require.jsによるモジュール化](https://github.com/ytyaru/JS.requier.20180417161744)
* [ES6 チートシート](https://postd.cc/es6-cheatsheet/)
* [ECMAScript 2015 (ES6) まとめ (クラス編)](https://garafu.blogspot.com/2016/07/ecmascript2015-part2.html)

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * Chromium 56.0.2924.84 Built on Ubuntu 14.04, running on Raspbian 8.0

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

