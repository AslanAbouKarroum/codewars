// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

// Task:
// Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// the smallest number you got
// the index i of the digit d you took, i as small as possible
// the index j (as small as possible) where you insert this digit d to have the smallest number.
// Examples:
// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

// smallest(209917) --> [29917, 0, 1] or ...

// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

// smallest(1000000) --> [1, 0, 6] or ...

// My Solution
let counter = 0;
function smallest_integer(ar){
    let index= 0;
    let smallest_num = 0;
    let j=0;
    let ar_sort = ar.map(e=>e);
    ar_sort.sort((a,b)=>a-b);
    if(ar_sort.join('')==ar.join('')) return [ar[0],0,0];
    while(index==0&&j<ar.length){
        for(let i =j;i<ar.length;i++){
            if(i==j){
                smallest_num = ar[j];
            }else if(ar[i]<=smallest_num){
                smallest_num = ar[i];
                index = i;
            };
        };
        j++;
    };
    if(j==ar.length) return [ar[0],0,0];
    if(index==1&&ar[0]==ar[1]){
        counter+=2;
        let exp_arr = ar.slice(2);
        console.log(exp_arr)
        return smallest_integer(exp_arr);
    }else{
        return [smallest_num,index+counter,j];
    };
};

function lowest_index(ar,index){
    while(ar[index]==ar[index-1]){
        index= index-1;
    };
    return index;
};

function smallest(n){
    console.log(n)
    let arr_n = String(n).split('');
    let smallest_integer_arr = smallest_integer(arr_n);
    console.log(smallest_integer_arr);
    if(smallest_integer_arr[2]==0) return [n,0,0];
    if(arr_n[1]!=0&&arr_n[1]!=smallest_integer_arr[0]){
        let smallest_num = smallest_integer_arr[0];
        let index = lowest_index(arr_n,smallest_integer_arr[1]);
        if(index==1 || arr_n[1]==smallest_num){
            index=0;
            smallest_num= arr_n[0];
        };
        arr_n.splice(index,1);
        console.log(arr_n);
        let i=0;
        while(smallest_num>=arr_n[i]){
            i++;
        };
        arr_n.splice(i,0,smallest_num);
        i = lowest_index(arr_n,i);
        return [Number(arr_n.join('')),index,i];
    }else{
        if(arr_n[0]>arr_n[2]){
            index=0;
            smallest_num= arr_n[0];
            arr_n.splice(index,1);
            console.log(arr_n);
            let i=0;
            while(smallest_num>=arr_n[i]){
                i++;
            };
            arr_n.splice(i,0,smallest_num);
            i = lowest_index(arr_n,i);
            if(index==1&&i==0) return [Number(arr_n.join('')),i,index];
            return [Number(arr_n.join('')),index,i];
        }else if(arr_n[0]<arr_n[2]){
            let smallest_num = smallest_integer_arr[0];
            let index = lowest_index(arr_n,smallest_integer_arr[1]);
            arr_n.splice(index,1);
            console.log(arr_n);
            let i=0;
            while(smallest_num>=arr_n[i]){
                i++;
            };
            arr_n.splice(i,0,smallest_num);
            i = lowest_index(arr_n,i);
            if(index==1&&i==0) return [Number(arr_n.join('')),i,index];
            return [Number(arr_n.join('')),index,i];
        }else{
            let i=3;
            while(arr_n[0]==arr_n[i]){
                i++
            };
            if(arr_n[0]>arr_n[i]){
                index=0;
                smallest_num= arr_n[0];
                arr_n.splice(index,1);
                console.log(arr_n);
                let i=0;
                while(smallest_num>=arr_n[i]){
                    i++;
                };
                arr_n.splice(i,0,smallest_num);
                i = lowest_index(arr_n,i);
                if(index==1&&i==0) return [Number(arr_n.join('')),i,index];
                return [Number(arr_n.join('')),index,i];
            }else if(arr_n[0]<arr_n[i]){
                let smallest_num = smallest_integer_arr[0];
                let index = lowest_index(arr_n,smallest_integer_arr[1]);
                arr_n.splice(index,1);
                console.log(arr_n);
                let i=0;
                while(smallest_num>=arr_n[i]){
                    i++;
                };
                arr_n.splice(i,0,smallest_num);
                i = lowest_index(arr_n,i);
                if(index==1&&i==0) return [Number(arr_n.join('')),i,index];
                return [Number(arr_n.join('')),index,i];
            };
        };
    };
};

// Solution
Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
};

function smallest(n) {
  let iter = `${n}`.length, res = new Map();
  for (let i = 0; i < iter; i++) {
  	for (let j = 0; j < iter; j++) {
      let number = `${n}`.split('').move(i, j).join('');
      if (!res.has(+number)) res.set(+number, [i, j]);
    }
  }
  let min = Math.min(...res.keys());
  return [min, ...res.get(min)];
}