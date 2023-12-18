// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

// My Solution
function twosDifference(input){
    return input.sort((a,b)=>a-b).reduce((sub_arr,num,i,arr)=>{
        if(arr.find(e=>e==num-2)){  sub_arr.push([num,num-2]);
        }else if(arr.find(e=>e==num+2)){  sub_arr.push([num,num+2]);};
        return sub_arr;
    },[]).map(e=>e.sort((a,b)=>a-b)).sort((a,b)=>a[0]-b[0]).filter((e,i,ar)=>{
        if(i==0) return e;
        if(e[0]!=ar[i-1][0]) return e;
    });
};