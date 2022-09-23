// 构造函数 - 为了与普通函数区别，构造函数名字的第一个字母通常大写。
// 函数体内部使用了this关键字，代表了所要生成的对象实例。
// 生成对象的时候，必须使用new命令。
var Vehicle = function(){
    this.price = 1000;
}
var Vehicle2 = function(){
    this.price = 1000;
}

var v = new Vehicle();
console.log(new Vehicle2().price);
console.log(v.price);

// 保证构造函数必须与new命令一起使用，一个解决办法是，构造函数内部使用严格模式，即第一行加上use strict
class Fubar {
    constructor(foo, bar) {
        'use strict';
        this._foo = foo;
        this._bar = bar;
    }
}
var fubar = new Fubar(10, 20);
console.log(fubar._foo, fubar._bar);

// Object.create() 创建实例对象
var person1 = {
    name: '张三',
    age: 38,
    greeting: function() {
      console.log('Hi! I\'m ' + this.name + '.');
    }
  };
  
  var person2 = Object.create(person1);
  
  person2.name // 张三
  person2.greeting() // Hi! I'm 张三.