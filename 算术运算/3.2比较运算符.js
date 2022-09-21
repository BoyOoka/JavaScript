// > 大于运算符
// < 小于运算符
// <= 小于或等于运算符
// >= 大于或等于运算符
// == 相等运算符
// === 严格相等运算符
// != 不相等运算符
// !== 严格不相等运算符


// 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，
// 算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较
// （实际上是比较 Unicode 码点）；否则，将两个运算子都转成数值，再比较数值的大小
('cat' > 'Cat'); // true'
('大' > '小'); // false  u5927 > u5c0f

// 原始类型值
(5 > '4'); // true  等同于 5 > Number('4')
(1 > NaN); // false
(1 <= NaN); // false
('1' > NaN); // false
('1' <= NaN); // false
(NaN > NaN); // false
(NaN <= NaN); // false

// 对象
([2] > [1]); // true [2].valueOf().toString() > [1].valueOf().toString()

// 严格相等运算符
// 相等运算符（==）比较两个值是否相等，严格相等运算符（===）比较它们是否为“同一个值”。
// 如果两个值不是同一类型，严格相等运算符（===）直接返回false，而相等运算符（==）会将
// 它们转换成同一个类型，再用严格相等运算符进行比较。

(1 === "1"); // false
(true === "true"); // false
(1 === 0x1); // true 同一类型的原始类型的值（数值、字符串、布尔值）比较时，值相同就返回true

// 复合类型值 不是比较它们的值是否相等，而是比较它们是否指向同一个地址
({} === {}); // false
([] === []); // false
(function () {} === function () {}); // false

// undefined和null与自身严格相等。
(undefined === undefined); // true
(null === null); // true

const obj = {
    valueOf: function () {
      console.log('执行 valueOf()');
      return obj;
    },
    toString: function () {
      console.log('执行 toString()');
      return 'foo';
    }
  };
  
  console.log(obj == 'foo');
  