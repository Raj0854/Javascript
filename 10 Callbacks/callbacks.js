// Callbacks are functions used as arguments into another functions.
const sum = (a,b)=> {
    return a+b
}
const sub=(a,b)=>{
    return a-b
}
const divide =(a,b)=>{
    return a/b
}
const mutliply=(a,b)=>{
    return a*b
}
const printSum=(a,b,operators)=>{
    console.log(operators(a,b))
}
printSum(8,8,mutliply) 

//callback with time out 
function getData(dataID, getNextData) {
    console.log("getting data of", dataID)

    setTimeout(() => {
        console.log("data", dataID);
        if (getNextData) {
            getNextData();
        }
    }, 5000)//2s
};

// call back hell is nested callbacks stacked

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4)
        });
    });
});

