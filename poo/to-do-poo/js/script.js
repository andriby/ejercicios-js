var id = 0
let tasks = []
let error = document.getElementById("error")

class Task {
    constructor(id, title, description){
        this.id = id
        this.title = title
        this.description = description
    }

    updateTasks(task, title, description){
        task.title = title
        task.description = description
    }
}

function newTask(){
    error.innerHTML = '' 
    let title = document.getElementById('taskTitle')
    let description = document.getElementById('taskDesc')
    if (!title.value && !description.value) {
        error.innerHTML = "Por Favor agregue una tarea!"
        return
    }else {
        let task = new Task(id, title.value, description.value)
        id += 1
        tasks.push(task)
        title.value = ''
        description.value = ''
        updateTasks();
        return task
    }
}

function updateTasks() {
    let taskList = document.getElementById("tareas");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let newTask = `
        <li class="list-group-item">
            <label class="form-check-label">${task.title}:<br> ${task.description}</label>
            <button onclick="deleteTask(${index})" class="btn btn-warning float-right">Eliminar Tarea</button>
            <button class="btn btn-secondary float-right mr-4">Actualizar Tarea</button>
        </li>

        `;
        taskList.innerHTML += newTask;
    });
}

function deleteTask(i){
    tasks.splice(i, 1) 
    updateTasks();
}
