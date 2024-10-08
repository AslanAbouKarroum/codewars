// Two Joggers
// Description
// Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

// Illustration
// Example where Charles (dashed line) runs a shorter lap than Bob:

// Example laps

// Task
// Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

// The function takes two arguments:

// The length of Bob's lap (larger than 0)
// The length of Charles' lap (larger than 0)

// The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

// The first number is the number of laps that Bob has to run
// The second number is the number of laps that Charles has to run

// Examples:

// nbrOfLaps(5, 3); // returns [3, 5]
// nbrOfLaps(4, 6); // returns [3, 2]

// My Solution
var nbrOfLaps = function (x, y) {
    let r=0;
    if(x==y){
        return [1,1];
    }else if(y<x){
        r=1;
        let s=x;
        x=y;
        y=s;
    }
    let z= x*y;
    let arr = [];
    for(let i=x;i<=z;i++){
        if(i%x==0&&i%y==0){
            if(r==0){
                return [i/x,i/y];
            }else{
                return [i/y,i/x];
            }
        };
    };
    return [0, 0];
};