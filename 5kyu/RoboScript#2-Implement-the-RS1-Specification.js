// RoboScript #2 - Implement the RS1 Specification
// Disclaimer
// The story presented in this Kata Series is purely fictional; any resemblance to actual programming languages, products, organisations or people should be treated as purely coincidental.

// About this Kata Series
// This Kata Series is based on a fictional story about a computer scientist and engineer who owns a firm that sells a toy robot called MyRobot which can interpret its own (esoteric) programming language called RoboScript. Naturally, this Kata Series deals with the software side of things (I'm afraid Codewars cannot test your ability to build a physical robot!).

// Story
// Now that you've built your own code editor for RoboScript with appropriate syntax highlighting to make it look like serious code, it's time to properly implement RoboScript so that our MyRobots can execute any RoboScript provided and move according to the will of our customers. Since this is the first version of RoboScript, let's call our specification RS1 (like how the newest specification for JavaScript is called ES6 :p)

// Task
// Write an interpreter for RS1 called execute() which accepts 1 required argument code, the RS1 program to be executed. The interpreter should return a string representation of the smallest 2D grid containing the full path that the MyRobot has walked on (explained in more detail later).

// Initially, the robot starts at the middle of a 1x1 grid. Everywhere the robot walks it will leave a path "*". If the robot has not been at a particular point on the grid then that point will be represented by a whitespace character " ". So if the RS1 program passed in to execute() is empty, then:

// ""  -->  "*"
// The robot understands 3 major commands:

// F - Move forward by 1 step in the direction that it is currently pointing. Initially, the robot faces to the right.
// L - Turn "left" (i.e. rotate 90 degrees anticlockwise)
// R - Turn "right" (i.e. rotate 90 degrees clockwise)
// As the robot moves forward, if there is not enough space in the grid, the grid should expand accordingly. So:

// "FFFFF"  -->  "******"
// As you will notice, 5 F commands in a row should cause your interpreter to return a string containing 6 "*"s in a row. This is because initially, your robot is standing at the middle of the 1x1 grid facing right. It leaves a mark on the spot it is standing on, hence the first "*". Upon the first command, the robot moves 1 unit to the right. Since the 1x1 grid is not large enough, your interpreter should expand the grid 1 unit to the right. The robot then leaves a mark on its newly arrived destination hence the second "*". As this process is repeated 4 more times, the grid expands 4 more units to the right and the robot keeps leaving a mark on its newly arrived destination so by the time the entire program is executed, 6 "squares" have been marked "*" from left to right.

// Each row in your grid must be separated from the next by a CRLF (\r\n). Let's look at another example:

// "FFFFFLFFFFFLFFFFFLFFFFFL"  -->  "******\r\n*    *\r\n*    *\r\n*    *\r\n*    *\r\n******"
// So the grid will look like this:

// ******
// *    *
// *    *
// *    *
// *    *
// ******
// The robot moves 5 units to the right, then turns left, then moves 5 units upwards, then turns left again, then moves 5 units to the left, then turns left again and moves 5 units downwards, returning to the starting point before turning left one final time. Note that the marks do not disappear no matter how many times the robot steps on them, e.g. the starting point is still marked "*" despite the robot having stepped on it twice (initially and on the last step).

// Another example:

// "LFFFFFRFFFRFFFRFFFFFFF"  -->  "    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   "
// So the grid will look like this:

//     ****
//     *  *
//     *  *
// ********
//     *
//     *
// Initially the robot turns left to face upwards, then moves upwards 5 squares, then turns right and moves 3 squares, then turns right again (to face downwards) and move 3 squares, then finally turns right again and moves 7 squares.

// Since you've realised that it is probably quite inefficient to repeat certain commands over and over again by repeating the characters (especially the F command - what if you want to move forwards 20 steps?), you decide to allow a shorthand notation in the RS1 specification which allows your customers to postfix a non-negative integer onto a command to specify how many times an instruction is to be executed:

// Fn - Execute the F command n times (NOTE: n may be more than 1 digit long!)
// Ln - Execute L n times
// Rn - Execute R n times
// So the example directly above can also be written as:

// "LF5RF3RF3RF7"
// These 5 example test cases have been included for you :)

// My Solution

