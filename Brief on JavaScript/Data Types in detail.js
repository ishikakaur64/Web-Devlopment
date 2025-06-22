var a = 8;
var b = 10;
var d = null;
var c; // undefined variable
{
    let a = 7;
    // Here value of a is 2 but only within the block
    const b = 8;
}
console.log("a amd b are equal ; " + (a == b));
console.log("<br>");
console.log("the value of d is ; " + d);
console.log("<br>");
console.log("the value of c is ; " + c);
console.log("<br>");
console.log("the value of a is ; " + a);
console.log("<br>");
console.log("the value of b is ; " + b);