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
            <li class="list-group-item" onclick="eliminarTarea(${index})">
                ${tarea}
            </li>
        `;
        listaTareas.innerHTML += nuevaTareaHtml;
    });
}
