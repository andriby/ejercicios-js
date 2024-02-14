var id = 0
let tasks = []

class Task {
    constructor(id, title, description){
        this.id = id
        this.title = title
        this.description = description
    }
}

function createTask(title, description){
    let task = new Task(id, title, description)
    id += 1
    tasks.push(task)
    return task
}

let task = createTask("task1", "task to do")
console.log(task)

let task2 = createTask("task2", "task to do")
console.log(task2)

console.log(task)
console.log(task2)


tasks.forEach((task, i) => {
    console.log(`Tarea ${i}`)
    for (const prop in task) {
        console.log(task[prop])
    }
});