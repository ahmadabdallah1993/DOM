'use strict';

console.log(document);



// i want to reach the h1 element 

//console.log(document.h1);   // // it will give me undefined



//console.log(document.getElementsByTagName('h1'));





let h1E1 = document.getElementsByTagName('h1');   //in here it will give me all the element h1 we have and it will put it inside an array
console.log(h1E1[0]);   //because it save it like an array, in here it will gives me the first element (everything related to h1)   the output will be DOM


// if it was empty and i want to add a content to it from the javascript



// add content to the element


h1E1[0].textContent = "Hello World"; // im specifining the element in the index zero give it the text content hello World


// ----------------------------------------------


//once im writing anything on the javascript, it will override it and take it from the javascript over the html 




//-----------------------------------------
//-----------------------------------------

// it will return for me an array

let pE1 = document.getElementsByTagName("p");

console.log(pE1);

pE1[1].textContent = "this is a paragraph";


//------------------------------------------


// it will return for me one element

const barE1 = document.getElementById('par');

console.log(barE1);


barE1.textContent = "this is a paragraph with an ID";



//------------------------------------------


// now i want to add a class at the html

const divE1 = document.getElementsByClassName('container');

console.log(divE1);  // it will show me that it is an array


// ahmad 
divE1[0].textContent = "this is a div";




//------------------------------------------
//------------------------------------------
//------------------------------------------



// now if i want to add style to it


//Style

pE1[1].style.color="red";

pE1[1].style.backgroundColor="black";

h1E1[0].style.backgroundColor="brown";




//------------------------------------------
//-----bring the style from the css file-----




let p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
    p[i].classList.add("design");
    
}
//or
pE1[0].classList.add('design');
//or
pE1[1].className = "design";
//or
//pE1[2].     think about this one



//----------------------------------------


//what if i want to add new element which it is not excist in the html file\
// for example if i want to add a new paragraph



//creating element:  from scratch from the js in the html


// // 3 steps to do it:



//1. creating the element from the js :

const h2E1 = document.createElement('h2');

console.log(h2E1);        //i will not see it





//2. add text content or attribute:

h2E1.textContent = "this is h2 element";

console.log(h2E1);      //i will not see it






//3. appending it:   //specify the location (where i want to put it)

// if i want to put it inside div  // // so h2 will be the child for the div parent
// if i want to put it inside the first div element
divE1[0].appendChild(h2E1)
console.log(h2E1);



// so it will be like this:
// <div>
//     <h2>this is he element</h2>
// </div>


//----------------------------------------------
//----------------------------------------------


const div = document.getElementById('div');


div.appendChild(h2E1);






//----------------------------------------------
//----------------------------------------------




// the way of adding <img> :


//1. create element
const imgE1 = document.createElement("img");

//2. add text content or attribute
imgE1.src = "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg";
imgE1.alt = "coffe cup";

//3. appending it    // // if i want to put it inside the div
div.appendChild(imgE1);













































