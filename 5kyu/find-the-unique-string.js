// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

// My Solution
function findUniq(arr) {
    let sliced_arr = arr.slice(0,3).map(e=>e.replace(/\s+/g,'')).map(e=>new Set(e.toLowerCase()));
    sliced_arr = sliced_arr.map(e=>{
        let str = '';
        for(item of e){
            str = str+item;
        };
        return str.split('').sort().join('');
    });
    let standar_item = '';
    if(sliced_arr[0]==sliced_arr[1]&& sliced_arr[0]==sliced_arr[2] ){
        standar_item = sliced_arr[0];
    }else if(sliced_arr[0]==sliced_arr[1]){
        standar_item = sliced_arr[0];
    }else if(sliced_arr[0]==sliced_arr[2]){
        standar_item = sliced_arr[0];
    }else{
        standar_item = sliced_arr[1];
    };
    let index = 0;
    arr.map(e=>e.replace(/\s+/g,'')).map(e=>new Set(e.toLowerCase())).map((e,i)=>{
        let str = '';
        for(item of e){
            str = str+item;
        };
        if(str.split('').sort().join('') !==standar_item) index = i;
        return e;
    });
    return arr[index]
};

// Solution
function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3)
    
    if (!similar(a,b) && !similar(a,c)) return a
    for (d of arr) if (!similar(a,d)) return d
  }
  
  function similar (x, y) {
    x = new Set(x.toLowerCase())
    y = new Set(y.toLowerCase())
  
    if (x.size !== y.size) return false
    for (z of x) if (!y.has(z)) return false
  
    return true
  }

  // Solution 2
  const unique = (x, i, ar) => ar.indexOf(x) === ar.lastIndexOf(x);

const getUniques = x => [...new Set([...x.toLowerCase()].sort())].join('');

const findUniq = arr => arr[arr.map(getUniques).findIndex(unique)];