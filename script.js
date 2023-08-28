const addButton = document.querySelector('.addButton');
let inputBox = document.getElementById('toDoBox');
let listContainer = document.querySelector('.list-container');
const darkMood = document.querySelector('.bulb');
let icon = document.querySelector('.bulb');

addButton.addEventListener('click', () => {

    if (inputBox.value === " " || inputBox.value == "") {
        alert('enter your task first')
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        listContainer.classList.add('check');


        let span = document.createElement('span');
        span.innerHTML = "x";
        li.appendChild(span);



    }

    inputBox.value = '';
    saveTask();
    console.log(`total list is ${count}`);

})



listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('check');
        saveTask();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();

    }
})


function saveTask() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function getTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

getTask();




darkMood.addEventListener('click' , ()=>{
    document.querySelector('body').classList.toggle('darkmode');
    if(document.body.classList.contains('darkmode')){
        icon.src ="./images/lightbulb.png";
    }
    else{
        icon.src = "./images/darkbulb.png"
    }
})





