// --------------------------------------------
// ------- Select & Update DOM Element --------
// --------------------------------------------

// // --- Examine the document object ----
// console.dir(document);

// // --  Get Properties --
// console.log(document.URL);
// console.log(document.charset);
// console.log(document.lastModified);
// console.log(document.title);
// console.log(document.doctype);

// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.all[11]);

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// // -- Change Value --
// document.title ='Document Object Model';
// console.log(document.title)

// // Not a best way
// document.all[11].textContent = 'Shopping Item List';
// console.log(document.all[11]);

// -----------------------------------------------------------------

// // ---- Select Element Using ID --------
// console.log(document.getElementById('frmt'));
// var fromTitle = document.getElementById('frmt');
// console.log(fromTitle);

// // --- textContent, innerText & innerHTML ----
// fromTitle.textContent = "Shopping Item";
// fromTitle.innerText = "Add Shoping Item";    //Shaport style
// fromTitle.innerHTML = "<i> Hello </i> Add items";

/*
    1.The innerText property returns just the text,with out spacing and inner element tags. And it care about styling.
    2.The innerHTML property returns the text including all spacing and inner element tags.
    3.The textContent property returns the text with spacing, but without inner element tags. 
*/
// console.log(fromTitle.textContent);
// console.log(fromTitle.innerText);
// console.log(fromTitle.innerHTML);

// // --Styling --
// var navigation = document.getElementById('navbar');
// navigation.style.backgroundColor = '#320230';
// navigation.style.color = '#ffffff';
// navigation.style.border = '#00ff15 2px solid';

// ----------------------------------------------------------------------

// ---- Select Element Using Class Name ----

// var items = document.getElementsByClassName('items');
// console.log(items);
// console.log(items[0]);
// items[2].textContent = 'Hand Bag';
// console.log(items[2]);

// items[2].style.fontFamily = 'self';
// items[2].style.backgroundColor = '#00ff15';

// // --Change the Back Ground Color of all the List Items--
// for(var i of items){
//     i.style.backgroundColor = '#ffffbf';
// }

// ------------------------------------------------------------------------------------

// ---- Select Element Using Tag Name ----
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = 'Book';

// // Styling
// li[1].style.color = "#00ff15";

// // Change the background color of all the list item
// for(var i of li){
//     i.style.backgroundColor = "#bfbfff";
// }

// -----------------------------------------------------------------------------

// ---- Select Element Using Query Selector ----
/*  
    The querySelector() method returns the first element that matches a specified css selector(s) in the document.
*/
// --ID--
var hd = document.querySelector('#navbar');
hd.style.border = 'solid 3px #000';
// --Tag--
var input = document.querySelector('input');
input.style.backgroundColor = "yellow";
input.value = "Paint Bucket";
// --Class--
var item = document.querySelector('.items');
item.style.backgroundColor = "yellow";
// --mix--
var it = document.querySelector('div .frm #frmt')
it.style.color = "yellow";

// -----------------------------------------------------------------------------


// ---- Select Element Using Query Selector All ----
/*  
    The querySelectorAll() method returens all element in the document that matches a specified CSS selector(s), as a static Nodelist object.
*/

// --ID-- 
var hd = document.querySelectorAll('#hdt');
console.log(hd);

// --Tag-- 
var dv = document.querySelectorAll('div');
console.log(dv);

// --Class-- 
var cl = document.querySelectorAll('.items');
console.log(cl);

//--mix--
var mx = document.querySelectorAll('div .list li');
console.log(mx);

// --pseudo class--
// Grab all the add list item
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
console.log(odd);
for(var i of odd){
    i.style.backgroundColor = '#ffff73';
}
for(var i of even){
    i.style.backgroundColor = '#bdbd6d';
}