function execute(code) {
    let display = [['*']];
    code = code.split('').map((e,i,ar)=>{
        if(!Number(e)){
            if(Number(ar[i+1])){
                let num = ar[i+1];
                let c = 1;
                while(Number(ar[i+1+c])||Number(ar[i+1+c])==0){
                    num += ar[i+1+c]
                    c++
                }
                let arr = [];
                num = Number(num);
                while(num>0){
                    arr.push(e);
                    num--;
                };
                return arr;
            }else if(Number(e)){  //  
                return null;
            }else{
                return e;
            };
        }
    });
    code = code.flat().filter(e=>{if(e&&e!='0')return e});
    let index = 0;
    let inside_index = 0;
    let orientation = 'right';
    for(let i=0;i<code.length;i++){
        switch (code[i]){
            case 'L' :
                if(orientation == 'right'){
                    orientation = 'up';
                }else if(orientation == 'up'){
                    orientation = 'left';
                }else if(orientation == 'left'){
                    orientation = 'down';
                }else if(orientation == 'down'){
                    orientation = 'right'
                };
                break;
            case 'R' :
                if(orientation == 'left'){
                    orientation = 'up';
                }else if(orientation == 'down'){
                    orientation = 'left';
                }else if(orientation == 'right'){
                    orientation = 'down';
                }else if(orientation == 'up'){
                    orientation = 'right'
                };
                break;
            case 'F' :
                if(orientation == 'right'){
                    inside_index++;
                    if(inside_index>display[index].length){
                        let n = display[index].length;
                        while(n<inside_index){
                            display.map(e=>e.push(' '))
                            n++
                        };
                        if(display[index][inside_index]==' '){
                            display[index][inside_index]='*'
                        }
                    }else{
                        if(!display[index][inside_index]){
                            display.map((e,i,ar)=>{
                                if(i==index){
                                    return e.push('*')
                                }else{
                                    return e.push(' ')
                                }
                            })
                        }else if(display[index][inside_index]==' '){
                            display[index][inside_index]='*'
                        }
                    }
                }else if(orientation == 'left'){
                    inside_index--;
                    if(inside_index>display[index].length){
                        if(display[index][inside_index]==' '){
                            display[index][inside_index]='*';
                        }
                    }else if(inside_index<0){
                        inside_index =0;
                        display.map((e,i,ar)=>{
                            if(i==index){
                                return e.unshift('*')
                            }else{
                                return e.unshift(' ')
                            }
                        })
                    }else{
                        if(display[index][inside_index]==' '){
                            display[index][inside_index]='*'
                        }
                    }
                }else if(orientation == 'up'){
                    if(index-1<0){
                        display.unshift(Array(display[index].length).fill(' '));
                    }else{
                        index--
                    };
                    if(inside_index>display[index].length){
                        let n = display[index].length;
                        while(n<inside_index){
                            display.map(e=>e.push(' '))
                            n++
                        };
                        if(display[index][inside_index]==' '){
                            display[index][inside_index]='*';
                        }
                    }else{
                        if(!display[index][inside_index]){
                            display[index].push('*');
                        }else if(display[index][inside_index]==' '){
                            display[index][inside_index]='*'
                        }
                    }
                }else if(orientation == 'down'){
                    if(index+1==display.length){
                        display.push(Array(display[index].length).fill(' '))
                        index++
                    }else{
                        index++
                    };
                    if(inside_index>display[index].length){
                        let n = display[index].length;
                        while(n<inside_index){
                            display.map(e=>e.push(' '))
                            n++
                        };
                        if(display[index][inside_index]==' '){
                            display[index][inside_index]='*';
                        }
                    }else{
                        if(display[index][inside_index]==' '){
                            display[index][inside_index]='*'
                        }
                    }
                }
                break;
        }
    };
    return display.map(e=>e.join('')).join('\r\n')
};

// Solution
function execute(code) {
    code = code.replace(/[LFR]\d+/g, (m) => m[0].repeat(+m.slice(1)));
    
    let  i = 0,  j = 0,
        di = 0, dj = 1,
        grid = [["*"]],
        rows, cols;
  
    for (let k = 0; k < code.length; k++) {
      rows = grid.length;
      cols = grid[0].length;
      
      switch(code[k]) {
        case("F"):
          [i,j] = [i+di, j+dj];
          if (i < 0)     grid = [Array(cols).fill(" "), ...grid];
          if (i >= rows) grid = [...grid, Array(cols).fill(" ")];
          if (j < 0)     grid = grid.map(row => [" ", ...row]);
          if (j >= cols) grid = grid.map(row => [...row, " "]);
          i = Math.max(0, i);
          j = Math.max(0, j);
                                        break;
        case("L"): [di,dj] = [-dj, di]; break;
        case("R"): [di,dj] = [ dj,-di]; break;
      }
  
      grid[i][j] = "*";
    }
    
    return grid.map(row => row.join("")).join("\r\n");
  }