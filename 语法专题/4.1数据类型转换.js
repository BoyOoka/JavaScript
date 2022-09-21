var x = true ? 1 : 'a';


// 强制转换
Number(324); // 324
Number('324abc'); // NaN
// 布尔值：true 转成 1，false 转成 0
Number(true); // 1
Number(false); // 0

// undefined：转成 NaN
Number(undefined); // NaN

// null：转成0
Number(null); // 0


parseInt('42 cats') // 42
parseInt('\t\v\r12.34\n') // 12
Number('\t\v\r12.34\n') // 12.34

Number([1, 2, 3]) // NaN
Number([5]) // 5


String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"

// 除了以下五个值的转换结果为false，其他的值全部为true
// JavaScript 遇到预期为布尔值的地方（比如if语句的条件部分），
// 就会将非布尔值的参数自动转换为布尔值。系统内部会自动调用Boolean()函数。
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false

function fake(){
    return 0;
}
function fake_valueof(){
    console.log('fake_valueof');
}
w = {

}
w.toString = fake
console.log(w.toString());
console.log(Boolean(w));
// 字符串的自动转换，主要发生在字符串的加法运算时。当一个值为字符串，另一个值为非字符串，则后者转为字符串
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"

// 除了加法运算符（+）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值