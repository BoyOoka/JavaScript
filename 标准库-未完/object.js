// Object对象本身的方法 - 直接定义在Object对象的方法

Object.print = function(o){
    console.log(o);
}
Object.print(234);

// Object的实例方法 - 定义在Object原型对象Object.prototype上的方法

Object.prototype.print2 = function(o){
    console.log(o);
}
obj = new Object();
obj.print2('test');


// 如果参数是原始类型的值，Object方法将其转为对应的包装对象的实例
var obj = Object(1); 
obj instanceof Object // true
obj instanceof Number // true
