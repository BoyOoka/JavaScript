// https://wangdoc.com/javascript/features/console.html
// console.log方法支持以下占位符，不同类型的数据必须使用对应的占位符。

// %s 字符串
// %d 整数
// %i 整数
// %f 浮点数
// %o 对象的链接
// %c CSS 格式字符串

var number = 11 * 9;
var color = 'red';
console.log('%d %s balloons', number, color);

console.log(
    '%cThis text is styled!',
    'color: red; background: yellow; font-size: 24px;'
  )

console.info('test');

console.error('Error: %s (%i)', 'Server is not responding', 500);
// Error: Server is not responding (500)
console.warn('Warning! Too few nodes (%d)', 2);

['log', 'info', 'warn', 'error'].forEach(function(method) {
    console[method] = console[method].bind(
        console,
        new Date().toISOString()
    );
});

console.log("出错了！");

// console.table()
var languages = [
    { name: "JavaScript", fileExtension: ".js" },
    { name: "TypeScript", fileExtension: ".ts" },
    { name: "CoffeeScript", fileExtension: ".coffee" }
  ];
console.table(languages);

var languages = {
    csharp: { name: "C#", paradigm: "object-oriented" },
    fsharp: { name: "F#", paradigm: "functional" }
  };
  
  console.table(languages);


// count方法用于计数，输出它被调用了多少次
console.count();


// dir dirxml 易于阅读和打印的格式显示
// 如果参数不是 DOM 节点，而是普通的 JavaScript 对象，console.dirxml等同于console.dir
console.dir({f1: 'foo', f2: 'bar'});

// console.dir(document.body);
// console.dirxml(document.body);


// console.assert方法主要用于程序运行过程中，
// 进行条件判断，如果不满足条件，就显示一个错误，但不会中断程序执行。
console.assert(false, '判断条件不成立');

// console.time()，console.timeEnd()
// 这两个方法用于计时，可以算出一个操作所花费的准确时间。
console.time('Array initialize');
console.timeEnd('Array initialize'); // Array initialize: 1914.481ms


// console.group() console.group() 这两个方法用于将显示的信息分组
console.group('一级分组');
console.log('一级分组的内容');

console.group('二级分组');
console.log('二级分组的内容');

console.groupEnd(); // 二级分组结束
console.groupEnd(); // 一级分组结束

// console.groupCollapsed() 唯一的区别是该组的内容，在第一次显示时是收起的（collapsed），而不是展开的

console.groupCollapsed('Fetching Data');

console.log('Request Sent');
console.error('Error: Server not responding (500)');

console.groupEnd();

// console.trace方法显示当前执行的代码在堆栈中的调用路径。
console.trace();

// console.clear() 清除当前控制台所有输出
console.clear();


// https://wangdoc.com/javascript/features/console.html#%E6%8E%A7%E5%88%B6%E5%8F%B0%E5%91%BD%E4%BB%A4%E8%A1%8C-api
// 控制台命令api