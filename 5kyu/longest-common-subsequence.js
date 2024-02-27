// Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

// Subsequence
// A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

// Example subsequence
// Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

// LCS examples
// LCS( "abcdef" , "abc" ) => returns "abc"
// LCS( "abcdef" , "acf" ) => returns "acf"
// LCS( "132535365" , "123456789" ) => returns "12356"
// Notes
// Both arguments will be strings
// Return value must be a string
// Return an empty string if there exists no common subsequence
// Both arguments will have one or more characters (in JavaScript)
// All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".
// Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

// My Solution
function LCS(x, y) {
    let str = '';
    let index = -1;
    let arr_y = y.split('');
    x.split('').map((e,i)=>{
        if(arr_y.find(el=>el==e)){
            if(arr_y.findIndex(el=>el==e)>index){
                str = str + e;
                index = arr_y.findIndex(el=>el==e);
                arr_y.splice(index,1,'');
            };
            if(index!=-1){
                arr_y = arr_y.map((e,i)=>{if(i<=index){ return ''}else{return e}});
            };
        };
        return e;
    });
    let str1 = '';
    let index1 = -1;
    let arr_x = x.split('');
    y.split('').map((e,i)=>{
        if(arr_x.find(el=>el==e)){
            if(arr_x.findIndex(el=>el==e)>index1){
                str1 = str1 + e;
                index1 = arr_x.findIndex(el=>el==e);
                arr_x.splice(index1,1,'');
            };
            if(index1!=-1){
                arr_x = arr_x.map((e,i)=>{if(i<=index1){ return ''}else{return e}});
            };
        };
        return e;
    });
    return str.length>=str1.length ? str: str1;
};

// Solution
function LCS( xstr, ystr ) {
    if( xstr == '' || ystr == '' ) return '';
      
    var xp    = xstr.charAt( 0 ), xrest = xstr.slice( 1 ),
        yp    = ystr.charAt( 0 ), yrest = ystr.slice( 1 );
        
    if( xp == yp )
      return xp + LCS( xrest, yrest );
    
    var lcs1 = LCS( xstr, yrest ),
        lcs2 = LCS( xrest, ystr );
        
    return (lcs1.length > lcs2.length) ? lcs1 : lcs2;
  }