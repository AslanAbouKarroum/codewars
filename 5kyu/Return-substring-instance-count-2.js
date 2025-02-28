// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// searchSubstr( fullText, searchText, allowOverlap = true )
// so that overlapping solutions are (not) counted. If the searchText is empty, it should return 0. Usage examples:

// searchSubstr('aa_bb_cc_dd_bb_e', 'bb') // should return 2 since bb shows up twice
// searchSubstr('aaabbbcccc', 'bbb') // should return 1
// searchSubstr( 'aaa', 'aa' ) // should return 2
// searchSubstr( 'aaa', '' ) // should return 0
// searchSubstr( 'aaa', 'aa', false ) // should return 1

// My Solution
function searchSubstr( fullText, searchText, allowOverlap = true ){
    if(searchText=='') return 0;
    if(allowOverlap){
        let sum= 0;
        fullText.split('').forEach((e,i,ar)=>{if(i+searchText.length<=fullText.length){if(ar.join('').slice(i,i+searchText.length)==searchText){sum++}}})
        return sum
    }else{
        const regex = new RegExp(`.{1,${searchText.length}}`, 'g');
        return fullText.match(regex).filter(e=>e==searchText).length
    }
};

// Solution
function searchSubstr(fullText, searchText, allowOverlap) {
    if(searchText == '') return 0;
    var re = new RegExp(searchText, 'g');
    if(allowOverlap) {
      var count = 0;
      while(re.exec(fullText)) {count++; re.lastIndex -= searchText.length - 1;}
      return count;
    } else return (fullText.match(re) || []).length || 0;
}