// https://wangdoc.com/javascript/types/general.html
/**
 * 数值（number）：整数和小数（比如1和3.14）。
 * 字符串（string）：文本（比如Hello World）。
 * 布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）。
 * undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值。
 * null：表示空值，即此处的值为空。
 * 对象（object）：各种值组成的集合。
 *      狭义的对象（object）
 *      数组（array）
 *      函数（function）
 */
// typeof 运算符
typeof 123
function f(){}
console.log(typeof 123, typeof '123', typeof false, typeof f, typeof v);
typeof v

typeof window // "object"
typeof {} // "object"
typeof [] // "object"
var o = {};
var a = [];
o instanceof Array // false
a instanceof Array // true

// 注意，空数组（[]）和空对象（{}）对应的布尔值，都是true。

if ([]) {
  console.log('true');
}
// true

if ({}) {
  console.log('true');
}

// https://wangdoc.com/javascript/types/number.html
// JavaScript 内部，所有数字都是以64位浮点数形式储存，
// 即使整数也是如此。所以，1与1.0是相同的，是同一个数。
1 === 1.0; // true

0.1 + 0.2 === 0.3;
// false

0.3 / 0.1;
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1);
// false

// 几乎所有场合，正零和负零都会被当作正常的0。
// 唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的。
// 除以正零得到+Infinity，除以负零得到-Infinity，这两者是不相等的
(1 / +0) === (1 / -0); // false


// 与数值相关的全局方法
parseInt('1234');

console.log(parseInt("   342")); // 空格会被自动去除
console.log(parseInt(1.23)); // 1
// 等同于
parseInt('1.23'); // 1

// 进制转换
parseInt()