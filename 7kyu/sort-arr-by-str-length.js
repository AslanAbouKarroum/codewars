// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// The solution
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };

// The solution 2
function sortByLength (array) {
    let obj = {}
    let arr =[]
    let final_arr =[]
    array.forEach((str,index)=> obj[index] = str.length)
    console.log(obj)
    arr = array.map(str => str.length).sort((a,b)=>a-b)
    arr.map(str =>{
        for(i=0;i<Object.keys(obj).length;i++){
            if(str === obj[i]){
                final_arr.push(array[i])
            }
        }
    })
    return final_arr
  };