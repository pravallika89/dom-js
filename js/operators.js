// var age=21,
// accompaniedByAdult=trfalse;

var age= prompt('Enter your age:');
    
console.log (typeof parseInt(age));
    // console.log ({age,accompaniedByAdult});

if (age > 18 && age < 21){
    var accompaniedByAdult = confirm('Are you accompanied by Someoneover');
    // if (accompaniedByAdult ){
    //     console.log('Allowed');
    // }else{
    //     console.log('Denied');
    // }
    accompaniedByAdult ? console.log('Allowed') : console.log('Denied');
}else if ( age >=21){
    console.log('you are free');
}
else  {
    console.log('Try again next year');
}


//ternary operation

// (age >=18 && age < 21 ) ?
//     (accompaniedByAdult ?
//         console.log('Allowed') : console.log('Denied'))
//     :(age >21) ? 
//         console.log('You are free')
//         :console.log('age is not between 18 qnd 21');