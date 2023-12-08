// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

// My solution
function whatCentury(year){
    let century =  Math.ceil(year/100);
    if(century>10 && century<20){
        return century +'th';
    }else if(String(century)[1]==1){
        return century + 'st';
    }else if(String(century)[1]==2){
        return century + 'nd';
    }else if(String(century)[1] ==3){
        return century + 'rd';
    }else{
        return century +'th';
    };
};
