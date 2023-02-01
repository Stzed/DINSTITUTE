// Recreate the todo list above:

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.


const tasks = [];
const form = document.getElementById("form");
const ul = document.querySelector('.listTasks')

form.addEventListener("submit" , hundleSubmit);


function hundleSubmit(e){
    e.preventDefault();
    const formData = new FormData(form);
    const task = formData.get("task");
    if (task === "") return; 
    tasks.push(task);
    renderTasks(tasks)
    form.reset();
}



function renderTasks(tasks){
    ul.innerHTML = "";

    for(const task of tasks) {
        const li = generateLi(task)
        ul.append(li);
    }
}

function generateLi(task){
    const li = document.createElement("li");
    const xMark = document.createElement("i");
    xMark.classList.add("fa-solid", "fa-x");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const span = document.createElement("label") 
    span.innerText = task   
    li.append(xMark , checkbox, span);
    return li;
};

