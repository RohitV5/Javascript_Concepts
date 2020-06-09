function b() {
    // in context of method b
    var myVar;
    console.log(myVar);
}


function a() {
    // in context of method a
    var myVar = 2;
    console.log(myVar);
    b();
}

// in global context
var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

// here all myVar have there own context 