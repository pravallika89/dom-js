

var btn= document.getElementsByClassName('button');
var btnUsingSelector=document.querySelector('.button');

btn[0].style.padding= '10px';
btn[0].style.fontSize='22px';

//add event listner

btnUsingSelector.addEventListener('click',function(){

    console.log('Button was clicked from JS');

});


btnUsingSelector.addEventListener('mouseover',function(event){
    // alert('mouse over on the button');
    console.log(event);
    console.log(typeof event.target);

    var btnText = event.target.innerHTML;
    alert('Mouse over on the ' + btnText + ' button');
});

// add click event on this button
// on click show an alert asking user to confirm cancel
var btn = document.getElementsByClassName('cancel-button');
var btnUsingSelector = document.querySelector('.cancel-button');

    btnUsingSelector.addEventListener('click',function(event){
    var response = confirm('Are you sure to cancel');
    console.log(response);

   //if user confirms do something

});

// add an event on the document that captures any key that is is tyoed

document.addEventListener('keypress',function(event){
    console.log(event.key);
    console.log(event.keycode);

});

document.addEventListener('keydown',function(event){
    console.log(event.key);
    console.log(event.keycode);

});

document.addEventListener('keyup',function(event){
    console.log(event.key);
    console.log(event.keycode);

});

document.addEventListener('scroll',function(event){
    console.log(event.key);
    // console.log(event.keycode);

});