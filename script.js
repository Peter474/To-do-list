const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const datePicker = document.getElementById('datePicker');
const UncompletedTasks = document.getElementById('UncompletedTasks');
const completedtasks = document.getElementById('completedtasks');

let tasksData = JSON.parse(localStorage.getItem('tasksData')) || {};

datePicker.value = new Date().toISOString().split('T')[0];

// ---- Load Tasks ----
function loadTasksForDate(date) {
    UncompletedTasks.innerHTML = "";
    completedtasks.innerHTML = "";
    if (!tasksData[date]) tasksData[date] = [];
    tasksData[date].forEach(task => addTaskToDOM(task.text, task.completed, date));
    updateEmpty();
}

function saveTasks() {
    localStorage.setItem('tasksData', JSON.stringify(tasksData));
}

function updateEmpty() {
    const pendingEmpty = document.getElementById('emptyUncompleted');
    const doneEmpty = document.getElementById('emptyCompleted');
    pendingEmpty.style.display = UncompletedTasks.children.length === 0 ? 'block' : 'none';
    doneEmpty.style.display = completedtasks.children.length === 0 ? 'block' : 'none';
}

// ---- Add Task ----
function addTask() {
    const taskText = taskInput.value.trim();
    const selectedDate = datePicker.value;
    if (!selectedDate) { alert("Please select a date."); return; }
    if (taskText !== '') {
        if (!tasksData[selectedDate]) tasksData[selectedDate] = [];
        tasksData[selectedDate].push({ text: taskText, completed: false });
        saveTasks();
        addTaskToDOM(taskText, false, selectedDate);
        taskInput.value = '';
        updateEmpty();
    }
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });
datePicker.addEventListener('change', () => loadTasksForDate(datePicker.value));

// ---- Add Task to DOM ----
function addTaskToDOM(taskText, completed, date) {
    const listItem = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classList.add("styled-checkbox");
    checkBox.checked = completed;

    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-span';
    taskSpan.textContent = taskText;
    if (completed) taskSpan.style.textDecoration = 'line-through';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-btn delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    const editBtn = document.createElement('button');
    editBtn.className = 'task-btn edit-btn';
    editBtn.innerHTML = '<i class="fas fa-pen"></i>';

    listItem.appendChild(checkBox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    if (completed) {
        completedtasks.appendChild(listItem);
    } else {
        UncompletedTasks.appendChild(listItem);
    }

    // Checkbox
    checkBox.addEventListener('change', function () {
        const currentDate = datePicker.value;
        const taskObj = tasksData[currentDate].find(t => t.text === taskSpan.textContent);
        if (taskObj) taskObj.completed = checkBox.checked;
        saveTasks();
        taskSpan.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
        if (checkBox.checked) {
            completedtasks.appendChild(listItem);
        } else {
            UncompletedTasks.appendChild(listItem);
        }
        updateEmpty();
    });

    // Delete
    deleteBtn.addEventListener('click', function () {
        const currentDate = datePicker.value;
        tasksData[currentDate] = tasksData[currentDate].filter(t => t.text !== taskSpan.textContent);
        saveTasks();
        listItem.remove();
        updateEmpty();
    });

    // Edit
    editBtn.addEventListener('click', function () {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskSpan.textContent;
        input.className = 'edit-input';
        taskSpan.replaceWith(input);
        input.focus();
        input.select();

        input.addEventListener('keydown', e => { if (e.key === 'Enter') input.blur(); });

        input.addEventListener('blur', function () {
            if (input.value.trim() !== '') {
                const currentDate = datePicker.value;
                const taskObj = tasksData[currentDate].find(t => t.text === taskSpan.textContent);
                if (taskObj) taskObj.text = input.value.trim();
                taskSpan.textContent = input.value.trim();
                saveTasks();
            }
            input.replaceWith(taskSpan);
        });
    });
}

// ---- Initial Load ----
loadTasksForDate(datePicker.value);

// ==============================
// PWA: Service Worker
// ==============================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.warn('SW failed:', err));
    });
}

// ==============================
// PWA: Install Prompt
// ==============================
let deferredPrompt = null;
const installBar = document.getElementById('installBar');
const installBtn = document.getElementById('installBtn');
const dismissBtn = document.getElementById('dismissBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBar.classList.add('show');
});

installBtn.addEventListener('click', async () => {
    installBar.classList.remove('show');
    if (deferredPrompt) {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
    }
});

dismissBtn.addEventListener('click', () => {
    installBar.classList.remove('show');
});

window.addEventListener('appinstalled', () => {
    installBar.classList.remove('show');
    deferredPrompt = null;
});
