// https://wangdoc.com/javascript/types/object.html
var obj = {
    'foo': 'Hello',
    'bar': 'World',
    1: 'number',
    c: 'test'
};
console.log(obj.foo, obj[1], obj.c, obj['c']);
// 对象的每一个键名又称为“属性”（property）
// ，它的“键值”可以是任何数据类型。如果一个属性的值为函数，
// 通常把这个属性称为“方法”，它可以像函数那样调用。
var obj2 = {
    p: function (x) {
      return 2 * x;
    }
  };
  
obj2.p(1) // 2
/**
 * { foo: 123 }
 * JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，
 * 这是一个表达式，表示一个包含foo属性的对象；第二种可能是，这是一个语句，
 * 表示一个代码区块，里面有一个标签foo，指向表达式123。
 * JavaScript 引擎的做法是，如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。
 * 如果要解释为对象，最好在大括号前加上圆括号。因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。
 */
// ({ foo: 123 }) // 正确
// { console.log(123) } // 报错
eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}

// 属性的赋值
obj.foo = '你好';
obj['bar'] = 'World';
console.log(obj);

// 属性查看
s = Object.keys(obj);
console.log(s);

// 属性删除
delete obj[1]; //注意，删除一个不存在的属性，delete不报错，而且返回true。
var obj3 = Object.defineProperty({}, 'p', {
    value: 123,
    configurable: false
  });
// 无法更改，删除
delete obj3.p;
obj3.p = 456;
console.log(obj3.p);

// 属性是否存在， 不能识别哪些属性是对象自身的，哪些属性是继承的 
var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true
obj.hasOwnProperty('toString') // false

// 遍历属性 for...in
// 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
// 它不仅遍历对象自身的属性，还遍历继承的属性。
for (var i in obj){
    if (obj.hasOwnProperty(i)) {
        console.log("key: ", i);
        console.log("value: ", obj[i]);
    }
}

// with 语句
/**
 * 如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。
 *  var obj = {};
    with (obj) {
    p1 = 4;
    p2 = 5;
    }
    obj.p1 // undefined
    p1 // 4
 */
// 
// 
// 
with (obj){
    p1 = 4;
    p2 = 5;
}
/**
 * // 例二
    with (document.links[0]){
    console.log(href);
    console.log(title);
    console.log(style);
    }
// 等同于
    console.log(document.links[0].href);
    console.log(document.links[0].title);
    console.log(document.links[0].style);
 */
/**
 * 单纯从上面的代码块，根本无法判断x到底是全局变量，还是对象obj的一个属性。
 * 这非常不利于代码的除错和模块化，编译器也无法对这段代码进行优化，
 * 只能留到运行时判断，这就拖慢了运行速度。因此，建议不要使用with语句，
 * 可以考虑用一个临时变量代替with。
 */
 with(obj1.obj2.obj3) {
    console.log(p1 + p2);
  }
  
  // 可以写成
  var temp = obj1.obj2.obj3;
  console.log(temp.p1 + temp.p2);