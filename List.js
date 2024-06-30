var clickedItem = null;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, escreva uma tarefa.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.style.marginRight = "5px";
    li.appendChild(taskSpan);

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = function() {
        document.getElementById('editTaskInput').value = taskSpan.textContent;
        document.getElementById('editModal').style.display = 'grid';
        clickedItem = taskSpan;
    };
    editButton.style.marginRight = "5px";
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

function saveEditedTask() {
    const newTaskText = document.getElementById('editTaskInput').value.trim();
    if (newTaskText !== '') {
        clickedItem.textContent = newTaskText;
        closeEditModal();
    } else {
        alert('Por favor, escreva uma tarefa.');
    }
}