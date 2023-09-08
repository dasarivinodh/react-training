//scopes - global , function. block
// hoisting var x , and y will move to top even though u decalred late
var x=10;
console.log("x value:",x);//10

var y ;
console.log("Y value:",y);// undefined


// console.log("Z value:",z);// un caught exception

console.log("script over");// wil; not reach here if there is any un caught exception


// hoisting  --> all the decalration will go to the top (only eclarations not the values)

foo();

function foo(){
    console.log("hello");

    var a=10;
    if(a>1){
        var msg="helloworld";
    }
    console.log("msg value",msg);// can access as ots global scope and hoisting is involved
}

foo1();

function foo1(){
    console.log("hello");

    var a1=10;
    if(a1>1){
        let msg1="helloworld";
    }
    console.log("msg value",msg1);// cannot access as let is bloack scopr
}