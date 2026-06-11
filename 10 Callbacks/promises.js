// Promises are used solution the issue of callback hell .
// promise is for "eventually" completion of task. It is an object in js.
// Resolve and reject are the callback provided by JS.
// formation:
// let promise = new Promise((resolve, reject)=>{...})
let  promise = new Promise((resolve, reject)=>{
    console.log("i am promise");
    resolve("success")
});