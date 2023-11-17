// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

// alternative text

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

// Examples in general form:
// (depending on the language)

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]

// The solution 
function sqInRect(lng, wdth){
    let arr = []
    if(lng === wdth) return null
    while(lng > 0 && wdth > 0){
      arr.push(lng > wdth ? wdth : lng)
      lng > wdth ? lng -= wdth : wdth -= lng
    }
    return arr
  }

// The solution 2
function sqInRect(a, b, initial = true){
    if (a === b) { return initial ? null : [a] }  
    const min = Math.min(a, b)
    const max = Math.max(a, b)
      
    return [min, ...sqInRect(max - min, min, false)]
  }

// The solution 3
function sqInRect(lng, wdth){
    let max = Math.max(...[lng,wdth]);
    let min = Math.min(...[lng,wdth]);
    let arr = [];
    while(max!=min){
        if(max==min*2){
            arr.push(min,min);
            break;
        }else{
            arr.push(min);
            max = max - min;
            let array = [max,min].sort((a,b)=>a-b)
            max = array[1]
            min = array[0]
        }
    }
    return arr.length ? arr : null
}