let userName = document.getElementById("name");
let user1 = document.getElementById("user1");
let main = document.getElementById("mainContainer");
var greet = document.getElementById("greet");



userName.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){ 
        user1.style.display = "none";
        main.style.display = "flex";
        var today = new Date();
        if(today.getHours()>=0 && today.getHours()<=11) {
            greet.textContent = "Good Morning, "+ userName.value + "!";
        }else if(today.getHours()>=12 && today.getHours()<=17) {
            greet.textContent = "Good Afternoon, "+ userName.value + "!";
        }else if(today.getHours()>=18 && today.getHours()<=23){
            greet.textContent = "Good Evening, "+ userName.value + "!";
        }
    }
})

let i = setInterval(myFunc, 1000);
function myFunc(){
    let userName = document.getElementById("name");
    const d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

let focusP = document.getElementById("focusP");
const form = document.getElementById("focusContainer");
    form.addEventListener("submit",event => {
        event.preventDefault();
        const input = document.getElementById("focus").value;
        focusP.innerHTML = input;
        form.style.display = "none";
    });

    focusP.addEventListener("dblclick", function(){
        focusP.innerText = "";
        document.getElementById("focus").value = "";
        form.style.display = "block";
        form.focus();
    });

    

var quoteArray = [
    "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful. – Roy Mustang","Giving up is what kills people. – Hellsing", "No matter how deep the night, it always turns to day, eventually. – One Piece", "I'm gonna be the King of Pirates! - Luffy"
];
let quoteBtn = document.getElementById("addQuote");
let quote = document.getElementById("quote");
let inputQuote = document.getElementById("inputQuote");
var j = Math.floor(quoteArray.length*Math.random())
quote.innerText = quoteArray[j];

quote.addEventListener('click',function(){
    var j = Math.floor(quoteArray.length*Math.random())
    quote.innerText = quoteArray[j];
});

quoteBtn.addEventListener('click', function(){
   inputQuote.style.display = "block";
   quoteBtn.style.display = "none";
   inputQuote.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        quoteArray.push(inputQuote.value);
        inputQuote.style.display = "none";
        quoteBtn.style.display = "block";
    }
   });
});


let ToDoWidget = document.getElementById("ToDoWidget");
let toDoList = document.getElementById("toDoList");
let toDoModal = document.getElementById("toDoModal");


ToDoWidget.addEventListener('click',function(){
    toDoModal.style.display = "flex";
    toDoList.style.display = "block";
});

document.querySelector('.modalClose').addEventListener('click',function(){
    toDoModal.style.display = "none";
});

window.addEventListener('click', function(event){
    if(event.target === toDoModal){
        toDoModal.style.display = "none"; 
    }
});


let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    inputField.focus();
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
});

inputField.addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        var paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
        inputField.focus();
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function(){
            toDoContainer.removeChild(paragraph);
    });
    }
});

var bgArray = [
    "./img/nature1.jpg", "./img/nature2.jpg", "./img/nature3.jpg","./img/nature4.jpg"
];

let bgBtn = document.getElementById("backgroundWidget");
var k = Math.floor(bgArray.length*Math.random())
document.body.style.backgroundImage = "url(" + bgArray[k] + ")";

bgBtn.addEventListener('click',function(){
    var k = Math.floor(bgArray.length*Math.random())
    document.body.style.backgroundImage = "url(" + bgArray[k] + ")";
});