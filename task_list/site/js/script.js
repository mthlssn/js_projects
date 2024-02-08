const input = document.querySelector('#task');
const divTasks = document.querySelector('#tasks');

let tasks = [];

let editing = false;
let taskEditing;

function addTask() {
    if (input.value != "") {

        if (editing) {
            tasks[taskEditing] = input.value;
            editing = false;
        } else {
            tasks.push(input.value);
        }

        input.value = '';
        showTask();   
    }
}

function showTask() {

    let newTasks = ``;

    tasks.forEach((task, index) => {
        
        newTasks = newTasks + `<div class="task">
            <div class="container_text_task">
                <p class="nome_task"> ${task} </p>
            </div>

            <div class="container_botoes_task">
                <i class="bi bi-pencil botoes" onclick="editTask(${index})"></i>
                <i class="bi bi-x-lg botoes" onclick="deleteTask(${index})"></i>
            </div>
        </div>`
    });

    divTasks.innerHTML = newTasks;
}

function editTask(index){
    editing = true;
    taskEditing = index;

    input.value = tasks[index];
}

function deleteTask(index){
    tasks.splice(index, 1);

    showTask();
}

input.addEventListener(
    'keydown', 
    function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    }
);