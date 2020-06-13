# Javascript_Concepts

# Lexical Environment

Execution Context (Global) gives us 'this' and Global Object which is accessible everywhere. Its created by javascript engine.
to see that do console.log(this) --> in browser it gives Window

So each window in a browser has its own execution context. Every browser has their own javascript engine.

In nodejs there is no window.


Note: Global means not inside a 

# Creation and Hoisting 

its not actually moving the code to top. before running your code the javascript engine assigns memory for the variables and functions. So they exist in memory.
But  only declaration is done but assignment is done exactly where its written. 

All variables in javascript are set to undefined by the engine during execution context creation.


# undefined is a keyword in javascript


# Javascript runs in 2 Phases 
1. Creation (Hoisting of functions and variables) 
2. Execution


# Javascript is single threaded synchronous 
1. one command at a time

# Invocation => Running a function
 Any time you execute a function a new execution context is created and put on the execution stack and 'this' variable is created for that function


# Scope Chaining
1. every context has reference to its outer environment as many levels up there isd so here a and b have reference to global application context or lexical environment


2. a child function has reference to its parent and to its parent parents and so on till top outer level so it will keep going up looking for any variable

3. Scope is where a variable is available in your code


# Asynchronous 
1. Meaning : More than one at  a time



# Operator Precedence and Associativity
+ is a function called operator function which has a precendence and associativity
 Which operator function gets called first. 
Precedence -> Functions are called in order of precedence. ()
Associativity -> When functions have the same precedence (left to right or right to left)

# Dynamically TYPED
we dont define wether s its number or string


# COERCION
converting a value from one type to another

# DEFAULT VALUE
variable1 = variable1 || 'defaultvalue'


# Object Literal = {}
Used to create and intialize object.
Same as new Object() method but shorter.

# Namescpace - A container for keeping functions and variables
Using  var container = {}; to store functions and valariables
Use: To avoid name collisions











