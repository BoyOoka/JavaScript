function Cat (name, color){
    this.name = name;
    this.color = color;
    this.meow = function () {
        console.log('喵喵');
        console.log(this.color);
      };
}

var cat1 = new Cat('大毛', '白色');
console.log(cat1.name, cat1.color,);
cat1.meow();

// prototype 属性的作用 - Animal的prototype属性，就是实例对象cat1和cat2的原型对象
function Animal(name){
    this.name = name;
}
Animal.prototype.color = 'white';
Animal.prototype.walk = function () {
    console.log(this.name + ' is walking');
  };

var cat1 = new Animal('大毛');
cat1.color = 'black';  // 如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。
var cat2 = new Animal('二毛');
console.log(cat1.color, cat2.color);
cat1.walk(); cat2.walk();

// constructor 属性
// prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数
function P() {}
var p = new P();
p.hasOwnProperty('constructor'); // false
(p.constructor === P); // true

// 有了constructor属性，就可以从一个实例对象新建另一个实例。
function Constr() {}
var x = new Constr();

var y = new x.constructor();
console.log(y instanceof Constr); // true

// 由于instanceof检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回true。
var d = new Date();
d instanceof Date // true
d instanceof Object // true

// Rectangle构造函数继承Shape
// 第一步，子类继承父类的实例
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

function Rectangle() {
  Shape.call(this); // 调用父类构造函数
}
// 另一种写法
/*
function Rectangle() {
  this.base = Shape;
  this.base();
}
*/

// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// rect instanceof Rectangle  // true
// rect instanceof Shape  // true

/**
 * 子类B的print方法先调用父类A的print方法，再部署自己的代码。
 * 这就等于继承了父类A的print方法
 * ClassB.prototype.print = function() {
 *     ClassA.prototype.print.call(this); 
 *     // some code
 * }
 */

// 多重继承
function M1() {
  this.hello = 'hello';
}

function M2() {
  this.world = 'world';
}

function S() {
  M1.call(this);
  M2.call(this);
}
// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);

// 指定构造函数
S.prototype.constructor = S;

var s = new S();
s.hello // 'hello'
s.world // 'world'

// https://wangdoc.com/javascript/oop/prototype.html#%E6%A8%A1%E5%9D%97