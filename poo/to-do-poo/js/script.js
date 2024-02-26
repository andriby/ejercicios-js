var id = 0;
let tasks = [];
let error = document.getElementById("error");
let taskList = document.getElementById("tareas");
let buttonAdd = document.getElementById("buttonAdd")
let buttonUpdate = document.getElementById("buttonUpdate")
buttonUpdate.classList.add('hidden')
var index = 0

class Task {
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }

    updateTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            let nuevaTareaHtml = `
            <li class="list-group-item">
                <label class="form-check-label"><h3 class="text-2xl">${task.title}:</h3><br> ${task.description}</label>
                <button onclick="deleteTask(${index})" class="btn btn-warning float-right">Eliminar Tarea</button>
                <button onclick="update(${index})" class="btn btn-secondary float-right mr-4">Actualizar Tarea</button>
            </li            `;
            taskList.innerHTML += nuevaTareaHtml;
        });
    }
}

function deleteTask(i){
    tasks.splice(i, 1);
    let task = new Task(); 
    task.updateTasks();
}

function updateTask() {
    error.innerHTML = '';
    let title = document.getElementById('taskTitle').value;
    let description = document.getElementById('taskDesc').value;
    if (!title || !description) {
        error.innerHTML = "Por favor, Actualice correctamente la tarea.";
    } else {
        tasks[index].title = document.getElementById('taskTitle').value 
        tasks[index].description = document.getElementById('taskDesc').value 
        document.getElementById('taskTitle').value = ''
        document.getElementById('taskDesc').value = ''
        let task = new Task(); 
        task.updateTasks();
        updateButton(false)
    }
}

function update(i){
    error.innerHTML = '';
    document.getElementById('taskTitle').value = tasks[i].title
    document.getElementById('taskDesc').value = tasks[i].description
    index = i
    updateButton(true)
}

function newTask(){
    error.innerHTML = '';
    let title = document.getElementById('taskTitle').value;
    let description = document.getElementById('taskDesc').value;
    if (!title || !description) {
        error.innerHTML = "Por favor, agregue una tarea.";
    } else {
        let task = new Task(id, title, description);
        id += 1;
        document.getElementById('taskTitle').value = ''
        document.getElementById('taskDesc').value = ''
        tasks.push(task);
        task.updateTasks();
    }
}

function updateButton(valor = false){
    if (valor) {
        content.innerHTML = "ACTUALIZAR TAREA"
        buttonAdd.classList.add('hidden')
        buttonUpdate.classList.remove('hidden')
    } else{
        content.innerHTML = "AGREGAR TAREA"
        buttonUpdate.classList.add('hidden')
        buttonAdd.classList.remove('hidden')
    }
}

document.getElementById("taskDesc").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        newTask();
    }
});