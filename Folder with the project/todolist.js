//Declaring variables for:

const userName = document.querySelector('#user-name');
const currentDay = document.querySelector('#current-day');
const inputMain = document.querySelector('.input-main');
const btnAddTask = document.querySelector('.btn-add-input');
const btnDisplayList = document.querySelector('.btn-toggle-for-list');
const removeAllTasks = document.querySelector('.btn-remove-all-tasks');
const taskList = document.querySelector('.container-list ul');
const listItems = taskList.children;


// Creating 2 question for the user and changing in the browser user's information; name and current day
const askForName = prompt('What is your name?');
const askForDay = prompt('What day is today?');
userName.textContent = askForName.toUpperCase();
currentDay.textContent = askForDay.toUpperCase();
    


//I. Adding an eventListener to the btnList to display and hide the containerList
btnDisplayList.addEventListener('click', ()=>{

    if(taskList.style.display === 'none') {
        btnDisplayList.textContent = 'Hide list';
        taskList.style.display = 'block';
        btnDisplayList.style.marginBottom = '-25px';
        removeAllTasks.style.display = 'block';
    } else {
        btnDisplayList.style.marginBottom = '0px'
        btnDisplayList.textContent = 'Show list';
        taskList.style.display = 'none';
        removeAllTasks.style.display = 'none';
    }
});



//II. Adding an eventListener at click add in the list your new task wrote
btnAddTask.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let itemList = document.createElement('li');    
    if( inputMain.value === '') {
        alert('You can not add an empty task!')
    } else {
        itemList.textContent = inputMain.value;
        atachRemoveButton(itemList);
        ul.appendChild(itemList);    
        inputMain.value = '';
    }
    
});


//III. Creating a button-remove for every li to attach 
function atachRemoveButton(itemList) {
    let btnRmvCurrentTask = document.createElement('button');
    btnRmvCurrentTask.className = 'button-remove-current-task';
    btnRmvCurrentTask.textContent = 'REMOVE';
    itemList.appendChild(btnRmvCurrentTask);
};

for ( let i = 0; i < listItems.length; i++) {
    atachRemoveButton(listItems[i]);
};


//IV. Making the button created for every li to delete the current task
taskList.addEventListener('click', (event) => {
    if( event.target.className === 'button-remove-current-task') {
        const btnRmvCurrentTask = event.target;
        const itemList = btnRmvCurrentTask.parentNode;
        itemList.remove();
    }
});



//III. Adding an eventListener for  button removeAllTasks for removing all li
removeAllTasks.addEventListener('click', ()=>{
    if( confirm('Are you sure you want to remove all tasks from list?') ) {
        taskList.remove();
        return;
    } else {
        return;
    }
});


