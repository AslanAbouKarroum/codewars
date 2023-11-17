// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// The solution
var uniqueInOrder=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}

// The solution 2
var uniqueInOrder = function (iterable){
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

// The solution 3
var uniqueInOrder=function(iterable){
    return iterable.toString().split('').filter(el=>el !== ',').filter((el,index,arr)=>index=== 0 || el !== arr[index-1]).map(el=> el == Number(el) ? Number(el) : el)
  }