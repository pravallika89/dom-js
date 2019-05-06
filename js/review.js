var user ={ };
var name= prompt('Enter name:');
console.log({name});
console.log( !!name);
console.log(!isNaN(name));
// if (name === '' || ' '|| parseInt(name)){
//     alert('Enter valid name');
// }else{
//     user.name = name;
// }


if (name && isNaN(parseInt(name)){
    user.name = name;
    var power = ('Enter your power:');
    console.log(power);
    console.log(isNaN(name));
    console.log(isNaN(parseInt(power)));

    if (power && !isNaN(parseInt(power))){
            user.hp=parseInt(power);
    }else {
        alert('Enter valid power:');
    }
}else{
    alert('Enter valid name');
}