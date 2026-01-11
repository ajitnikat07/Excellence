// Date (With The Help of System Clock Suppose Example Of Ticket Booking System)
//Date Can Be Calculated Using MilliSecond From 1 January 1970
// 100ms From 1 Jan 1970

// const d = new Date();
// console.log(d);

// console.log(d);
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(typeof d);
// console.log(d.getDate());
// console.log(d.getDay());

// Sun,Mon,Tue,Wed,Thu,Fri,Sat
//0,1,2,3,,4,5,6

// console.log(d.getMonth());
// Jan Feb Mar Apl May
// 0 1 2 3 4 

// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getTime());

// It Provides TimeStamp From 1 Jan 1970
// const now =Date.now();
// console.log(now);

// Here 10 means October

// const d =new Date("2022-10-20");
// console.log(d);
// console.log(d.toDateString());

//Number : 0 based Start
//String : 1 Based Start

// Year / Month / Day / Hour / mInutes / Second / Millisecond
// Different Formats( 0 based Indexing Is Possible In Below Lines hence ans is may)

// const date = new Date(2024,4,25,10,45,50,252);
// console.log(date);
// console.log(date.toString());

// const d = new Date();
// d.setDate(20);
// d.setFullYear(2050);
// d.setMonth(5);
// console.log(d);
// console.log(d.toString());

// Date Calculation

// const date1 = new Date();
// const date2= new Date("2025-04-16");

//Answer Is In Milli Second

// console.log(date2-date1);
// console.log(date2 > date1);   //Comparison Operator

// CountDown Timer(Olympics Calculation)
// Days,Hour,Minutes,Seconds

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

const date = date2 - date1;

const days = Math.floor(date/(1000*60*60*24));
console.log(days);

const hour = Math.floor((date/(1000*60*60))%24);
console.log(hour);

const min = Math.floor((date/(1000*60))%60)
console.log(min);

const sec = Math.floor((date/(1000))%60)
console.log(`CountDown Timer: Days:${days} hour: ${hour} minutes: ${min} seconds: ${sec}`);