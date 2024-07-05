// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-button');
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-button');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Append buttons to task item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
}

// Function to add a new task
function addTask() {
    // Get the task input value
    const taskText = taskInput.value.trim();

    // If input is not empty, create a new task item and add to the task list
    if (taskText !== '') {
        const newTask = createTaskElement(taskText);
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
}

// Event listener for the add task button click
addTaskBtn.addEventListener('click', addTask);
