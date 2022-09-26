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