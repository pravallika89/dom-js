var anchor = document.querySelector('a');
console.log(anchor);

var allAnchors =document.querySelectorAll('a');
console.log(allAnchors);

allAnchors[1].textContent = 'This text is set from JS using DOM manipulation';
allAnchors[1].href='https://www.goggle.com' ;
allAnchors[1].target='_blank' ;

var para1 = document.getElementById('para-1');
console.log(para1);
var para1UsingSelector=document.querySelector('#para-1');
console.log(para1UsingSelector);
para1.style.color='orange';

var btn= document.getElementsByClassName('button');
console.log(btn[0]);

btn[0].style.padding= '10px';
btn[0].style.fontSize='22px';

var Anchor = document.querySelector('p');

//replaced with new paragraph

var para2= document.getElementById('para-2').innerHTML="Replaced with new paragraph";
console.log(para2);
// var para2UsingSelector=document.querySelector('#par-2');
// console.log(para2UsingSelector);


