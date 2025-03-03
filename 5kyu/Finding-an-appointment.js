// The businesspeople among you will know that it's often not easy to find an appointment. In this kata we want to find such an appointment automatically. You will be given the calendars of our businessperson and a duration for the meeting. Your task is to find the earliest time, when every businessperson is free for at least that duration.

// Example Schedule:

// Person | Meetings
// -------+-----------------------------------------------------------
//      A | 09:00 - 11:30, 13:30 - 16:00, 16:00 - 17:30, 17:45 - 19:00
//      B | 09:15 - 12:00, 14:00 - 16:30, 17:00 - 17:30
//      C | 11:30 - 12:15, 15:00 - 16:30, 17:45 - 19:00
// Rules:

// All times in the calendars will be given in 24h format "hh:mm", the result must also be in that format
// A meeting is represented by its start time (inclusively) and end time (exclusively) -> if a meeting takes place from 09:00 - 11:00, the next possible start time would be 11:00
// The businesspeople work from 09:00 (inclusively) - 19:00 (exclusively), the appointment must start and end within that range
// If the meeting does not fit into the schedules, return null or None as result
// The duration of the meeting will be provided as an integer in minutes
// Following these rules and looking at the example above the earliest time for a 60 minutes meeting would be 12:15.

// Data Format:

// The schedule will be provided as 3-dimensional array. The schedule above would be encoded this way:

// [
//   [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
//   [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
//   [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
// ]

// My Solution
function getStartTime(schedules, duration) {
    let free_schedules = Array(600).fill(1);
    let schedules_modified = schedules.map(e=>{
        return e.map((el,i,ar)=>{
            return el.map((d,ind,arr)=>{
                return d.split(':').map((t,j,arr)=>{if(j==0){return Number((t-9)*60)}else{return Number(t)}}).reduce((acc,t)=>acc+t)
                });
            });
    });
    schedules_modified.forEach((e,i,ar)=>{
        e.forEach((el,ind,arr)=>{
            let dt = el[1]-el[0]
            let c = 0;
            while(dt>0){
                free_schedules[el[0]+c]=0
                dt--
                c++
            }
        })
    })
    let index = free_schedules.findIndex((e,i,ar)=>{if(e!=0){
        let dt = duration-1;
        let c = 1;
        let check = 1;
        while(dt>0){
            if(ar[i+c]!=0){check++}
            c++
            dt--
        }
        if(check==duration){
            return true
        }else{
            return false
        }
    }})
    if(index==-1||index+duration>600) return null
    index = intToHour(index)
    return index
};

function intToHour(int){
    let min = int%60
    int = int-min
    if(min<10) min = `0${min}`
    int = int/60 +9
    return int< 10 ? `0${int}:${min}`:  `${int}:${min}`
}

// Solution
function getStartTime(schedules, duration) {
    function toMinutes(s) {
      return s.split(':').reduce(function(h, m) {
        return parseInt(h) * 60 + parseInt(m);
      });
    }
    return schedules.reduce(function(p, n) {
      return p.concat(n);
    }, [['00:00', '09:00'], ['19:00', '24:00']]).sort().reduce(function(p, n) {
      if (!p.start && toMinutes(p.last) + duration <= toMinutes(n[0])) {
        p.start = p.last;
      }
      p.last = p.last < n[1] ? n[1] : p.last;
      return p;
    }, {last: '00:00', start: null}).start;
  }