// Async keywords always used with a function and returns a promise.
async function hello() {
    console.log("hello")
}
// Here we don't define any promise still the keywords creates automatically promise
// Awaits means to wait untill the previous promise completed  after then the next promise can be run. it can only used in async funtion.
function getData(dataID) {
    return new Promise((resolve, reject) => {
        console.log("getting data of", dataID)
        setTimeout(() => {
            console.log("data", dataID)
            resolve("success")
        }, 2000)
    })
};
async function viewData(){
    await getData(101);// here it paused the next command until the first one is completed
    await getData(108);
    await getData(105);
    console.log("ended")
 }
viewData()