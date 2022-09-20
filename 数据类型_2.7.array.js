var arr = ['a', 'b', 'c'];

arr.length;
// JavaScript 使用一个32位整数，保存数组的元素个数。
// 这意味着，数组成员最多只有 4294967295 个（2**32 - 1）个，
// 也就是说length属性的最大值就是 4294967295

// in 运算符
console.log('2' in arr);  //检查键名 如果数组位置为空返回false

// for...in 循环和数组的遍历
var a = [1,2,3,4,5,6,,7];
a.foo = 'test'; //不仅会遍历数组所有的数字键，还会遍历非数字键

for (var i in a){
    console.log('key =>' , i);
    console.log('value =>', a[i]);
}
// 数组的forEach方法
a.forEach(element => {
    console.log(element);
});

// 使用delete命令删除一个数组成员，会形成空位，并且不会影响length属性
delete a[1];

// 数组的slice方法可以将“类似数组的对象”变成真正的数组
obj = {
    0: '1',
    1: '2',
    2: '3',
    3: '4',
    length: 6
}
var s = "rewtwetwgsg"
var to_arr = Array.prototype.slice.call(obj);
var s_arr = Array.prototype.slice.call(s);
console.log(to_arr);
console.log(s_arr);

function print(value, index) {
    console.log(index + ' : ' + value);
  }

  Array.prototype.forEach.call(obj, print);

// 字符串也是类似数组的对象，所以也可以用Array.prototype.forEach.call遍历
Array.prototype.forEach.call('abc', function (chr) {
  console.log(chr);
});