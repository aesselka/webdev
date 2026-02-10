document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();  
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;

    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    const deleteButton = taskItem.querySelector('button.delete');

    checkbox.addEventListener('change', function() {
        taskItem.classList.toggle('checked');
    });

    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });

    document.getElementById('task-list').appendChild(taskItem);
    taskInput.value = '';  // clear the unput
});
