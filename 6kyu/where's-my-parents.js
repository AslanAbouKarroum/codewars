// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

// My Soltion
function findChildren(dancingBrigade) {
	let arr = dancingBrigade.split('').sort();
    let str ='';
    while(arr.length>0){
        let cha = arr.find(e=>e==e.toLowerCase());
        let all_cha = arr.filter(e=>e==cha)
        str = str + cha.toUpperCase() +all_cha.join('')
        arr.splice(arr.findIndex(e=>e==cha),all_cha.length)
        arr.splice(arr.findIndex(e=>e==cha.toUpperCase()),1)
    }
    return str;
}