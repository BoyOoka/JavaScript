// function命令声明的代码区块，就是一个函数。
function prints(s){
    console.log(s);
}

prints('test1');

// 函数表达式
var print = function(s){
    console.log(s);
};

prints('test2');

// Function 构造函数
var add = new Function(
    'x',
    'y',
    'return x + y'
);
// 等同于
function add(x, y) {
    return x + y;
  }

//  递归（recursion）- 斐波那契数列的代码
function fib(num){
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 2) + fib(num - 1);
}
console.log(fib(3));

// 函数赋值给一个变量
var operator = add;

// 将函数作为参数和返回值
function a(op){
    return op;
}
console.log(a(operator(3,4)));


// 函数名的提升。采用function命令声明函数时，整个函数会像变量声明一样，被提升到代码头部
f();

function f(x, b) {
    /**
     * 注释内容
     * 新的内容
     */
     return x + b;
    }
var multiline = function (fn) {
    var arr = fn.toString().split('\n');
    return arr.slice(1, arr.length - 1).join('\n');
    };
     
// 函数的属性和方法
console.log(
    f.name,
    f.length, // 传人参数个数
    f.toString(),
    multiline(f),
)

// 函数内部同样会变量提升
function foo(x) {
    if (x > 100) {
      var tmp = x - 100;
    }
  }
  
// 等同于
function foo(x) {
var tmp;
if (x > 100) {
    tmp = x - 100;
};
}

// 函数本身的作用域
var a = 1;
var x = function () {
  console.log(a);
};

function fe() {
//   var a = 2;
  a = 2;  //重新定义a 和 直接调用a
  x();
}

fe() // 1

// 函数参数不是必需的，JavaScript 允许省略参数

function f(a, b) {
    return a;
  }
  
  f(1, 2, 3) // 1
  f(1) // 1
  f() // undefined
  
  f.length // 2

// 函数参数是复合类型的值（数组、对象、其他函数）,传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值
var obj = { p: 1 };

function fo(o) {
  o.p = 2;
  o = [1,2,3]//   注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。
}
fo(obj);

console.log(obj.p); // 2

// arguments 对象
var fa = function (one) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
  }
  
  fa(1, 2, 3)
//   正常模式下，arguments对象可以在运行时修改。
var fa = function(a, b){
    // "use strict" // 开启严格模式
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
}
console.log(fa(1, 2));


// arguments对象带有一个callee属性，返回它所对应的原函数。

var fcall = function () {
  console.log(arguments.callee === fcall);
}
fcall();

// 闭包
// https://wangdoc.com/javascript/types/function.html#%E9%97%AD%E5%8C%85

/**
 * 闭包的最大用处有两个，一个是可以读取外层函数内部的变量，
 * 另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。
 * 请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。
 */
 function createIncrementor(start) {
    return function () {
      return start++;
    };
  }
  
  var inc = createIncrementor(5);
  
  inc() // 5
  inc() // 6
  inc() // 7

// 闭包的另一个用处，是封装对象的私有属性和私有方法。
function Person(name) {
    var _age;
    function setAge(n) {
      _age = n;
    }
    function getAge() {
      return _age;
    }
  
    return {
      name: name,
      getAge: getAge,
      setAge: setAge,
      age: _age,
    };
  }
  
  var p1 = Person('张三');
  p1.setAge(18);
  console.log(p1);
  console.log(p1.getAge());

//  eval命令接受一个字符串作为参数，并将这个字符串当作语句执行。
eval('var a = 1;');
a // 1
