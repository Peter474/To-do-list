const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const datePicker = document.getElementById('datePicker');
const UncompletedTasks = document.getElementById('UncompletedTasks');
const completedtasks = document.getElementById('completedtasks');

let tasksData = JSON.parse(localStorage.getItem('tasksData')) || {};
datePicker.value = new Date().toISOString().split('T')[0];

function loadTasksForDate(date) {
  UncompletedTasks.innerHTML = "";
  completedtasks.innerHTML = "";
  if (!tasksData[date]) {
    tasksData[date] = [];
  }
  tasksData[date].forEach(task => {
    addTaskToDOM(task.text, task.completed, date);
  });
}

function saveTasks() {
  localStorage.setItem('tasksData', JSON.stringify(tasksData));
}

function addTask() {
  const taskText = taskInput.value.trim();
  const selectedDate = datePicker.value;
  if (taskText !== '') {
    const newTask = { text: taskText, completed: false };
    tasksData[selectedDate].push(newTask);
    saveTasks();
    addTaskToDOM(taskText, false, selectedDate);
    taskInput.value = '';
  }
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

datePicker.addEventListener('change', function () {
  loadTasksForDate(datePicker.value);
});

function addTaskToDOM(taskText, completed, date) {
  const listItem = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = "checkbox";
  checkBox.classList.add("styled-checkbox");
  checkBox.checked = completed;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  listItem.appendChild(checkBox);
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);
  listItem.appendChild(editBtn);

  if (completed) {
    taskSpan.style.textDecoration = 'line-through';
    completedtasks.appendChild(listItem);
  } else {
    UncompletedTasks.appendChild(listItem);
  }

  checkBox.addEventListener('change', function () {
    const currentDate = datePicker.value;
    const taskArr = tasksData[currentDate];
    const taskObj = taskArr.find(t => t.text === taskSpan.textContent);
    taskObj.completed = checkBox.checked;
    saveTasks();
    if (checkBox.checked) {
      taskSpan.style.textDecoration = 'line-through';
      completedtasks.appendChild(listItem);
    } else {
      taskSpan.style.textDecoration = 'none';
      UncompletedTasks.appendChild(listItem);
    }
  });

  deleteBtn.addEventListener('click', function () {
    const currentDate = datePicker.value;
    tasksData[currentDate] = tasksData[currentDate].filter(
      t => t.text !== taskSpan.textContent
    );
    saveTasks();
    listItem.remove();
  });

  editBtn.addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = taskSpan.textContent;
    taskSpan.replaceWith(input);
    input.focus();
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        input.blur();
      }
    });
    input.addEventListener('blur', function () {
      if (input.value.trim() !== '') {
        const currentDate = datePicker.value;
        const taskArr = tasksData[currentDate];
        const taskObj = taskArr.find(t => t.text === taskText);
        taskObj.text = input.value;
        taskSpan.textContent = input.value;
        saveTasks();
      }
      input.replaceWith(taskSpan);
    });
  });
}

loadTasksForDate(datePicker.value);
