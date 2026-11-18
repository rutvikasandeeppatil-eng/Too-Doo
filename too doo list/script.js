
let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");

// CREATE
function addTask() {
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: taskName,
        completed: false
    });

    taskInput.value = "";

    displayTasks();
}

// READ
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.name;
        span.className = task.completed
            ? "task-text completed"
            : "task-text";

        span.onclick = () => toggleTask(index);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        editButton.onclick = () => editTask(index);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

// UPDATE
function editTask(index) {
    const newName = prompt(
        "Enter updated task:",
        tasks[index].name
    );

    if (newName !== null && newName.trim() !== "") {
        tasks[index].name = newName.trim();
        displayTasks();
    }
}

// UPDATE COMPLETION
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// DELETE
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// BUTTON EVENT
addButton.addEventListener("click", addTask);

// ENTER KEY
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
