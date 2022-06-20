// const toggler = document.querySelector('.toggler');
// const body = document.querySelector('body')
// toggler.addEventListener('click', changeMode = (e)=>{
//     body.style.background = 'white';
//     body.style.backgroundImage = 'url(./images/bg-desktop-light.jpg)';
//     body.style.backgroundRepeat = 'no-repeat';
//     toggler.src="./images/icon-moon.svg"
// })

//TO DO
//declare variables -- done
//add event listeners
//load listeners
//event handlers - add todo, remove todo, clear all todo, filter thru todo, mark todos as complete, toggle light and dark modes

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
const body = document.querySelector('body')
// console.log(form,toggler,todo,todoCheck,todoCollection,itemsLeft,status,clearAll, deleteIcon)

// loadEventListeners()

// function loadEventListeners(){
    //event listeners
    form.addEventListener('submit',addTodo);
    // toggler.addEventListener('click', changeTheme);
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
    todoItem.style.justifyContent='space-around';
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

//mark todo
// function markTodo(){
//     if(e.target.parentElement.classList.contains('todo-item')){
//         e.target.parentElement.strike();
//     }
// }







