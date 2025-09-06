// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.classList.add('task-item');

  // Task container
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  taskContainer.textContent = taskText;
  li.appendChild(taskContainer);

  // Action buttons container
  const actions = document.createElement('div');
  actions.classList.add('task-actions');

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.classList.add('complete-button');
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.classList.add('delete-button');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  // Description button
  const descriptionBtn = document.createElement('button');
  descriptionBtn.innerHTML = '<i class="fas fa-edit"></i>';
  descriptionBtn.classList.add('description-button');

  // Description input (hidden)
  const descriptionInput = document.createElement('input');
  descriptionInput.type = 'text';
  descriptionInput.placeholder = 'Enter description';
  descriptionInput.classList.add('description-input');
  descriptionInput.style.display = 'none';

  // Save description button (hidden)
  const saveDescriptionBtn = document.createElement('button');
  saveDescriptionBtn.innerHTML = '<i class="fas fa-save"></i>';
  saveDescriptionBtn.classList.add('save-description-button');
  saveDescriptionBtn.style.display = 'none';

  descriptionBtn.addEventListener('click', () => {
    descriptionInput.style.display = 'block';
    saveDescriptionBtn.style.display = 'inline-block';
    descriptionBtn.style.display = 'none';
  });

  saveDescriptionBtn.addEventListener('click', () => {
    const descriptionText = descriptionInput.value.trim();
    if (descriptionText !== '') {
      const description = document.createElement('p');
      description.textContent = descriptionText;
      description.classList.add('task-description');
      taskContainer.appendChild(description);
      descriptionInput.style.display = 'none';
      saveDescriptionBtn.style.display = 'none';
      descriptionBtn.style.display = 'inline-block';
    }
  });

  // Append buttons
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  actions.appendChild(descriptionBtn);
  actions.appendChild(descriptionInput);
  actions.appendChild(saveDescriptionBtn);

  li.appendChild(actions);

  return li;
}

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

addTaskBtn.addEventListener('click', addTask);
