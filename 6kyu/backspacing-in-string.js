// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// The solution
function cleanString(s) {
    let str = '';
    s.split('').forEach((el,ind,arr)=> el=='#' ? str=str.slice(0,-1):str+=el);
    return str;
}

// The solution 2
clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');