// 指数运算符：x ** y
// 余数运算符：x % y
// 自增运算符：++x 或者 x++
// 自减运算符：--x 或者 x--
// 数值运算符： +x
// 负数值运算符：-x
// 加法运算符：x + y
// 减法运算符： x - y
// 乘法运算符： x * y
// 除法运算符：x / y

// 除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。
// 它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。
'3' + 4 + 5 // "345"
3 + 4 + '5' // "75"

1 - '2' // -1
1 * '2' // 2
1 / '2' // 0.5


// 对象的相加
var obj = {p:1};
obj + 2; // "[object Object]2"  对象的toString方法默认返回[object Object]

var obj2 = {
    valueOf: function (){
        return 'Hello '
    },
    p: 1
};
obj2 + 1 //Hello 1


// 余数运算符
12 % 5 // 2
-1 % 2 // -1  运算结果的正负号由第一个运算子的正负号决定
function isOdd(n) {
    return Math.abs(n) % 2 === 1;
}
6.5 % 2.1 // 0.19999999999999973


x++ // 1 先返回值
++y // 2 先增加值

// 指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。
2 ** 3 ** 2 // 512  相当于 2 ** (3 ** 2)

// 赋值运算
// 等同于 x = x + y
x += y

// 等同于 x = x - y
x -= y

// 等同于 x = x * y
x *= y

// 等同于 x = x / y
x /= y

// 等同于 x = x % y
x %= y

// 等同于 x = x ** y
x **= y

// 等同于 x = x >> y
x >>= y

// 等同于 x = x << y
x <<= y

// 等同于 x = x >>> y
x >>>= y

// 等同于 x = x & y
x &= y

// 等同于 x = x | y
x |= y

// 等同于 x = x ^ y
x ^= y

