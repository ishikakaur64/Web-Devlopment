function myDisplayer(value) {
    console.log(value);
}
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCalculator(sum);
}
myCalculator(5, 5, myDisplayer);