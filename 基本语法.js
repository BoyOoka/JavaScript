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

// 循环语句
while ()