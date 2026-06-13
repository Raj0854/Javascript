// Promises are used solution the issue of callback hell .
// promise is for "eventually" completion of task. It is an object in js.
// Resolve and reject are the callback provided by JS.
// formation:
// let promise = new Promise((resolve, reject)=>{...})
let num=parseInt(prompt(("Enter a num")))
let  promise = new Promise((resolve, reject)=>{
    if (num===5){
        console.log("i am promise")
        resolve("success");}
    else
        { reject("error")}
    
});

promise.then(()=>{console.log("resoved")});
promise.catch(()=>{console.log("rejected")});
