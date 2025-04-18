// "AL-AHLY" and "Zamalek" are the best teams in Egypt, but "AL-AHLY" always wins the matches between them. "Zamalek" managers want to know what is the best match they've played so far.

// The best match is the match they lost with the minimum goal difference. If there is more than one match with the same difference, choose the one "Zamalek" scored more goals in.

// Given the information about all matches they played, return the index of the best match (0-based). If more than one valid result, return the smallest index.

// Example
// For ALAHLYGoals = [6,4] and zamalekGoals = [1,2], the output should be 1 (2 in COBOL).

// Because 4 - 2 is less than 6 - 1

// For ALAHLYGoals = [1,2,3,4,5] and zamalekGoals = [0,1,2,3,4], the output should be 4.

// The goal difference of all matches are 1, but at 4th match "Zamalek" scored more goals in. So the result is 4 (5 in COBOL).

// Input/Output
// [input] integer array ALAHLYGoals
// The number of goals "AL-AHLY" scored in each match.

// [input] integer array zamalekGoals
// The number of goals "Zamalek" scored in each match. It is guaranteed that zamalekGoals[i] < ALAHLYGoals[i] for each element.

// [output] an integer
// Index of the best match.

// My Solution
function bestMatch(ALAHLYGoals, zamalekGoals) {
    let arr = [];
    ALAHLYGoals.forEach((e,i,ar)=>arr.push([e-zamalekGoals[i],zamalekGoals[i],i]));
    arr.sort((a,b)=>a[0]-b[0])
    arr = arr.filter((e,i,ar)=>e[0]==ar[0][0])
    arr.sort((a,b)=>b[1]-a[1])
    return arr.filter((e,i,ar)=>e[1]==ar[0][1])[0][2]
}

// Solution
function bestMatch(aGoals, bGoals) {
    return bGoals
      .reduce((best, goals, i) => {
        const diff = aGoals[i] - goals;
        return !best.d || (diff < best.d || (diff === best.d && goals > best.v)) ? {d: diff, v: goals, i} : best;
       }, {d: null, g: null, i: null}).i;
 }