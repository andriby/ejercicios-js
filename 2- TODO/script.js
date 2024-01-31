let tareas = []
function agregarTarea() {
    let tareaHtml = `
    <li>${document.getElementById("tarea").value}</li>
    `
    tareas.push(tareaHtml)
    document.getElementById("tareas").innerHTML = ""
    for (let i = 0; i < tareas.length; i++) {
        document.getElementById("tareas").innerHTML += tareas[i]
    }
}
