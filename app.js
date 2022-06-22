//TO DO
//declare variables -- done
//add event listeners --done
//load listeners
//functions - add todo(done), remove todo(done), clear all todo(done), filter thru todo, mark todos as complete, toggle light and dark modes

//declaring variables
const form = document.querySelector('form');
const toggler = document.querySelector('.toggler');
const todo = document.querySelector('#todo');
const todoCheck = document.querySelector('#todo-check');
const todoCollection = document.querySelector('#todo-collection');
const itemsLeft = document.querySelector('.items-left');
const status = document.querySelector('.status');
const clearAll = document.querySelector('.clear');
const cardFooter = document.querySelector('.card-footer');
const body = document.querySelector('body');
const card = document.querySelector('.card')
console.log(form,toggler,todo,todoCheck,todoCollection,itemsLeft,status,clearAll)

// loadEventListeners()

// function loadEventListeners(){
    //event listeners
    form.addEventListener('submit',addTodo);
    toggler.addEventListener('click', changeTheme);
    // todoCheck.addEventListener('check', markTodo);
    clearAll.addEventListener('click', clearTodos);
    body.addEventListener('click',deleteTodo);
    // console.log('events loaded')
// }


//add todo 
function addTodo(e){
    //create div element
    const todoItem = document.createElement('div');
    //add classname
    todoItem.className = 'todo-item';
    // console.log(todoItem);
    //create checkbox and user todo value
    todoItem.innerHTML = `<input type="checkbox" name="" id="">
    <p class="todo">${todo.value}</p>
    <img src='./images/icon-cross.svg' alt='delete todo' class='delete-icon'>
  </div>`;

    todoCollection.append(todoItem);
    todoCollection.style.display='block';

    cardFooter.style.display='flex';
    todo.value = '';

    e.preventDefault();
}

//clear all todos
function clearTodos(){
    todoCollection.remove();
    console.log('deleted');
}

//clear individual todo
function deleteTodo(e){
    // console.log(e.target)
    // console.log(e.target.parentElement)
    // console.log(e.target.parentElement.parentElement)
    if(e.target.classList.contains('delete-icon')){
        e.target.parentElement.remove();
    }

}

function changeTheme(){
    // console.log('theme change')
    
    toggleLight();
    // toggleDark();
}
function toggleDark(){
//    if (toggler.src="./images/icon-sun.svg"){
        body.style.background = 'var(--very-dark-blue)';
        body.style.backgroundImage = 'url(./images/bg-desktop-dark.jpg)';
        body.style.backgroundRepeat = 'no-repeat';
        toggler.src="./images/icon-sun.svg";
        card.style.backgroundColor='var(--very-dark-desaturated-blue)';
        // todoCollection.style.backgroundColor='hsl(233, 11%, 84%)';
        // todoCollection.color='var(--very-dark-grayish-blue)';
        // todoItem.style.color='var(--very-dark-grayish-blue) !important';
        document.querySelector('.toggler').addEventListener('click',toggleLight)
//  }
}

//create function to toggle dark and light modes
function toggleLight(){
    // toggler.src="./images/icon-sun.svg";
    body.style.background = 'hsl(236, 33%, 92%)';
    body.style.backgroundImage = 'url(./images/bg-desktop-light.jpg)';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.color = 'var(--very-dark-grayish-blue)';
    toggler.src="./images/icon-moon.svg";
    card.style.backgroundColor='hsl(233, 11%, 84%)';
    todoCollection.style.backgroundColor='hsl(233, 11%, 84%)';
    // todoCollection.color='var(--very-dark-grayish-blue)';
    // todoItem.style.color='var(--very-dark-grayish-blue) !important';
    document.querySelector('.toggler').addEventListener('click',toggleDark)
}






