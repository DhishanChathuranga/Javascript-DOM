// --------------------------------
// ------Traversing the dom -------
// --------------------------------

// var itemList = document.querySelector('#li-items');

// // -----Parent Node-----
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#c7d159';
// // console.log(itemList.parentNode.parentNode);

// // -----Parent Element-----
// // most of the time similar to parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#7baad6';
// console.log(itemList.parentElement.parentElement);

// // ------------------------------------------------------------------------

// // ------Child Nodes------
// console.log(itemList.childNodes);  //text - line bracks

// // ------Children------
// console.log(itemList.children);
// console.log(itemList.children[2].textContent);
// itemList.children[2].style.backgroundColor = "Red";

// // -------------------------------------------------

// // ---First Child---
// console.log(itemList.firstChild);  // Work like Child node 

// // ---First Element Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = '#e4ffa8';

// // ---Last Child----
// console.log(itemList.lastChild);  // Work like Child node

// // ---Last Element Child---
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = '#e4ffa8';

// // --------------------------------------------------------------------------------------


// // ------Next Sibling-------   (Like Brother)
// // Work like Child node 
// console.log(itemList.nextSibling);

// // ------Next Element Sibling-------
// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.style.backgroundColor = 'yellow';

// // ------Previous Sibling------
// // Work like Child node 
// console.log(itemList.previousSibling);

// // ------Previous Element Sibling-------
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'yellow';

// ------------------------------------------------------------------------------


// ------Create an Element------

// ---Create an input---
var input = document.createElement('input');

// Add a Class
input.className = "test";

// Add an Id 
input.id = "last";

// Add an attribute
input.setAttribute('type', 'text');
console.log(input); 

// ---Create div---
var newDiv = document.createElement('div');

// Crete text Node 
var newText = document.createTextNode('How are you!')

// Add text to div
newDiv.appendChild(newText);
console.log(newDiv); 

// ----Insert created element to the document----
var form = document.querySelector('.frm form');
var button = document.querySelector('.frm form button');

input.style.backgroundColor = 'red';
input.style.border = 'yellow 2px solid';

form.insertBefore(input, button);