// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.


// The solution
function meeting(s) {
    let s2 = s.toUpperCase()+';'
    let last_name = s2.split(/\w+\:/).join(' ').trim().replace(/\;/g,'').split(' ').sort() 
    let first_name = s2.split(/\:\w+\;*/).join(' ').trim().split(' ').sort()
    let last_first = []
    last_name.forEach((last)=>first_name.forEach((first)=>{
      if(s2.includes(`${first}:${last};`)){
         last_first.push(`(${last}, ${first})`)
         s2 = s2.replace(`${first}:${last};`,'')
      }
    }))
    return last_first.join('')
  }

  // The solution 2
  function meeting(s) {
    let string = s.toUpperCase().split(';')
                  .map(x => x.split(':').reverse().join(', '))
                  .sort()
                  .join(')(')
    return '(' + string + ')'
  }

  // The solution 3
  const meeting = s => {
    return s.toUpperCase()
           .replace(/(\w+):(\w+)/g, "($2, $1)")
           .split(';')
           .sort()
           .join('')
  };