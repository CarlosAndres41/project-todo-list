import './style.css';
import { userFactory, editProjectName } from './user';
import { toggleNamePopUp, toggleEditProject } from './popups';
import { addProject, removeAllProjects } from './my-projects';

const newUser = userFactory('User');
const welcomeUser = document.querySelector('.sidebar-user strong');
welcomeUser.textContent = newUser.name;

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
    newUser.name = nameInput.value;
    welcomeUser.textContent = newUser.name;
});
nameConfirm.addEventListener('click', toggleNamePopUp);

// Create Projects
newUser.projects.forEach((project) => {
    addProject(project.projectName);
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
        editProjectName(newUser, index, 'New Name');
    });
});
