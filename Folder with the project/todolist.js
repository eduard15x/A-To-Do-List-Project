//Declaring variables for:

//1.User name
const userName = document.getElementById('userName');
//2.Current day for the tasks
const currentDay = document.getElementById('currentDay');
//3. Input white bar from the main
const inputMain = document.querySelector('.input-main');
//4.Button main for adding task for input value
const btnAddMain = document.querySelector('.btn-main-input');
//5.Button for hiding/showing the list of tasks
const btnList = document.querySelector('.btn-toggle-for-list');
//6.Container with tasks list
const containerList = document.querySelector('.container-list');
//7.Button for removing last task
const removeLast = document.querySelector('.btn-remove-task');
//8.Declaring the userName for prompt questiondd


// // Creating 2 question for the user and changing in the browser user's information; name and current day
const askForName = prompt('What is your name?');
const askForDay = prompt('What day is today?');

userName.textContent = askForName.toUpperCase();
currentDay.textContent = askForDay.toUpperCase();


//I. Adding an event listener to the btnList to display and hide the containerList
btnList.addEventListener('click', ()=>{
    if(containerList.style.display === 'none') {
        btnList.textContent = 'Hide list';
        containerList.style.display = 'block';
    } else {
        btnList.textContent = 'Show list';
        containerList.style.display = 'none';
    }
});


//II. Adding a nev event listener to the btnAddMain to add a task written in the input bar
//first we have to create the ul element with document.createElement(tagname) and add it to the html with Element.append()
const ul = document.createElement('ul');
containerList.prepend(ul);


btnAddMain.addEventListener('click', ()=>{
    const ulList = document.querySelector('ul');
    ulList.insertAdjacentHTML(
        'beforeend',
        `<li class="li-container">
            <div class="li-box-check">
                ${inputMain.value}
                <input type="checkbox" class="myCheckBox">
            </div>
            <button class="button-remove-current-task">REMOVE TASK</button>
        </li>`);
    inputMain.value = '';
});


//III. Adding a new event listener for  button removeLast for removing last li created in ul

removeLast.addEventListener('click', ()=>{
    const lastTask = document.querySelector('li:last-child');
    alert('Last task will be deleted');
    lastTask.remove();
});








//Aici am incercat sa adaug cate un BUTTON-REMOVE pentru fiecare task pe care il adaug in UL, dar nu reusesc.



// //IV. Adding a new event listener for button created upside with the class="button-remove-current-task" to delete a selected task from list

// const btnRmvSelTask = document.querySelector('.button-remove-current-task');
// const listItems = document.querySelector('ul li');
// btnRmvSelTask.addEventListener('click', ()=> {
    
//     for ( let i = 0; i < listItems.length; i++) {
//         listItems.parentNode.removeChild(i);
//     }
// });





// const taskList = document.querySelector('.container-list ul');

// taskList.addEventListener('click', (event)=> {
//     if ( event.target.tagName === "button") {
//         const button = event.target;
//         const li = button.parrentNode;
//         li.remove();
//     }
// })


