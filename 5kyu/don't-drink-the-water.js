// Don't Drink the Water

// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// {                             {
//   { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
//   { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
//   { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
// }                             }
 
// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

// My Solution
function separateLiquids(glass) {
    let flat_glass = flattenDeep(glass);
    flat_glass = flat_glass.map(e=>{
        switch (e){
            case 'O':
                return 0.8;
            case 'A':
                return 0.87;
            case 'W':
                return 1;
            case 'H':
                return 1.36;
        }
    })
    flat_glass.sort((a,b)=>a-b);
    flat_glass = flat_glass.map(e=>{
        switch (e){
            case 0.8:
                return 'O';
            case 0.87:
                return 'A';
            case 1:
                return 'W';
            case 1.36:
                return 'H';
        }
    })
    glass = glass.map((e,i)=>{
        return e.map((el,ind,ar)=>{
            return el=flat_glass[i*e.length+ind]
        })
    })
    return glass;
};

function flattenDeep(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
};
