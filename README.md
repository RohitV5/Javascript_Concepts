# Javascript_Concepts

# Lexical Environment

Execution Context (Global) gives us 'this' and Global Object which is accessible everywhere. Its created by javascript engine.
to see that do console.log(this) --> in browser it gives Window

So each window in a browser has its own execution context. Every browser has their own javascript engine.

In nodejs there is no window.


Note: Global means not inside a 

# Creation and Hoisting 

its not actually moving the code to top. before running your code the javascript engine assigns memory for the variables and functions. So they exist in memory.
But ofr variables only declaration is done but assignment is done exactly where its written. 

All variables in javascript are set to undefined by the engine during execution context creation.
