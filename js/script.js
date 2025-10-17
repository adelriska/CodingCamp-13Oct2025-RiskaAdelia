///Database Simulation
let taskDb = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');

    if (validateInput(taskInput.value, taskDate.value)) {
       const newTask = {
        task: taskInput.value,
        date: taskDate.value,
    }

    ///Add to database
    taskDb.push(newTask);

    renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    taskDb.forEach((taskItem, index) => {
        taskList.innerHTML += `<li>${taskItem.task} - ${taskItem.date} </li>`;
    });
}

function deleteAllTasks() {
    taskDb = [];
    renderTasks();
}

/// malah keikut ilang semua bray gimana inih
function sortByDueDate() {
    taskDb =[];
    renderTasks();
}

///everyone has limitation so do i. jadi set priority sama show priority gabisa  

function validateInput(task, date) {
    if (task.trim() === '' || date === '') {
        alert('Please enter both task and due date.');
        return false;
    }
    return true;
}