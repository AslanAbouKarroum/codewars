// Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.

// Examples
// number2words(0)  ==>  "zero"
// number2words(1)  ==>  "one"
// number2words(9)  ==>  "nine"
// number2words(10)  ==>  "ten"
// number2words(17)  ==>  "seventeen"
// number2words(20)  ==>  "twenty"
// number2words(21)  ==>  "twenty-one"
// number2words(45)  ==>  "forty-five"
// number2words(80)  ==>  "eighty"
// number2words(99)  ==>  "ninety-nine"
// number2words(100)  ==>  "one hundred"
// number2words(301)  ==>  "three hundred one"
// number2words(799)  ==>  "seven hundred ninety-nine"
// number2words(800)  ==>  "eight hundred"
// number2words(950)  ==>  "nine hundred fifty"
// number2words(1000)  ==>  "one thousand"
// number2words(1002)  ==>  "one thousand two"
// number2words(3051)  ==>  "three thousand fifty-one"
// number2words(7200)  ==>  "seven thousand two hundred"
// number2words(7219)  ==>  "seven thousand two hundred nineteen"
// number2words(8330)  ==>  "eight thousand three hundred thirty"
// number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
// number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"

// My Solution
function number2words(n){
    console.log(n);
    if(n==0) return 'zero';
    if(n==1) return 'one';
    if(n==2) return 'two';
    if(n==3) return 'three';
    if(n==4) return 'four';
    if(n==5) return 'five';
    if(n==6) return 'six';
    if(n==7) return 'seven';
    if(n==8) return 'eight';
    if(n==9) return 'nine';
    if(n==10) return 'ten';
    if(n==11) return 'eleven';
    if(n==12) return 'twelve';
    if(n==13) return 'thirteen';
    if(n==14) return 'fourteen';
    if(n==15) return 'fifteen';
    if(n==16) return 'sixteen';
    if(n==17) return 'seventeen';
    if(n==18) return 'eighteen';
    if(n==19) return 'nineteen';
    if(n==20) return 'twenty';
    if(n==30) return 'thirty';
    if(n==40) return 'forty';
    if(n==50) return 'fifty';
    if(n==60) return 'sixty';
    if(n==70) return 'seventy';
    if(n==80) return 'eighty';
    if(n==90) return 'ninety';
    if(n==100) return 'one hundred';
    let str = '';
    n=String(n).split('').reverse();
    console.log(n);
    for(let i=n.length-1;i>=0;i--){
        console.log(i);
        if(i==5) str = str + number2words(n[i])+ ' hundred';
        if(i==4&&n[i]!=0&&n[i-1]!=0&&n[i]!=1){ str = str +' '+ number2words(n[i]+'0')+'-'};
        if(i==4&&n[i]!=0&&n[i-1]!=0&&n[i]==1){ str = str +' '+ number2words(n[i]+n[i-1]) + ' thousand'}
        if(i==4&&n[i]!=0&&n[i-1]==0) str = str +' ' +number2words((n[i]+'0'))+ ' thousand';
        if(i==3&& n[i]!=0&&n[i+1]!=1) str = str +' '+ number2words(n[i]) + ' thousand';
        if(i==2&&n[i]!=0) str = str +' '+ number2words(n[i])+ ' hundred';
        if(i==1&&n[i]!=0&&n[i-1]!=0&&n[i]!=1){ str = str +' '+ number2words(n[i]+'0')+'-'};
        if(i==1&&n[i]!=0&&n[i-1]!=0&&n[i]==1){ str = str +' '+ number2words(n[i]+n[i-1])}
        if(i==1&&n[i]!=0&&n[i-1]==0) str = str +' ' +number2words((n[i]+'0'))
        if(i==0&&n[i]!=0&&n[i+1]!=1) str = str +' '+ number2words(n[i])
        console.log(str);
    };
    str = str.replace(/- /g,'-')
    return str.trim()
};

// Solution
function number2words(n){
    // works for numbers between 0 and 999999
    var b=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var b2=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if(n>=0 && n<20){
      return b[n];
    }
    if(n >= 20 && n<100){
      return b2[Math.floor(n/10)-2]+(n%10===0?'':'-'+b[n%10])
    }
    if(n>=100 && n<1000){
      return b[Math.floor(n/100)]+' hundred'+(n%100===0?'':' '+number2words(n%100));
    }else{
      return number2words(Math.floor(n/1000))+' thousand'+(n%1000===0?'':' '+number2words(n%1000));
    }
  }