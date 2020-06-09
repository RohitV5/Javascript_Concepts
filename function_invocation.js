a();

function b(param) {
    console.log("hi  i am b", param)
}


function a() {
    console.log("hi  i am a")
    b("yellow");
}


//here the execution starts, above all we are declaring

// Any time you execute a function a new execution context is created and put on the execution stack


