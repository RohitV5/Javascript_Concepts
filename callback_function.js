
// How asynchronous operation is happening using callback
setTimeout( function(){
    debugger
    console.log("timer")

}, 1000)


// What is a callback function , a function passed as parameter to another function for execution inside it
function x(y){
    debugger
    console.log("before callback execution")
    y();
    console.log("after callback execution");
}

x( function y(){
    debugger
    console.log("callback executed");
})
// function y is a callback function.



