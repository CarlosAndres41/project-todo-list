import {
    projectEditPopUp,
    toggleEditProject,
    deleteProject,
    toggleDeleteProject,
    addTaskPopUp,
    toggleAddTask,
} from './popups';
import { editProjectName, confirmDeleteProject, taskFactory } from './user';
import { format } from 'date-fns';

function addProject(projectName) {
    let container = document.querySelector('.projects-container');
    let prDiv = document.createElement('div');
    prDiv.classList.add('project');

    let name = document.createElement('p');
    name.classList.add(`${projectName}-text`);
    name.textContent = projectName;

    let buttons = document.createElement('div');
    let span1 = document.createElement('span');
    span1.classList.add('edit-project');
    let logo1 = document.createElement('i');
    logo1.classList.add('fa-solid');
    logo1.classList.add('fa-pen');
    logo1.classList.add('fa-2xs');
    logo1.classList.add('edit-project-btn');
    logo1.setAttribute('value', projectName);
    span1.appendChild(logo1);
    let span2 = document.createElement('span');
    span2.classList.add('delete-project');
    let logo2 = document.createElement('i');
    logo2.classList.add('fa-regular');
    logo2.classList.add('fa-trash-can');
    logo2.classList.add('fa-xs');
    logo2.classList.add('delete-project-btn');
    logo2.setAttribute('value', projectName);
    span2.appendChild(logo2);
    let span3 = document.createElement('span');
    span3.classList.add('add-new-task');
    let logo3 = document.createElement('i');
    logo3.classList.add('fa-solid');
    logo3.classList.add('fa-plus');
    logo3.classList.add('add-new-task-btn');
    logo3.setAttribute('value', projectName);
    span3.appendChild(logo3);

    buttons.appendChild(span3);
    buttons.appendChild(span1);
    buttons.appendChild(span2);
    prDiv.appendChild(name);
    prDiv.appendChild(buttons);
    buttons.appendChild(projectEditPopUp(projectName));
    buttons.appendChild(deleteProject(projectName));
    buttons.appendChild(addTaskPopUp(projectName));
    container.appendChild(prDiv);

    let taskDiv = document.createElement('div');
    taskDiv.classList.add(`${projectName}-tasks`);
    container.appendChild(taskDiv);
}

function addTask(projectName, task) {
    let tasksConteiner = document.querySelector(`.${projectName}-tasks`);
    let taskElement = document.createElement('p');
    taskElement.classList.add('task');
    taskElement.textContent = task.description;
    tasksConteiner.appendChild(taskElement);
}

function removeAllProjects() {
    let container = document.querySelector('.projects-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function renderProjects(user) {
    // Create Projects
    user.projects.forEach((project) => {
        addProject(project.projectName);
        let tasks = project.tasks;
        tasks.forEach((task) => {
            addTask(project.projectName, task);
        });
    });

    // Edit Project name
    // all edit buttons
    let editProjectBtns = document.querySelectorAll('.edit-project-btn');
    editProjectBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            toggleEditProject(e.target.attributes.value.nodeValue);
        });
    });
    // All cancel edit buttons
    let cancelEditProjectBtns = document.querySelectorAll('.cancel');
    cancelEditProjectBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            toggleEditProject(e.target.attributes.value.nodeValue);
        });
    });
    // All confirm edit buttons, edit project name
    let confirmEditProjectBtns = document.querySelectorAll('.ok');
    confirmEditProjectBtns.forEach((button) => {
        let btnsArray = Array.from(confirmEditProjectBtns);
        let index = btnsArray.indexOf(button);
        button.addEventListener('click', () => {
            let inputValue = document.getElementById(
                `${user.projects[index].projectName}`
            );
            let newValue = inputValue.value;
            editProjectName(user, index, newValue);
            removeAllProjects();
            renderProjects(user);
        });
    });

    // Delete Project
    // all delete buttons
    let deleteProjectBtns = document.querySelectorAll('.delete-project-btn');
    deleteProjectBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            toggleDeleteProject(e.target.attributes.value.nodeValue);
        });
    });

    // Cancel delete
    let cancelDeleteProjectBtns = document.querySelectorAll('.cancel-delete');
    cancelDeleteProjectBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            toggleDeleteProject(e.target.attributes.value.nodeValue);
        });
    });

    // All confirm delete buttons, delete project
    let confirmDeleteProjectBtns = document.querySelectorAll(
        '.delete-confirm-btn'
    );
    confirmDeleteProjectBtns.forEach((button) => {
        let btnsArray = Array.from(confirmDeleteProjectBtns);
        let index = btnsArray.indexOf(button);
        button.addEventListener('click', () => {
            confirmDeleteProject(user, index);
            removeAllProjects();
            renderProjects(user);
        });
    });

    // Add tasks
    // all add task buttons
    let addTaskBtns = document.querySelectorAll('.add-new-task');
    addTaskBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            toggleAddTask(e.target.attributes.value.nodeValue);
        });
    });
    // Cancel addTask
    let cancelAddTaskBtns = document.querySelectorAll('.cancel-add-task');
    cancelAddTaskBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            toggleAddTask(e.target.attributes.value.nodeValue);
        });
    });
    // Confirm and add task
    let confirmAddTask = document.querySelectorAll('.confirm-add-task');
    let confirmAddArray = Array.from(confirmAddTask);
    confirmAddArray.forEach((task, index) => {
        task.addEventListener('click', () => {
            let description = document.querySelector('.task-description');
            let date = document.querySelector('.task-date');
            let dateArr = date.value.split('-');
            let formattedDate = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
            let hour = document.querySelector('.task-hour-popup');
            let priority = document.querySelector('.task-priority');
            let newTask = taskFactory(
                description.value,
                formattedDate,
                hour.value,
                priority.value
            );
            console.log(newTask);
        });
    });
}

export { addProject, removeAllProjects, renderProjects };
