// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// The solution
function diamond(n){
    let diam = '';
    for(let i =1,j=0;i<((n/2));i++,j++){
        diam += ' ' + '*'.repeat(i+j) + '/n';
    }
    // console.log(diam)
    diam += ' ' + '*'.repeat(n) +'/n' + ' ';
    // console.log(diam)
    let lDiam = '';
    for(let i =1,j=0;i<((n/2));i++,j++){
        lDiam += ' ' + '*'.repeat(i+j) + '/n';
    }
    // console.log(lDiam)
    // console.log(lDiam.split(' ').reverse().join(' '))
    diam += lDiam.split(' ').reverse().join(' ')
    return diam;
}