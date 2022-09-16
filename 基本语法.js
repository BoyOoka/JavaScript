function greetMe(yourName) {
    console.log('Hello ' + yourName);
  }
  
  greetMe('World');
var a = 1+4;
var b = "bab";
// x
console.log(a, b);

console.log(c);
// 变量提升
var c = 1;

// 条件
if(c === 1){
  console.info('c == 1');
}else{
  console.info('c != 1');
}

// switch
x = 4;
switch (x){
  case 1:
    console.log("x is " + 1);
    break;
  case 2:
    console.log("x is " + 2);
    break;
  default:
    console.log("x is " + x);
}

// 三元运算
n = 3
console.info(n % 2);
var even = (n % 2 === 0) ? true : false;
var msg = '数字' + n + '是' + (n % 2 === 0 ? '偶数' : '奇数');
console.info(msg);

var i = 1;
// 循环语句
while (i < 100){
  console.log("i = ", i);
  i++;
}
// for语句的三个部分（initialize、test、increment），可以省略任何一个，
// 也可以全部省略
for (var j=0; j<10; j++){
  console.log("j =", j);
}
/**
 * 无限循环
 */
// for ( ; ; ){
//   console.log('Hello World');
// }

// do .... while...
var x = 3; var i = 0;
do {
  console.log("i = ", i);
  i++;
}while(i<x);

// breck  and continue

// 标签
/**
 * 上面代码为一个双重循环区块，break命令后面加上了top标签（注意，top不用加引号），
 * 满足条件时，直接跳出双层循环。如果break语句后面不使用标签，则只能跳出内层循环，
 * 进入下一次的外层循环。
 */
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0

foo: {
  console.log("1");
  break foo;
  console.log('not run');
}
console.log(2);

// 与continue使用
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) continue top;
      console.log('i=' + i + ', j=' + j);
    }
  }