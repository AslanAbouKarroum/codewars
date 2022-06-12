// Simple, remove the spaces from the string, then return the resultant string.
// The solution
function noSpace(x){
    return x.replace(/\s/g, '');
  }
// The solution 2
function noSpace(x){return x.split(' ').join('')}