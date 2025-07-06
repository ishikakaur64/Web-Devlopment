var numbers = [10, 5, 8, 2, 15];

var mapped = numbers.map(function(num) {
  return num * 3;
});

console.log("Mapped Array:", mapped);

var asc = [...mapped].sort(function(a, b) {
  return a - b;
});
console.log("Ascending Order:", asc);

var desc = [...mapped].sort(function(a, b) {
  return b - a;
});
console.log("Descending Order:", desc);