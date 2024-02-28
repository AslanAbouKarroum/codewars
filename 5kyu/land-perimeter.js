// Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO'] 
// which represents:

// should return: "Total land perimeter: 24".

// Following input:

// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']
// which represents:

// should return: "Total land perimeter: 18"

// My solution
function landPerimeter(arr) {
    if(arr.length==0) return "Total land perimeter: 0";
    let perimeter =0,left=0;
    arr.map((e,i,ar)=>{
        left = 0;
            if(i==0){
                e.split('').map((el,ind,sub_ar)=>{
                    if(el=='X'){
                        perimeter+=1;     // because the top is always should be counted
                        if(left != 1){     // check your left
                            perimeter+=1;
                            left =1;       // so the next character knows
                        }else{
                            left =1;       // so the next character knows
                        };
                        if(ind==sub_ar.length-1){    // check your right
                            perimeter+=1;
                        }else if(sub_ar[ind+1]=='O'){
                            perimeter+=1;
                        };
                        if(i==ar.length-1){    // check below
                            perimeter+=1;
                        }else if(ar[i+1][ind]=='O'){
                            perimeter+=1;
                        }
                    }else{
                        left=0;
                    };
                });
            }else if(i==arr.length-1){
                e.split('').map((el,ind,sub_ar)=>{
                    if(el=='X'){
                        perimeter+=1;      // because the bottom is always should be counted
                        if(left != 1){     // check your left
                            perimeter+=1;
                            left =1;       // so the next character knows
                        }else{
                            left =1;       // so the next character knows
                        };
                        if(ind==sub_ar.length-1){    // check your right
                            perimeter+=1;
                        }else if(sub_ar[ind+1]=='O'){
                            perimeter+=1;
                        };
                        if(ar[i-1][ind]=='O'){    // check top
                            perimeter+=1;
                        }
                    }else{
                        left=0;
                    };
                }); 
            }else{
                e.split('').map((el,ind,sub_ar)=>{
                    if(el=='X'){
                        if(left != 1){     // check your left
                            perimeter+=1;
                            left =1;       // so the next character knows
                        }else{
                            left =1;       // so the next character knows
                        };
                        if(ind==sub_ar.length-1){    // check your right
                            perimeter+=1;
                        }else if(sub_ar[ind+1]=='O'){
                            perimeter+=1;
                        };
                        if(ar[i-1][ind]=='O'){    // check top
                            perimeter+=1;
                        }
                        if(ar[i+1][ind]=='O'){    // check below
                            perimeter+=1;
                        }
                    }else{
                        left=0;
                    };
                });
            };
    });
    return "Total land perimeter: "+perimeter;
};

// Solution
function landPerimeter(arr) {
    let count = 0;
    for(let y=0; y<arr.length; y++) {
      for(let x=0; x<arr[0].length; x++) {
        if(arr[y][x] === "X") {
          if(y === 0               || arr[y-1][x] !== "X") count++;
          if(y === arr.length-1    || arr[y+1][x] !== "X") count++;
          if(x === 0               || arr[y][x-1] !== "X") count++;
          if(x === arr[0].length-1 || arr[y][x+1] !== "X") count++;
        }
      }
    }
    return "Total land perimeter: " + count;
  }