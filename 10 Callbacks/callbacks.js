// // Callbacks are functions used as arguments into another functions.
// const sum = (a,b)=> {
//     return a+b
// }
// const printSum=(a,b,sumFunction)=>{
//     console.log(sumFunction(a,b))
// }
// printSum(2,3,sum) 


function getData(dataID, getNextData) {
    console.log("getting data of", dataID)

    setTimeout(() => {
        console.log("data", dataID);
        if (getNextData) {
            getNextData();
        }
    }, 5000)//2s
};

// call back hell

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4)
        });
    });
});

