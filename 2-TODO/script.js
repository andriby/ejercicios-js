let tareas = [];

function agregarTarea() {
    let nuevaTarea = document.getElementById("tarea").value;
    if (nuevaTarea) {
        tareas.push(nuevaTarea);
        actualizarListaTareas();
    }
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarListaTareas();
}

function actualizarListaTareas() {
    let listaTareas = document.getElementById("tareas");
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, index) => {
        let nuevaTareaHtml = `
            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" onclick="eliminarTarea(${index})">
            <label class="form-check-label">${tarea}</label>
            </li>

        `;
        listaTareas.innerHTML += nuevaTareaHtml;
    });
}