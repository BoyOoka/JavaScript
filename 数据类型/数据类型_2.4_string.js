// https://wangdoc.com/javascript/types/string.html

var longString = 'this is  a \
very very \
long string';

console.log(longString);
// 需要用反斜杠转义的特殊字符，主要有下面这些。
/**
 * \0 ：null（\u0000）
 * \b ：后退键（\u0008）
 * \f ：换页符（\u000C）
 * \n ：换行符（\u000A）
 * \r ：回车键（\u000D）
 * \t ：制表符（\u0009）
 * \v ：垂直制表符（\u000B）
 * \' ：单引号（\u0027）
 * \" ：双引号（\u0022）
 * \\ ：反斜杠（\u005C）
 */

console.log('test', '\251');
// 反斜杠后面紧跟三个八进制数（000到377），代表一个字符。
'\251' // "©"
'\xA9' // "©"
'\u00A9' // "©"
// \x后面紧跟两个十六进制数（00到FF），代表一个字符。
'\172' === 'z' // true
'\x7A' === 'z' // true
// \u后面紧跟四个十六进制数（0000到FFFF），代表一个字符。
'\u007A' === 'z' // true

// 字符串可以被视为字符数组
var s = 'hello'
s[0] = 't' // 字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。
console.log(s)
console.log(s[0])
console.log(s.length);

// JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示
// 对于码点在U+10000到U+10FFFF之间的字符，JavaScript 总是认为它们是两个字符（length属性为2）
console.log('𝌆'.length);

// Base64 编码
var string = 'Hello Base64';
console.log(btoa(string));
console.log(atob("SGVsbG8gV29ybGQh"));
var s = '你好';
s = encodeURIComponent(s);
console.log(btoa(s));

