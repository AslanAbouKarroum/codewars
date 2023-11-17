// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// Solution
function highestRank(arr){
    console.log(arr.sort((a,b)=>a-b))
    let array1 = arr.sort((a,b)=>a-b);
    do{
        array1 =  array1.sort((a,b)=>a-b).filter((e,i,ar)=>e==ar[i+1])
        if(array1.sort((a,b)=>a-b).filter((e,i,ar)=>e==ar[i+1]).length == 0) return array1[array1.length-1];
    }while(array1[0]!==array1[array1.length-1]);
    return array1;
};