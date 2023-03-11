function clearMainDisplay() {
    const mainDisplay = document.querySelector('.main-display');
    mainDisplay.removeChild(mainDisplay.firstElementChild);
}

function createDiv() {
    const tasksDiv = document.createElement('div');
    tasksDiv.classList.add('tasks-div');
}

function showTasks() {
    let projects = document.querySelectorAll('.project p');
    projects.forEach((project) => {
        project.addEventListener('click', () => {
            clearMainDisplay();
        });
    });
}

export { showTasks };
