// dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

// data and towns can be seen in "Your Test Cases:".

// Task:
// function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
// function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
// Examples:
// mean("London", data), 51.19(9999999999996) 
// variance("London", data), 57.42(833333333374)

// My Solution
function mean(town, strng) {
    try {
        return strng.split('\n').find(e=>e.split(':')[0]==town).split(':')[1].split(',').join(' ').split(' ').filter
    (e=>Number(e)).reduce((acc,e)=>acc+Number(e),0)/12;
    }catch(err){
        return -1;
    };
};
function variance(town, strng) {
    try{
    let var_arr = strng.split('\n').find(e=>e.split(':')[0]==town).split(':')[1].split(',').join(' ').split(' ').filter
    (e=>Number(e));
    let mean = var_arr.reduce((acc,e)=>acc+Number(e),0)/12;
    return var_arr.map(e=>(e-mean)**2).reduce((acc,e)=>acc+e)/12
    }catch(err){
        return -1;
    };
};