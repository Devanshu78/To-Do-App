const addButton = document.querySelector('.addButton');
let inputBox = document.getElementById('toDoBox');
let listContainer = document.querySelector('.list-container');
let count = 0; 

addButton.addEventListener('click', () => {

    if(inputBox.value === " " || inputBox.value == ""){
        alert('enter your task first')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        listContainer.classList.add('check');


        let span = document.createElement('span');
        span.innerHTML = "x";
        li.appendChild(span);


        // let priority = document.createElement('p');
        // priority.innerHTML = "↑"
        // li.appendChild(priority);
        count++;

    }

    inputBox.value = ''; 
    saveTask();  
    console.log(`total list is ${count}`);

})



listContainer.addEventListener('click' , (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('check');
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){ 
        e.target.parentElement.remove();
        saveTask();
        if(count === 0){
            count = 0;
        }
        else{
            count--;
        }
    }
    else if(e.target.tagName === "P"){
        move();
    }

    else if(e.target.tagName != "LI"){
        count = 0;
    }

})


function saveTask(){
    localStorage.setItem('data' , listContainer.innerHTML);
}

function getTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

getTask();

function move(){

}








