// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// The solution
function humanReadable (seconds) {
    let h =Math.floor(seconds/3600) 
    let m =Math.floor(((seconds/3600)-h)*60)
    let s=Math.round(((((seconds/3600)-h)*60)-m)*60)
    if(s==60){
        s=0
        m+=1
    }
    if(m==60){
        m=0
        h+=1
    }
    if(h<10)  h = `0${h}`
    if(m<10)  m = `0${m}`
    if(s<10)  s = `0${s}`
    return `${h}:${m}:${s}`
}

// The solution 2
function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }