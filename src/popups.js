import { addProjectToUser } from './user';
import { renderProjects, removeAllProjects } from './my-projects';

function toggleNamePopUp() {
    let popupForm = document.querySelector('.edit-form');
    popupForm.classList.toggle('show');
}

function toggleEditProject(projectName) {
    let editPopUp = document.getElementById(`${projectName}1`);
    editPopUp.classList.toggle('show');
}

function toggleDeleteProject(projectName) {
    let editPopUp = document.getElementById(`${projectName}-delete`);
    editPopUp.classList.toggle('show');
}

function toggleAddTask(projectName) {
    let addPopUp = document.getElementById(`${projectName}-task`);
    addPopUp.classList.toggle('show');
}

function editUserName(user) {
    // Edit name popup
    let editNamePopup = document.querySelector('.edit-user');
    editNamePopup.addEventListener('click', toggleNamePopUp);
    // Edit name cancel button
    let nameCancel = document.querySelector('.form-cancel');
    nameCancel.addEventListener('click', toggleNamePopUp);
    // Edit name
    let nameConfirm = document.querySelector('.form-check');
    nameConfirm.addEventListener('click', () => {
        let nameInput = document.getElementById('name');
        const welcomeUser = document.querySelector('.sidebar-user strong');
        user.name = nameInput.value;
        welcomeUser.textContent = user.name;
    });
    nameConfirm.addEventListener('click', toggleNamePopUp);
}

function addProject(user) {
    // Toggle pop up when clicking the '+' button
    let addButton = document.querySelector(`.add-project-btn`);
    addButton.addEventListener('click', () => {
        let popup = document.querySelector('.add-new-project');
        popup.classList.toggle('show');
    });
    // Toggle pop up when clicking the '+' button
    let cancelButton = document.querySelector(`.add-cancel`);
    cancelButton.addEventListener('click', () => {
        let popup = document.querySelector('.add-new-project');
        popup.classList.toggle('show');
    });

    // Add project
    let confirmAddButton = document.querySelector('.add-check');
    confirmAddButton.addEventListener('click', () => {
        let projectName = document.querySelector('#new-project-name').value;
        if (projectName !== '') {
            addProjectToUser(user, projectName);
        }
        // Close pop up
        let popup = document.querySelector('.add-new-project');
        popup.classList.toggle('show');
        //Re -render projects
        removeAllProjects();
        renderProjects(user);
    });
}

function projectEditPopUp(projectName) {
    let container = document.createElement('div');
    container.classList.add('edit-current-project');
    container.setAttribute('id', `${projectName}1`);

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', projectName);
    input.setAttribute('id', projectName);
    input.setAttribute('value', projectName);
    container.appendChild(input);

    let buttons = document.createElement('div');
    let span1 = document.createElement('span');
    span1.classList.add('ok');
    let logo1 = document.createElement('i');
    logo1.classList.add('fa-solid');
    logo1.classList.add('fa-check');
    span1.appendChild(logo1);
    let span2 = document.createElement('span');
    span2.classList.add('cancel');
    let logo2 = document.createElement('i');
    logo2.classList.add('fa-solid');
    logo2.classList.add('fa-xmark');
    logo2.setAttribute('value', projectName);
    span2.appendChild(logo2);
    buttons.appendChild(span1);
    buttons.appendChild(span2);

    container.appendChild(buttons);

    return container;
}

function deleteProject(projectName) {
    let container = document.createElement('div');
    container.classList.add('delete-current-project');
    container.setAttribute('id', `${projectName}-delete`);

    let text = document.createElement('h4');
    text.textContent = `Are you sure you want to delete ${projectName}`;
    container.appendChild(text);

    let buttons = document.createElement('div');
    let span1 = document.createElement('span');
    span1.classList.add('delete-confirm');
    let logo1 = document.createElement('i');
    logo1.classList.add('fa-solid');
    logo1.classList.add('fa-check');
    logo1.classList.add('delete-confirm-btn');
    span1.appendChild(logo1);
    let span2 = document.createElement('span');
    span2.classList.add('cancel-delete');
    let logo2 = document.createElement('i');
    logo2.classList.add('fa-solid');
    logo2.classList.add('fa-xmark');
    logo2.setAttribute('value', projectName);
    span2.appendChild(logo2);
    buttons.appendChild(span1);
    buttons.appendChild(span2);

    container.appendChild(buttons);

    return container;
}

function addTaskPopUp(projectName) {
    let container = document.createElement('div');
    container.classList.add('add-task-project');
    container.setAttribute('id', `${projectName}-task`);

    let description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('placeholder', 'Write task description');
    description.classList.add('task-description');
    container.appendChild(description);

    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('value', new Date());
    date.classList.add('task-date');
    container.appendChild(date);

    let hour = document.createElement('input');
    hour.setAttribute('type', 'time');
    hour.classList.add('task-hour-popup');
    container.appendChild(hour);

    let priority = document.createElement('select');
    priority.classList.add('task-priority');
    let value1 = document.createElement('option');
    value1.textContent = 'Normal';
    value1.setAttribute('value', 'normal');
    priority.appendChild(value1);
    let value2 = document.createElement('option');
    value2.textContent = 'High';
    value2.setAttribute('value', 'high');
    priority.appendChild(value2);
    container.appendChild(priority);

    let buttons = document.createElement('div');
    let span1 = document.createElement('span');
    span1.classList.add('confirm-add-task');
    let logo1 = document.createElement('i');
    logo1.classList.add('fa-solid');
    logo1.classList.add('fa-check');
    span1.appendChild(logo1);
    let span2 = document.createElement('span');
    span2.classList.add('cancel-add-task');
    let logo2 = document.createElement('i');
    logo2.classList.add('fa-solid');
    logo2.classList.add('fa-xmark');
    logo2.setAttribute('value', projectName);
    span2.appendChild(logo2);
    buttons.appendChild(span1);
    buttons.appendChild(span2);

    container.appendChild(buttons);

    return container;
}

export {
    toggleNamePopUp,
    projectEditPopUp,
    toggleEditProject,
    deleteProject,
    toggleDeleteProject,
    addProject,
    editUserName,
    toggleAddTask,
    addTaskPopUp,
};
