// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

// To compare the results of the teams you are asked for giving three statistics; range, average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

// of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:
// if a result in seconds is ab.xy... it will be given truncated as ab.
// if the given string is "" you will return ""

// My solution


function stat(strg) {
    if(strg=='') return ''
    let arr= strg.split(', ').map((e)=>e.split('|').reduce((acc,el,i,ar)=>{
        if(i==0) el =el*3600
        if(i==1) el=el*60
        if(i==2) el=el*1
        return Number(el)+acc
    },0))
    let sorted_arr = arr.sort((a,b)=>a-b); 
    let range = sorted_arr[sorted_arr.length-1]-sorted_arr[0];
    let range_h = Math.floor(range/3600)
    let range_m = Math.floor((range/3600-range_h)*60)
    let range_s = Math.round((((range/3600-range_h)*60)-range_m)*60)
    if(range_s == 60 && range_m==60){
        range_h = range_h + 1;
        range_m = 0;
        range_s = 0;
    }else if(range_s == 60 ){
        range_m = range_m +1;
        range_s = 0;
    }
    if(range_h<10) range_h = '0'+range_h
    if(range_m<10) range_m = '0'+range_m
    if(range_s<10) range_s = '0'+range_s
    range = `${range_h}|${range_m}|${range_s}`

    let average = arr.reduce((acc,e)=>acc+e)/arr.length
    let average_h = Math.floor(average/3600)
    let average_m = Math.floor((average/3600-average_h)*60)
    let average_s = 0;
    if( (((average/3600-average_h)*60)-average_m)*60 - Math.floor((((average/3600-average_h)*60)-average_m)*60) > 0.96||(((average/3600-average_h)*60)-average_m)*60 - Math.floor((((average/3600-average_h)*60)-average_m)*60) < 0.5 ){
        average_s = Math.round((((average/3600-average_h)*60)-average_m)*60)
    }else{
        average_s = Math.floor((((average/3600-average_h)*60)-average_m)*60)
    }

    if(average_s == 60 && average_m==60){
        average_h = average_h + 1;
        average_m = 0;
        average_s = 0;
    }else if(average_s == 60 ){
        average_m = average_m +1;
        average_s = 0;
    }
    if(average_h<10) average_h = '0'+average_h
    if(average_m<10) average_m = '0'+average_m
    if(average_s<10) average_s = '0'+average_s
    average = `${average_h}|${average_m}|${average_s}`

    let median = [];
    sorted_arr.length%2 ? median = sorted_arr[Math.floor(sorted_arr.length/2)] :median = (sorted_arr[sorted_arr.length/2 -1] + sorted_arr[sorted_arr.length/2])/2
    let median_h = Math.floor(median/3600)
    let median_m = Math.floor((median/3600-median_h)*60)
    let median_s = 0;
    if( (((median/3600-median_h)*60)-median_m)*60 - Math.floor((((median/3600-median_h)*60)-median_m)*60) > 0.51||(((median/3600-median_h)*60)-median_m)*60 - Math.floor((((median/3600-median_h)*60)-median_m)*60) < 0.50 ){
        median_s = Math.round((((median/3600-median_h)*60)-median_m)*60)
    }else{
        median_s = Math.floor((((median/3600-median_h)*60)-median_m)*60)
    }
    if(median_s == 60 && median_m==60){
        median_h = median_h + 1;
        median_m = 0;
        median_s = 0;
    }else if(median_s == 60 ){
        median_m = median_m +1;
        median_s = 0;
    }
    if(median_h<10) median_h = '0'+median_h
    if(median_m<10) median_m = '0'+median_m
    if(median_s<10) median_s = '0'+median_s
    median = `${median_h}|${median_m}|${median_s}`
    return 'Range: '+range+' Average: '+average+' Median: '+median
}