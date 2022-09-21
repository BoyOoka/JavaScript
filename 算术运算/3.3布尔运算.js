// https://wangdoc.com/javascript/operators/boolean.html
// 取反运算符：!
// 且运算符：&&
// 或运算符：||
// 三元运算符：?:


/**
 * 对于非布尔值，取反运算符会将其转为布尔值。可以这样记忆，以下六个值取反后为true，其他值都为false。
 * undefined
 * null
 * false
 * 0
 * NaN
 * 空字符串（''）
 */
// 

// 且运算符（&&）- 跳过第二个运算子的机制，被称为“短路”。
't' && 'f' // "f"
't' && (1 + 2) // 3
// &&取代if结构，比如下面是一段if结构的代码，就可以用且运算符改写
var i = 1
function doSomething(){
    console.log('----------');
}

if (i){
    doSomething();
}
i && doSomething();

// 或运算符（||） - 短路规则对这个运算符也适用。
// 如果第一个运算子的布尔值为true，则返回第一个运算子的值，且不再对第二个运算子求值

// 三元条件运算符（?:）
't' ? 'hello' : 'world' // "hello"
0 ? 'hello' : 'world' // "world"
