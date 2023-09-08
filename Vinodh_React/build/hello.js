console.log("Hi Vinodh welcome to react traingi");
/*********defining types *********** */
var x = 10; // number => type inference automnatically defining type , only happens in type script 
//x = "vinodh"; // will thrw errror bcz of type inference type is defined as number in the previous line
var y; // infered as any as ntg assigned yet so we can asssifn any value
y = 100;
y = "abc";
y = {}; // no error bcz ots infered
//type annotatin
var z;
z = 200;
//z={};// will throw arror
var foo;
foo = function () {
    // som code
};
//foo = functin(x,y)// thowserror as ist not defined to take arguments
var user;
user = { id: 15, name: "vinodh" };
///******* defeining class *****/
