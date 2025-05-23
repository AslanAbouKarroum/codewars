// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters have discovered a new unit - a priest with Wo lo looooooo power.


// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3 
//  b - 2
//  s - 1
//  t - 0 (but it's priest with Wo lo loooooooo power)
// The right side letters and their power:

//  m - 4
//  q - 3 
//  d - 2
//  z - 1
//  j - 0 (but it's priest with Wo lo loooooooo power)
// The other letters don't have power and are only victims.
// The priest units t and j change the adjacent letters from hostile letters to friendly letters with the same power.

// mtq => wtp
// wjs => mjz
// A letter with adjacent letters j and t is not converted i.e.:

// tmj => tmj
// jzt => jzt
// The priests (j and t) do not convert the other priests ( jt => jt ).

// Example
// alphabetWar("z")         //=>  "z"  => "Right side wins!"
// alphabetWar("tz")        //=>  "ts" => "Left side wins!" 
// alphabetWar("jz")        //=>  "jz" => "Right side wins!" 
// alphabetWar("zt")        //=>  "st" => "Left side wins!" 
// alphabetWar("azt")       //=> "ast" => "Left side wins!"
// alphabetWar("tzj")       //=> "tzj" => "Right side wins!" 

// My Solution
const power = {
    'w' : 4,
    'p' : 3,
    'b' : 2,
    's' : 1,

    'm' : -4,
    'q' : -3, 
    'd' : -2,
    'z' : -1
}
const priestT = {
    'm' : 'w',
    'q' : 'p',
    'd' : 'b',
    'z' : 's'
}
const priestJ = {
    'w' : 'm',
    'p' : 'q',
    'b' : 'd',
    's' : 'z'
}
function alphabetWar(fight){
    fight = fight.split('');
    fight.forEach((e,i)=>{
        if(e=='t'){
            if(power[fight[i-1]]&&priestT[fight[i-1]]&&fight[i-2]!='j'){
                fight[i-1]=priestT[fight[i-1]]
            }
            if(power[fight[i+1]]&&priestT[fight[i+1]]&&fight[i+2]!='j'){
                fight[i+1]=priestT[fight[i+1]]
            }
        }else if(e=='j'){
            if(power[fight[i-1]]&&priestJ[fight[i-1]]&&fight[i-2]!='t'){
                fight[i-1]=priestJ[fight[i-1]]
            }
            if(power[fight[i+1]]&&priestJ[fight[i+1]]&&fight[i+2]!='t'){
                fight[i+1]=priestJ[fight[i+1]]
            }
        }})
    let num = fight.map((e)=>power[e]||0).reduce((acc,e)=>acc+e);
    return  num > 0 ? 'Left side wins!' :   num < 0  ?'Right side wins!' : 'Let\'s fight again!';
}