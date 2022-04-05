console.log("I'm being printed by the JavaScript file.");

const h1 =document.querySelector("h1");

h1.innerText = "YAY IT'S MONDAY!";
h1.style.color = "red";

// finding element
const div = document.querySelector("#demo-div");

// creating element
const p1 = document.createElement("p");
p1.innerText = "I'm the first paragraph";

const p2 = document.createElement("p");
p2.innerText = "I'm second";

const p3 = document.createElement("p");
p3.innerText = "I'm third";

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

const paragraphs = document.querySelectorAll("p"); // finds all. returns Nodelist

console.log(paragraphs);



// NodeList can be treated like an array
const makeTextBlue = function(){
    for(let i =0; i < paragraphs.length; i++){
        // classList is the css class list for specific a element
        paragraphs[i].classList.add("blue-text");
    }
}

const textChanger = document.querySelector("#change-text-colour")

textChanger.addEventListener("click", makeTextBlue);

const submit = document.querySelector("#submit");

const textSubmitted = document.querySelector("#text-field")
const text = textSubmitted.innerHTML
const app = document.querySelector("#append")

submit.addEventListener("click", event => {
    document.app.appendChild(text)
})