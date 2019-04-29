//Integer variables

var a= 100;

var b=200;

// addition
var sum = a + b;
console.log(sum);

// substraction
var diff=b-a;
console.log(diff);

// multiplication
var times= a*b;
console.log(times);

// division
var div=a/b;
console.log(div);

// Modulus
var mod= a%b;
console.log(mod);

//string variables

var str1= 'Sahasra';
console.log(str1);
var str2='Yadavali';
console.log(str2);

console.log(str1,str2);

var fullName=str1+'  '+str2;
console.log(fullName);


var fullName=str1.concat(' ',str2);
console.log(fullName);

var fullName=str1.concat( ' ').concat(str2);
console.log(fullName);


// boolean variables

var f = true;
var g = false;

console.log(f);
console.log(g);

// array variables

var arr1=['rose', 'lotus', 'jasmine'];
var arr2=['apple', 'samsung'];

console.log(arr1);
console.log(arr2);

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

arr1.unshift('sunflower');// add at start
console.log(arr1);

arr1.push('lilly');// add at end
console.log(arr1);

arr2.splice(1,1,'motorola');//replace
console.log(arr2);

//makes copy

var arr3=arr1.slice();
console.log(arr3);



//object variables

var phone={
    make:'apple',
    model:'6s',
    year:2017
};
console.log(phone);
var person={
    firstName:'pravalika',
    lastName:'ammineni',
    graduation:'pharmacy'
};
console.log(person.firstName);
