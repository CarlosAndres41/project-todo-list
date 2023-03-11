function clearMainDisplay() {
    const mainDisplay = document.querySelector('.main-display');
    mainDisplay.removeChild(mainDisplay.firstElementChild);
}

function createDiv(projectName) {
    const display = document.querySelector('.main-display');

    const tasksDiv = document.createElement('div');
    tasksDiv.classList.add('tasks-div');

    const project = document.createElement('h1');
    project.classList.add('project-title');
    project.textContent = projectName;

    const individualTask = document.createElement('div');
    individualTask.classList.add('.individual-task');

    tasksDiv.appendChild(project);
    display.appendChild(tasksDiv);
}

function showTasks() {
    let projects = document.querySelectorAll('.project p');
    projects.forEach((project) => {
        project.addEventListener('click', () => {
            clearMainDisplay();
            let projectName = project.classList[0].split('-')[0];
            createDiv(projectName);
        });
    });
}

export { showTasks };
