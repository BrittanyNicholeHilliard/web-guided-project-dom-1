// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// getElementById
const elem = document.getElementById("logoTitle");
//console.log(elem) //=> DOM node

// getElementsByTagName
const elems = document.getElementsByTagName("div");
//console.log(elems) // => DOM node list 

//getElementsByClassName
const classElems = document.getElementsByClassName("menu-item");
//console.log(classElems) // => DOM node list

//querySelector -- returns first element it finds
const funElem= document.querySelector(".card") //==> Targets anything classed as card in css file
const navElem = document.querySelector("#mainNav")

//querySelectorAll -returns node list of all elements that match
const menuElems =document.querySelectorAll("menu-item");

// A- finding across the entire DOM
const header = document.querySelector('header');
const logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card:nth-of-type(1)");
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
const titleFirstCard = firstCard.querySelector("h2");
const subtitleFirstCard = firstCard.querySelector("h3");
const textFirstCard = firstCard.querySelector("p");
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a"); 

// B- Loop over the links and console.log their text content
links.forEach((link) => {
    console.log(link.textContent);
})

// C- Turn the collection of links into a real array
const linksRealArray = Array.from(links);

// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeElem = linksRealArray.find(link => {
    link.textContent === "Home";
});

console.log(homeElem);
// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "BloomTech Dogz";
titleFirstCard.textContent = "Dogz RULE!";

//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
header.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/c/c5/M%C3%A5rten_Eskil_Winge_-_Tor%27s_Fight_with_the_Giants_-_Google_Art_Project.jpg"

//  B- Using .setAttribute to change a few attributes
imageFirstCard.src = "https://static.wikia.nocookie.net/dog/images/7/7e/Americanstaffordterrier.jpeg/revision/latest/top-crop/width/360/height/450?cb=20201129045715"

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
