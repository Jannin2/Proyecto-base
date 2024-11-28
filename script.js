
document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    const addTask = (text) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = text;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✓";
        completeBtn.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    };

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.addEventListener("click", () => {
        const newText = prompt("Edita la tarea:", span.textContent);
        if (newText) {
            span.textContent = newText;
        }
    });

    li.appendChild(editBtn);

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });


});
