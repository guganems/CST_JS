let empty = () => {};
console.log(empty());

console.log((() => 'foobar')());

var simple = a => a > 15 ? 15 : a;
console.log(simple(16));
console.log(simple(10));

let max = (a, b) => a > b ? a : b;
console.log(max(10, 100));

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a,b) => a + b);
console.log(sum);

var even = arr.filter(v => v % 2 == 0);
console.log(even);

var double = arr.map(a => a * 2);
console.log(double);