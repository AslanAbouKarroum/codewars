// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats


// My Solution
let countDeafRats = function(town) {
    town = town.split(' ').join('');
    let p_index = town.indexOf('P');
    let should_left = town.slice(0,p_index);
    let should_right = town.slice(p_index+1)
    if(!should_left) should_left ='0';
    if(!should_right)  should_right ='0';
    return (should_left.match(/.{1,2}/g).filter(e=>e=='O~').length) + (should_right.match(/.{1,2}/g).filter(e=>e=='~O').length);
};