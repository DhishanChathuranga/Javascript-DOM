// -----------------------
// ---------Events--------
// -----------------------

/*
    An HTML event can be somethig to browser does, or something a user does.

    Here are some exsamples of html events:
    1. An HTML web page has finished loading
    2. An HTML input filed was changed 
    3. An HTML button was clicked

    often, when event happen,you may want to do something.
    Javascript Lets you execute code when event are detected.
*/

// -----Using Internal Events-----
// HTML allows event handler attributes, with javascript code, to be added to HTML elements.
// <element event='some Javascript'>

// function btnClick(x){
//     alert(x);
// }

// ------Using Event Listeners------
/*
    The addEventListener() method attaches an event handler to an element without overwritting existing event handlers.

    You can add many event handles to one element.

    You can add many event handles of the same type to one element , i.e two "click" events. 

    You can many event handlers of the same type to one element, i.e two window object.

    when using the addeventListener() method, the javascript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

    You can easily remove an event listener by using the removeEventListener() method.
*/

// // ---Intergrated Function---
// var butten1 = document.getElementById('c-btn').addEventListener
// ('click', function(){
//     alert("Butten Clicked!");
// })

// // ---------------------------------------------------------------------------------

// // ---Named Function---
// document.getElementById('c-btn').addEventListener('mouseout', txtChange);
// function txtChange(){
//     alert("Mouse Out");
//     document.getElementById('hdt').textContent = "Mouse Out!";
// }

// // ---------------------------------------------------------------------------------

// // ---Parameterized Function---
// document.getElementById('i-btn').addEventListener('click', function(){
//     changeListBack('Hello!');
// })

// function changeListBack(x){
//     document.getElementById('li-items').style.backgroundColor = 'yellow';
//     document.getElementById('li-items').firstElementChild.textContent = x;
// }

// // ----------------------------------------------------------------------------------

// // ---Event Parameter---
// var button2 = document.getElementById('e-btn').addEventListener('click', clickBtn);

// function clickBtn(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     console.log(e.target.classList[0]);
//     console.log(e.target.type);
//     console.log(e.type);

//     // Out Put
//     var output = document.getElementById('output');
//     output.innerHTML = '<h4>Class Name : ' + e.target.classList[0] + '</h4>';

//     // Clicking Position 
//     console.log(e.clientX);
//     console.log(e.clientY);

//     console.log(e.offsetX);
//     console.log(e.offsetY);

//     // Check key press 
//     console.log(e.altKey);
//     console.log(e.shiftKey);
//     console.log(e.ctrlKey);
// }

// ---------------------------------------------------------------------------------


// -----Bubbling & Capturing-----
/*
    Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

    In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

    In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

    The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.
*/
// --Bubbling--
document.getElementById('myP1').addEventListener('click', function(){
    alert("You Clicked the White Element");
}, false);

document.getElementById('myDiv1').addEventListener('click', function(){
    alert("You Clicked the Chocalot Element");
}, false);

// --Capturing--
document.getElementById('myP2').addEventListener('click', function(){
    alert("You Clicked the White Element");
}, true);

document.getElementById('myDiv2').addEventListener('click', function(){
    alert("You Clicked the Chocalot Element");
}, true);


// --------Remove Event Listeners--------
function myFunc(){
    alert("Butten has clicked");
}

// Add
document.getElementById('ev-btn').addEventListener('click', myFunc);

// Remove
document.getElementById('rm-btn').addEventListener('click', function(){
    document.getElementById('ev-btn').removeEventListener('click', myFunc);
    console.log('Event has removed');
}); 

// -------------------------------------------------------------------------------


// -----Diffrent type of events for mouse-----

// var btn = document.getElementById('t-btn');
// var box = document.getElementById('box');

// btn.addEventListener('click', typeOfEvent1);
// btn.addEventListener('dblclick', typeOfEvent1);
// btn.addEventListener('mousedown', typeOfEvent1);
// btn.addEventListener('mouseup', typeOfEvent1);
 
// box.addEventListener('mouseenter', typeOfEvent1); 
// box.addEventListener('mouseleave', typeOfEvent1); 

// box.addEventListener('mouseover', typeOfEvent1); 
// box.addEventListener('mouseout', typeOfEvent1); 

// box.addEventListener('mousemove', typeOfEvent1);

// function typeOfEvent1(e){
//     console.log("Event Type : " + e.type);

//     document.querySelector('#box h2').textContent = 'Mouse X : ' + e.offsetX + ' | Mouse Y : ' + e.offsetY ;

//     document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+','+e.offsetX+')';
// }

// ----------------------------------------------------------------------------------


// -----Diffrent type of events for mouse-----

// var keyInput = document.querySelector('input[type="text"]');

// keyInput.addEventListener('keydown', typeOfEvent2);
// keyInput.addEventListener('keyup', typeOfEvent2);
// keyInput.addEventListener('keypress', typeOfEvent2);

// keyInput.addEventListener('focus', typeOfEvent2);
// keyInput.addEventListener('blur', typeOfEvent2);

// keyInput.addEventListener('copy', typeOfEvent2);
// keyInput.addEventListener('cut', typeOfEvent2);
// keyInput.addEventListener('paste', typeOfEvent2);

// keyInput.addEventListener('input', typeOfEvent2);

// function typeOfEvent2(e){
//     console.log("Event Type : " + e.type);
//     // console.log("Event Type : " + e.target.value);
//     // document.getElementById('out').textContent = e.target.value;    
// }

// ----------------------------------------------------------------------------------


// -----Other diffrent type of events-----

// Select

var select = document.querySelector('select');

// select.addEventListener('change', typeOfEvent3)
select.addEventListener('input', typeOfEvent3)

function typeOfEvent3(e){
    console.log("Event Type : " + e.type);
    console.log("Value : " + e.target.value);
}

// Form
var form = document.querySelector('form');

form.addEventListener('submit', typeOfEvent4);

function typeOfEvent4(e){
    e.preventDefault();
    console.log("Event Type : " + e.type);
} 
