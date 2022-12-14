// 二进制或运算符（or）：符号为|，表示若两个二进制位都为0，则结果为0，否则为1。
// 二进制与运算符（and）：符号为&，表示若两个二进制位都为1，则结果为1，否则为0。
// 二进制否运算符（not）：符号为~，表示对一个二进制位取反。
// 异或运算符（xor）：符号为^，表示若两个二进制位不相同，则结果为1，否则为0。
// 左移运算符（left shift）：符号为<<，详见下文解释。
// 右移运算符（right shift）：符号为>>，详见下文解释。
// 头部补零的右移运算符（zero filled right shift）：符号为>>>


// 虽然在 JavaScript 内部，数值都是以64位浮点数的形式储存，但是做位运算的时候，
// 是以32位带符号的整数进行运算的，并且返回值也是一个32位带符号的整数
function toInt32(x){
    return x | 0;
}
toInt32(1.001) // 1
toInt32(1.999) // 1

// 与运算
0 & 3

// 否运算
~ 3
// 使用二进制否运算取整，是所有取整方法中最快的一种。
~~2.9 // 2
~~47.11 // 47
~~1.9999 // 1
~~3 // 3

// 异或运算 - 二进制位不同时返回1，相同时返回0
99 ^ 3  // 1100011 ^ 0000011 => 1100000 => 96

12.9 ^ 0 // 12  异或运算也可以用来取整。

// 左移运算 - 将一个数的二进制值向左移动指定的位数，尾部补0，即乘以2的指定次方
4 << 1 // 4 * 2 = 8

13.5 << 0  // 为32位整数，等同于取整，对于正数和负数都有效
-13.5 << 0

var color = {r: 186, g: 218, b: 85};

// RGB to HEX
// (1 << 24)的作用为保证结果是6位数
var rgb2hex = function(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16) // 先转成十六进制，然后返回字符串
    .substr(1);   // 去除字符串的最高位，返回后面六个字符串
}

rgb2hex(color.r, color.g, color.b)

// 右移运算 - 表示将一个数的二进制值向右移动指定的位数。
// 如果是正数，头部全部补0；如果是负数，头部全部补1。
// 右移运算符基本上相当于除以2的指定次方（最高位即符号位参与移动）
4 >> 1 //   4 / 2 ** 1 = 2
-4 >> 1 //  -4 / 2 ** 1 = 2

// 头部补零的右移运算
4 >>> 1 // 2
-4 >>> 1 // 2147483646
-1 >>> 0 // 4294967295  -  查看一个负整数在计算机内部的储存形式，最快的方法就是使用这个运算符


// 开关作用

var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000

var flags = 5;
(flags & FLAG_C); 

// 打开A、B、D三个开关，我们可以构造一个掩码变量
var mask = FLAG_A | FLAG_B | FLAG_D;
flags = flags | mask;  // 开启 ABD

flags = flags & mask; // 与mask设置不一样的全部关闭  