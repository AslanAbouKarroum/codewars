// Hey You !
// Sort these integers for me ...

// By name ...

// Do it now !

// Input
// Range is 0-999

// There may be duplicates

// The array may be empty

// Example
// Input: 1, 2, 3, 4
// Equivalent names: "one", "two", "three", "four"
// Sorted by name: "four", "one", "three", "two"
// Output: 4, 1, 3, 2
// Notes
// Don't pack words together:
// e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
// e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
// Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
// e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
// e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"

// My Solution
function sortByName(ary) {
    let num_names_obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10:'ten',
        11: 'eleven',
        12:'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    let names_arr = [];
    names_arr =  ary.map((e)=>{
        if(num_names_obj[e]){
            return num_names_obj[e] + ' ' +e;
        }else{
            let num_str = String(e).split('');
            if(num_str.length==2){
                return num_names_obj[Number(`${num_str[0]}0`)] + ' ' + num_names_obj[Number(num_str[1])] + ' ' +e
            }else if(num_str[1]=='0' && num_str[2]=='0'){
                return num_names_obj[Number(num_str[0])] + ' ' + 'hundred'  + ' ' +e
            }else if(num_str[1]=='0'){
                return num_names_obj[Number(num_str[0])] + ' ' + 'hundred' + ' ' + num_names_obj[Number(num_str[2])]+ ' ' +e
            }else if(num_str[1]=='1' || num_str[2]=='0'){
                return num_names_obj[Number(num_str[0])] + ' ' + 'hundred' + ' ' + num_names_obj[Number(num_str[1]+num_str[2])] + ' ' +e
            }else{
                return num_names_obj[Number(num_str[0])] + ' ' + 'hundred' + ' ' + num_names_obj[Number(`${num_str[1]}0`)] + ' ' + num_names_obj[Number(num_str[2])] + ' ' +e
            }
        }
    });
    return names_arr.sort().map(e=>Number(e.split(' ').filter(e=>Number(e)).join('')));
};

// Solution
const sortByName = arr => {
    const words = {};
    arr.forEach(n => words[n] = num2word(n));
    return arr.sort((a, b) => words[a].localeCompare(words[b]));
};
  
function num2word(n){
    var a = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var b = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if (n >= 0 && n < 20) return a[n];
    if (n >= 20 && n < 100) return b[Math.floor(n / 10) - 2] + (n % 10 ? '-' + a[n % 10] : '');
    if (n >= 100 && n < 1000) return a[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + num2word(n % 100) : '');
    return num2word(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + num2word(n % 1000) : '');
}