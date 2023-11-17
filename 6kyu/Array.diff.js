// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// The solution
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

// The solution 2
function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }

// The solution 3
function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
  }

// The solution 4
function arrayDiff(a, b) {
    return a.filter(elA=> elA !== b.find(elB=> elB === elA))
  }