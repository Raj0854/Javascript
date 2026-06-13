// Promises are used solution the issue of callback hell .
// promise is for "eventually" completion of task. It is an object in js.
// Resolve and reject are the callback provided by JS.
// formation:
// let promise = new Promise((resolve, reject)=>{...})
// let num=parseInt(prompt(("Enter a num")))
// let  promise = new Promise((resolve, reject)=>{
//     if (num===5){
//         console.log("i am promise")
//         resolve("success");}
//     else
//         { reject("error")}

// });

// promise.then(()=>{console.log("resoved")});
// promise.catch(()=>{console.log("rejected")});


//Promise Chaining
// nested promise is chain type structure known as promise chaining
function getData(dataID) {
    return new Promise((resolve, reject) => {
        console.log("getting data of", dataID)

        setTimeout(() => {
            console.log("data", dataID)
            resolve("success")
        }, 2000)
    })
};
// 1. First way of chaining
getData(5).then((res) => {
    console.log(res);
    getData(10).then(() => {
        console.log(res);
        getData(25).then(() => {
            console.log("end")
        })
    });
});
// 2. Second way of chaining
getData(8).then(() => {
    return getData(10)
}).then(() => {
    return getData(59)
}).then(() => {
    console.log("ended")
})