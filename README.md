# Javascript_Concepts

#Lexical Environment

Execution Context (Global) gives us 'this' and Global Object which is accessible everywhere. Its created by javascript engine.
to see that do console.log(this) --> in browser it gives Window

So each window in a browser has its own execution context. Every browser has their own javascript engine.

In nodejs there is no window.


Note: Global means not inside a function