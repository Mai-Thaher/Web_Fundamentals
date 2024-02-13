// challenge number 1 >>> Always hungry
function alwaysHungry(arr) {
for(var i=0; i<arr.length;  i++){
    if (arr[i]=="food"){
        console.log("yummy");
    }
}
    if(!arr.includes("food")){
    console.log("I'm Hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
// challenge number 2 >>> High Pass filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length;i++){
        if (arr[i]>cutoff){
            filteredArr.push(arr[i]);
        } 
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// challenge number 3 Better than average

function betterThanAverage(arr) {
    var sum = 0;
    var avg=0;
    for (var i=0; i<arr.length; i++){
        sum+=arr[i];
        avg= sum/arr.length;
    }
    var count = 0
    for (var i=0; i<arr.length; i++){
        if(arr[i]>avg){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//challenge number 4 >>> Array erverse
function reverse(arr) {
    for (var i=0; i<arr.length; i++){
        arr.reverse();
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
// challenge number 5 >>> Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i=0; i<n-2; i++){
        var fibNum=fibArr[i]+fibArr[i+1];
        fibArr.push(fibNum);
    }
    return fibArr;
} 
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

