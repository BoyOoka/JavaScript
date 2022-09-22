var err = new Error('出错了');
console.log(err.message, err.name);


if (err.name) {
    console.log(err.name + ': ' + err.message);
  }

function catchit() {
    try {
      throw new Error('catchit');
    } catch(e) {
      console.log(e.stack); // print stack trace
    }
  }
  catchit();

//  SyntaxError 对象是解析代码时发生的语法错误。
// var 1e;
// console.log 'hello');


// ReferenceError对象是引用一个不存在的变量时发生的错误。
try{
    // unknownVariable;
    console.log() = 1;
}catch(e){
    console.log(e.name);
}

// RangeError 对象是一个值超出有效范围时发生的错误。
// Number对象的方法参数超出范围，以及函数堆栈超过最大值

// new Array(-1);

// TypeError 对象是变量或参数不是预期类型时发生的错误 


// new 123
var obj = {};
// obj.unknownMethod()


// URIError URI 相关函数的参数不正确时抛出的错误
/**
 * encodeURI()
 * decodeURI()
 * encodeURIComponent()
 * decodeURIComponent()
 * escape()
 * unescape()
 * 
 */
// EvalError  eval函数没有被正确执行时会抛出EvalError错误

// 自定义错误
class UserError extends Error{
    constructor(message){
        super(message);
        this.name = 'UserError';
    }
}


var x = -1;
if(x <= 0){
    try{
        throw new UserError('x must be positive number');
    }catch(e){
        if (e instanceof UserError){
            console.log(e.name, e.message,);
        }
    }finally{ // 没有catch也会执行
        console.log('the end');
    }
}