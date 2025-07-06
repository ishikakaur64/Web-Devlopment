function myDisplayer(some) {
    console.log(some);
}
function sum(a, b) {
    var sum = a + b;
    myDisplayer(sum);
}
let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;
    if (x == 0) {
        myResolve("OK");
    } else
        myReject("Error");
});
myPromise.then(
    function (value) { sum(5,5); },
    function (error) {sum(error); }
);