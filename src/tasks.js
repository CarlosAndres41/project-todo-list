function clearMainDisplay() {
    const mainDisplay = document.querySelector('.main-display');
    while (mainDisplay.firstChild) {
        mainDisplay.removeChild(mainDisplay.firstChild);
    }
}

function createDiv(projectName, tasks) {
    const display = document.querySelector('.main-display');

    const tasksDiv = document.createElement('div');
    tasksDiv.classList.add('tasks-div');

    const project = document.createElement('h1');
    project.classList.add('project-title');
    project.textContent = projectName;

    tasks.forEach((task) => {
        const individualTask = document.createElement('div');
        individualTask.classList.add('.individual-task');
        if (task.priority === 'high') {
            individualTask.classList.add('.priority-task');
        }

        const taskDescription = document.createElement('div');
        taskDescription.classList.add('.task-description');

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        const description = document.createElement('p');
        description.textContent = task.description;
        taskDescription.appendChild(checkBox);
        taskDescription.appendChild(description);

        const taskDate = document.createElement('div');
        taskDate.classList.add('.task-date');

        const date = document.createElement('p');
        date.textContent = task.date;
        taskDate.appendChild(date);

        const taskIcons = document.createElement('div');
        taskIcons.classList.add('.task-icons');

        let span1 = document.createElement('span');
        span1.classList.add('high-priority');
        let logo1 = document.createElement('i');
        logo1.classList.add('fa-solid');
        logo1.classList.add('fa-exclamation');
        span1.appendChild(logo1);
        if (task.priority === 'high') {
            taskIcons.appendChild(span1);
        }
        let span2 = document.createElement('span');
        span2.classList.add('delete-task');
        let logo2 = document.createElement('i');
        logo2.classList.add('fa-regular');
        logo2.classList.add('fa-trash-can');
        span2.appendChild(logo2);
        taskIcons.appendChild(span2);

        const taskHour = document.createElement('p');
        taskHour.classList.add('.task-hour');
        taskHour.textContent = task.hour;

        individualTask.appendChild(taskDescription);
        individualTask.appendChild(taskDate);
        individualTask.appendChild(taskIcons);
        individualTask.appendChild(taskHour);

        tasksDiv.appendChild(individualTask);
    });

    display.appendChild(project);
    display.appendChild(tasksDiv);
}

function showTasks(user) {
    let projects = document.querySelectorAll('.project p');
    projects.forEach((project, index) => {
        project.addEventListener('click', () => {
            clearMainDisplay();
            let projectName = project.classList[0].split('-')[0];
            let tasks = user.projects[index].tasks;
            createDiv(projectName, tasks);
        });
    });
}

export { showTasks };
