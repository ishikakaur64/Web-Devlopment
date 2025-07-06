function sum(a, b, c) {
  return a + b + c;
}

var trigValues = {
  "0°": Math.sin(0),
  "30°": Math.sin(30 * Math.PI / 180),
  "45°": Math.sin(45 * Math.PI / 180),
  "60°": Math.sin(60 * Math.PI / 180),
  "90°": Math.sin(90 * Math.PI / 180)
};

console.log("Sum:", sum(10, 20, 30));

for (var angle in trigValues) {
  console.log("sin(" + angle + "):", trigValues[angle].toFixed(2));
}