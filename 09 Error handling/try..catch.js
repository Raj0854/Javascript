// try catch blocks are used handling error occured in code and let the rest code runs smoothly.
// for eg
let a= 10;
let b = 20;
try{
    console.log("add : ",a+b)
    console.log("sub : ",a-b)
    console.log("multi : ",a*d)
    console.log("div : ",a/b)
}catch(err){
    console.log(err)
}