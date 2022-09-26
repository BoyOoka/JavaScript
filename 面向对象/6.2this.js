var person = {
    name: '张三',
    age: 18,
    age2: function (){return this.age;}(),
    describe: function () {
      return '姓名：'+ this.name;
    }
  };
console.log(person); // undefined
console.log(person.describe());

// 稍稍重构这个例子，this的动态指向就能看得更清楚。
function f() {
  return '姓名：'+ this.name;
}

var A = {
  name: '张三',
  describe: f
};

var B = {
  name: '李四',
  describe: f
};

console.log(A.describe(), B.describe());

// 使用场合

// 1.全局环境
/*
console.log(this === window)

function f(){
  console.log(this === window);
}
f()
*/
// 构造函数
class Obj {
  constructor(p) {
    this.p = p;
  }
}
// or
// var Obj = function(p){
//   this.p = p;
// }

var O = new Obj('Hello World!');
console.log(O.p);

// 对象的方法

var obj = {
  foo: function (){
    console.log(this);
  }
}
console.log(obj.foo.name);

// 以下情况 都会改变this的指向obj.foo就是一个值。
// 这个值真正调用的时候，运行环境已经不是obj了，而是全局环境，所以this不再指向obj

// 情况一
(obj.foo = obj.foo)(); // window
// 情况二
(false || obj.foo)(); // window
// 情况三
(1, obj.foo)(); // window

// 由于this的指向是不确定的，所以切勿在函数中包含多层的this。
var o = {
  f1: function () {
    console.log(this);
    var f2 = function () {
      console.log(this);
    }();
  }
}

o.f1()
// Object
// Window

// 一个解决方法是在第二层改用一个指向外层this的变量.
var o = {
  f1: function() {
    console.log(this);
    var that = this;
    var f2 = function() {
      console.log(that);
    }();
  }
}

o.f1()
// Object
// Object

// 避免数组处理方法中的 this

var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    var that = this; // 中间变量固定this
    this.p.forEach(function (item) {
      console.log(that.v + ' ' + item);
    });
  }
}
// 另一种方法是将this当作foreach方法的第二个参数，固定它的运行环境。

var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    }, this);
  }

}
// https://wangdoc.com/javascript/oop/this.html#%E4%BD%BF%E7%94%A8%E6%B3%A8%E6%84%8F%E7%82%B9
o.f()

// 绑定 this 的方法.JavaScript 提供了call、apply、bind这三个方法，来切换/固定this的指向
var obj = {} ;
var f = function f(){
  return this;
};

console.log(f.call(obj) == obj);
// 全局环境运行函数f时，this指向全局环境（浏览器为window对象）；
// call方法可以改变this的指向，指定this指向对象obj，然后在对象obj的作用域中运行函数f

var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call(); // 123
a.call(null); // 123
a.call(undefined); // 123
// a.call(window) // 123
a.call(obj); // 456

// call的第一个参数就是this所要指向的那个对象，后面的参数则是函数调用时所需的参数
// func.call(thisValue, arg1, arg2, ...)

// Function.prototype.apply()
// 与function.call 一致，唯一的区别是数组作为执行参数
// func.apply(thisValue, [arg1, arg2, arg3....])

function f2(x, y){
  console.log(x + y);
}

f2.call(null, 1, 1); // 2
f2.apply(null, [1, 1]); // 2

// 将数组的空元素变为undefined
var b = [1,2,3,4,5,6,7,8,99];
var a = ['a', , 'b'];
console.log('Max data', Math.max.apply(null, b));
function print(i) {
  console.log(i);
}

a.forEach(print)
// a
// b

Array.apply(null, a).forEach(print)

// bind绑定this的对象
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var func = counter.inc.bind(counter);
func();
counter.count // 1