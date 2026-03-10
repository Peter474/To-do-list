// ==============================
// TASKLY — Main Script
// ==============================

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const datePicker = document.getElementById('datePicker');
const UncompletedTasks = document.getElementById('UncompletedTasks');
const completedtasks = document.getElementById('completedtasks');

let tasksData = JSON.parse(localStorage.getItem('tasksData')) || {};

// Set today's date
const today = new Date().toISOString().split('T')[0];
datePicker.value = today;

// Update header date display
function updateHeaderDate() {
    const display = document.getElementById('todayDisplay');
    const d = new Date();
    display.innerHTML = `${d.toLocaleDateString('en-US', { weekday: 'long' })}<br>${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
}
updateHeaderDate();

// Day navigation
document.getElementById('prevDay').addEventListener('click', () => {
    const d = new Date(datePicker.value);
    d.setDate(d.getDate() - 1);
    datePicker.value = d.toISOString().split('T')[0];
    loadTasksForDate(datePicker.value);
});

document.getElementById('nextDay').addEventListener('click', () => {
    const d = new Date(datePicker.value);
    d.setDate(d.getDate() + 1);
    datePicker.value = d.toISOString().split('T')[0];
    loadTasksForDate(datePicker.value);
});

// ---- Load Tasks ----
function loadTasksForDate(date) {
    UncompletedTasks.innerHTML = "";
    completedtasks.innerHTML = "";
    if (!tasksData[date]) tasksData[date] = [];
    tasksData[date].forEach(task => addTaskToDOM(task.text, task.completed, date));
    updateStats(date);
}

// ---- Save Tasks ----
function saveTasks() {
    localStorage.setItem('tasksData', JSON.stringify(tasksData));
}

// ---- Update Stats ----
function updateStats(date) {
    const tasks = tasksData[date] || [];
    const total = tasks.length;
    const done = tasks.filter(t => t.completed).length;
    const pending = total - done;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    document.getElementById('totalCount').textContent = total;
    document.getElementById('pendingCount').textContent = pending;
    document.getElementById('doneCount').textContent = done;
    document.getElementById('pendingBadge').textContent = pending;
    document.getElementById('doneBadge').textContent = done;
    document.getElementById('progressFill').style.width = pct + '%';

    // Empty states
    const emptyPending = document.getElementById('emptyPending');
    const emptyDone = document.getElementById('emptyDone');
    emptyPending.classList.toggle('show', pending === 0);
    emptyDone.classList.toggle('show', done === 0);
}

// ---- Add Task ----
function addTask() {
    const taskText = taskInput.value.trim();
    const selectedDate = datePicker.value;
    if (!selectedDate) return;
    if (taskText !== '') {
        const newTask = { text: taskText, completed: false };
        if (!tasksData[selectedDate]) tasksData[selectedDate] = [];
        tasksData[selectedDate].push(newTask);
        saveTasks();
        addTaskToDOM(taskText, false, selectedDate);
        taskInput.value = '';
        updateStats(selectedDate);
    }
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });
datePicker.addEventListener('change', () => loadTasksForDate(datePicker.value));

// ---- Add Task to DOM ----
function addTaskToDOM(taskText, completed, date) {
    const listItem = document.createElement('li');
    listItem.className = 'task-item' + (completed ? ' completed' : '');

    // Checkbox
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classList.add("styled-checkbox");
    checkBox.checked = completed;

    // Text span
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-span';
    taskSpan.textContent = taskText;

    // Actions
    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'task-btn edit-btn';
    editBtn.innerHTML = '<i class="fas fa-pen"></i>';
    editBtn.title = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-btn delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.title = 'Delete';

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    listItem.appendChild(checkBox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(actions);

    if (completed) {
        completedtasks.appendChild(listItem);
    } else {
        UncompletedTasks.appendChild(listItem);
    }

    // ---- Events ----
    checkBox.addEventListener('change', function () {
        const currentDate = datePicker.value;
        const taskObj = tasksData[currentDate].find(t => t.text === taskSpan.textContent);
        if (taskObj) taskObj.completed = checkBox.checked;
        saveTasks();
        listItem.classList.toggle('completed', checkBox.checked);

        // Animate move
        listItem.style.opacity = '0';
        listItem.style.transform = 'scale(0.95)';
        setTimeout(() => {
            if (checkBox.checked) {
                completedtasks.appendChild(listItem);
            } else {
                UncompletedTasks.appendChild(listItem);
            }
            listItem.style.opacity = '';
            listItem.style.transform = '';
        }, 200);

        updateStats(currentDate);
    });

    deleteBtn.addEventListener('click', function () {
        const currentDate = datePicker.value;
        tasksData[currentDate] = tasksData[currentDate].filter(t => t.text !== taskSpan.textContent);
        saveTasks();
        listItem.style.opacity = '0';
        listItem.style.transform = 'translateX(20px)';
        listItem.style.transition = 'all 0.3s ease';
        setTimeout(() => listItem.remove(), 300);
        updateStats(currentDate);
    });

    editBtn.addEventListener('click', function () {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskSpan.textContent;
        input.className = 'edit-input';
        taskSpan.replaceWith(input);
        input.focus();
        input.select();

        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') input.blur();
            if (e.key === 'Escape') {
                input.value = taskSpan.textContent;
                input.blur();
            }
        });

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
// PWA: Service Worker Registration
// ==============================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.log('SW error:', err));
    });
}

// ==============================
// PWA: Install Prompt
// ==============================
let deferredPrompt;
const installBanner = document.getElementById('installBanner');
const installBtn = document.getElementById('installBtn');
const dismissBanner = document.getElementById('dismissBanner');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Show banner after a short delay
    setTimeout(() => installBanner.classList.add('show'), 2000);
});

installBtn.addEventListener('click', async () => {
    installBanner.classList.remove('show');
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log('Install outcome:', outcome);
        deferredPrompt = null;
    }
});

dismissBanner.addEventListener('click', () => {
    installBanner.classList.remove('show');
});

// Hide banner if already installed
window.addEventListener('appinstalled', () => {
    installBanner.classList.remove('show');
    console.log('App installed!');
});
