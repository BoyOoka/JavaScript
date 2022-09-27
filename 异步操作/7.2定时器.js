// setTimeout函数用来指定某个函数或某段代码，在多少毫秒之后执行。
// 它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器
// 除了前两个参数，setTimeout还允许更多的参数。它们将依次传入推迟执行的函数（回调函数）
console.log(1);
setTimeout(console.log, 1000, 'this is log arguments');
console.log(3);

// setInterval函数的用法与setTimeout完全一致,区别仅仅在于setInterval
// 指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。
// setInterval指定的是“开始执行”之间的间隔，并不考虑每次任务执行本身所消耗的时间。

var i = 1;
var timer = setInterval(function() {
    console.log(2);
  }, 1000)

clearInterval(timer) // 停止运行

// 为了确保两次执行之间有固定的间隔，可以不用setInterval，
// 而是每次执行结束后，使用setTimeout指定下一次执行的具体时间。
var i = 1;
var timer = setTimeout(function f() {
  // ...
  i += 1
  console.log('test', i);
  timer = setTimeout(f, 1000);
  if (10 === i){
    clearTimeout(timer);
  }
}, 2000);

// setTimeout和setInterval函数，都返回一个整数值，表示计数器编号。
// 将该整数传入clearTimeout和clearInterval函数，就可以取消对应的定时器。
/**
 * var id1 = setTimeout(f, 1000);
 * var id2 = setInterval(f, 1000);
 * clearTimeout(id1);
 * clearInterval(id2);
 */