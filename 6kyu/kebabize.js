// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// Solution

function kebabize(str) {
    let arr = str.match(/[A-Za-z]/g);
    let n= [];
    arr.forEach((e,i)=>e==e.toLowerCase()? e: n.push(i));
    for(let i=0;i<n.length;i++){
        arr.splice(n[i]+i,0,'-');
    };
    if(arr[0]=='-'){ arr = arr.slice(1)};
    return arr.join('').toLowerCase();
};

// Solution 2
function kebabize(str) {
    return str.replace(/[^a-z]/ig, '').
           replace(/^[A-Z]/, c => c.toLowerCase()).
           replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

// Solution 3
function kebabize(str) {

    var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
    return nonumber.join('-').toLowerCase();
  
  }