// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskElement(taskText) {
    const li = document.createElement('li');

    // Create a container for the task text
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.textContent = taskText;
    li.appendChild(taskContainer);

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

    // Add description button
    const descriptionBtn = document.createElement('button');
    descriptionBtn.textContent = 'Add Description';
    descriptionBtn.classList.add('description-button');
    descriptionBtn.addEventListener('click', () => {
        descriptionInput.style.display = 'block';
        saveDescriptionBtn.style.display = 'inline-block';
        descriptionBtn.style.display = 'none';
    });

    // Add description input (initially hidden)
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.placeholder = 'Enter description';
    descriptionInput.classList.add('description-input');
    descriptionInput.style.display = 'none';

    // Save description button (initially hidden)
    const saveDescriptionBtn = document.createElement('button');
    saveDescriptionBtn.textContent = 'Save Description';
    saveDescriptionBtn.classList.add('save-description-button');
    saveDescriptionBtn.style.display = 'none';
    saveDescriptionBtn.addEventListener('click', () => {
        const descriptionText = descriptionInput.value.trim();
        if (descriptionText !== '') {
            const description = document.createElement('p');
            description.textContent = descriptionText;
            description.classList.add('task-description');
            taskContainer.appendChild(description);
            descriptionInput.style.display = 'none';
            saveDescriptionBtn.style.display = 'none';
        }
    });

    // Append buttons and input to task item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    li.appendChild(descriptionBtn);
    li.appendChild(descriptionInput);
    li.appendChild(saveDescriptionBtn);

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
