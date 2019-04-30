//if condition

// var hour=1;
var hour =prompt('what hour is it now');

// if(hour > 18){
//     //continue class
//     console.log('class has started');
// }

// if(hour < 21){
//     //continue class
//     console.log('continue class');
// }

// if(hour > 18 && hour < 21){
//     //continue class
//     console.log(' class hours');
// }else if(hour > 0 && hour < 4){
//     console.log('sleep time');
// }
// else{
//     console.log('non- class hours');
// }
var minute = prompt('How many minutes past the hour');
// switch condition

switch(minute){
    case 0:
        console.log('hour has just begin');
        break;
    case 30:
        console.log('it is almost next hour');
        break;
    default:
        console.log ('Waiting for next hr');
        break;
}