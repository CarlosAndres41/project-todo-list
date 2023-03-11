function clearMainDisplay() {
    const mainDisplay = document.querySelector('.main-display');
    mainDisplay.removeChild(mainDisplay.firstElementChild);
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

        const taskDescription = document.createElement('div');
        taskDescription.classList.add('.task-description');

        const taskDate = document.createElement('div');
        taskDate.classList.add('.task-date');

        const taskIcons = document.createElement('div');
        taskIcons.classList.add('.task-icons');

        individualTask.appendChild(taskDescription);
        individualTask.appendChild(taskDate);
        individualTask.appendChild(taskIcons);
    });

    tasksDiv.appendChild(project);
    display.appendChild(tasksDiv);
}

function showTasks(user) {
    let projects = document.querySelectorAll('.project p');
    projects.forEach((project, index) => {
        console.log(index);
        project.addEventListener('click', () => {
            clearMainDisplay();
            let projectName = project.classList[0].split('-')[0];
            let tasks = user.projects[index].tasks;
            console.log(tasks);
            createDiv(projectName, tasks);
        });
    });
}

export { showTasks };
