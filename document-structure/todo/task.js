const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

taskInput.addEventListener('keypress', sendMsg);
addButton.addEventListener('click', sendMsg);
addButton.addEventListener('keypress', function(e) {e.preventDefault();});

function sendMsg(e) {
    const tb = taskInput;
    if ((this === taskInput) && (e.keyCode != 13)) {
        return;
    }
    if (tb.value != '') {
        taskList.innerHTML += `
        <div class="task">
            <div class="task__title">
            ` +
            tb.value
            + `
            </div>
            <a href="#" class="task__remove" onclick="removeTask(this.closest('div.task'))">&times;</a>
        </div>        
        `;       
        tb.value = '';
        preventDefault();
        return false;
    }
}

function removeTask(task) {
    task.outerHTML = '';
}