// Inspired from real-world Brainf**k, we want to create an interpreter of that language which will support the following instructions:

// > increment the data pointer (to point to the next cell to the right).
// < decrement the data pointer (to point to the next cell to the left).
// + increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
// - decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
// . output the byte at the data pointer.
// , accept one byte of input, storing its value in the byte at the data pointer.
// [ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
// ] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.
// The function will take in input...

// the program code, a string with the sequence of machine instructions,
// the program input, a string, possibly empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the , instruction
// ... and will return ...

// the output of the interpreted code (always as a string), produced by the . instruction.
// Implementation-specific details for this Kata:

// Your memory tape should be large enough - the original implementation had 30,000 cells but a few thousand should suffice for this Kata
// Each cell should hold an unsigned byte with wrapping behavior (i.e. 255 + 1 = 0, 0 - 1 = 255), initialized to 0
// The memory pointer should initially point to a cell in the tape with a sufficient number (e.g. a few thousand or more) of cells to its right. For convenience, you may want to have it point to the leftmost cell initially
// You may assume that the , command will never be invoked when the input stream is exhausted
// Error-handling, e.g. unmatched square brackets and/or memory pointer going past the leftmost cell is not required in this Kata. If you see test cases that require you to perform error-handling then please open an Issue in the Discourse for this Kata (don't forget to state which programming language you are attempting this Kata in).

// Solution
function brainLuck(code, input){
    var data = [],
        pos  = 0,
        ipos = 0,
        output = [],
        skipping = 0,
        backwards = 0;
  
    var COMMANDS = {
      '>': function() { ++pos },
      '<': function() { --pos },
      '+': function() { data[pos] = ((data[pos] || 0) + 1) % 256 },
      '-': function() { data[pos] = ((data[pos] || 0) + 255) % 256 },
      '.': function() { output.push(data[pos]) },
      ',': function() { data[pos] = (input[ipos++] || '').charCodeAt() },
      '[': function() { if (!data[pos]) { skipping = 1 } },
      ']': function() { if (data[pos]) { backwards = 1 } }
    };
    
    for (var cpos=0,l=code.length; cpos <= l; ++cpos) {
      if (skipping) {
        if (code[cpos] === '[') { skipping++ }
        if (code[cpos] === ']') { skipping-- }
      } else if (backwards) {
        cpos -= 2;
        if (code[cpos] === ']') { backwards++ }
        if (code[cpos] === '[') { backwards-- }
      } else {
        code[cpos] && COMMANDS[code[cpos]]();
      }
    }
    return String.fromCharCode.apply(null, output)
  }

  // Solution (failed on time limit)
  function brainLuck(code, input){
    let res = [];
    let  arr_of_str=[];
    let j=0;
    let pointer=-1;
    for(let i=0;i<code.length;i++){
        if(j>input.length) break;
        switch(code[i]){
            case ',':
                if(res.length>pointer) pointer++
                res.push(input.charCodeAt(j));
                j++
                break;
            case '+':
                if(pointer>=res.length) {res[pointer]=0};
                if(pointer ==-1){pointer=0;res=[0]};
                if(res[pointer]==undefined){res[pointer]=0}
                res[pointer]=res[pointer]+1;
                if(res[pointer]==256) res[pointer]=0
                break;
            case '-':
                if(res.length==0){
                    break;
                }else{
                    if(pointer>=res.length) {res[pointer]=0};
                    if(pointer ==-1){pointer=0};
                    res[pointer]=res[pointer]-1;
                    if(code[i-1]=='['&&code[i+1]==']'){res[pointer]=0}
                    if(res[pointer]==-1) res[pointer]=255
                }
                break;
            case '[':
                let acc1=0;
                let open_ind=-1;
                if(res[pointer]==0) i =code.split('').findIndex((e,ind,a)=>{
                    if(e=='['&&ind!=i){
                        acc1++
                    }else if(e==']'&&acc1!=open_ind){
                        acc1--
                    }else if(e=='['&& ind==i){
                        open_ind = acc1
                    }else if(e==']'&& acc1==open_ind){
                        return ind
                    }
                });
                break;
            case ']':
                if(res.length==0) break;
                let acc2=0;
                let close_ind=-1;
                if(res[pointer] !=0) {i =code.split('').findLastIndex((e,ind,a)=>{
                    if(e==']'&&ind !=i){
                        acc2++;
                    }else if(e=='['&&acc2 !=close_ind){
                        acc2--;
                    }else if(e==']'&&ind==i){
                        close_ind =acc2;
                    }else if(e=='['&&acc2==close_ind){
                        return ind;
                    };
                });}
                break;
            case '.':
                arr_of_str.push(res[pointer]);
                break;
            case '<':
                pointer--
                break;
            case '>':
                pointer++
                break;
            default:
                break;
        };
    };
    return arr_of_str.map(e=>String.fromCharCode(e)).join('');
};
