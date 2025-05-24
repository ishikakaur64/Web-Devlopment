var b = 6; //global variable can be printed outside or inside the function
function myFunction() {
    var a = 7; //local variable are printed inside function
    console.log(a);
}
myFunction()
//console.log(a);
console.log(b);