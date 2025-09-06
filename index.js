const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function createTaskElement(taskText) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.classList.add('task-text');
  li.appendChild(span);

  const btnGroup = document.createElement('div');
  btnGroup.classList.add('task-buttons');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.classList.add('complete-button');
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✗';
  deleteBtn.classList.add('delete-button');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  const descriptionBtn = document.createElement('button');
  descriptionBtn.textContent = '+';
  descriptionBtn.classList.add('description-button');
  descriptionBtn.addEventListener('click', () => {
    const desc = prompt('Enter description:');
    if (desc) {
      const p = document.createElement('p');
      p.style.fontSize = '0.8rem';
      p.style.color = '#555';
      p.textContent = desc;
      li.appendChild(p);
    }
  });

  btnGroup.appendChild(completeBtn);
  btnGroup.appendChild(deleteBtn);
  btnGroup.appendChild(descriptionBtn);

  li.appendChild(btnGroup);

  return li;
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
