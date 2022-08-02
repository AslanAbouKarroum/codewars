

// The solution
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

// The solution 2
function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }

// The solution 3
function expandedForm(num) {
    return String(num).split('')
                      .map((el,ind,arr)=> el!= '0' ? el+'0'.repeat(arr.length-1-ind) : null )
                      .join(' ')
                      .trim()
                      .replace(/\s+/g,' ')
                      .replace(/ /g,' + ')
   }