function b() {
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

// every context has reference to its outer environment as many levels up there isd so here a and b have reference to global application context or lexical environment


// # a child function has reference to its parent and to its parent parents and so on till top outer level so it will keep going up looking for any variable