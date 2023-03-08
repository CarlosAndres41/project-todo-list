import './style.css';
import { userFactory } from './user';
import { toggleNamePopUp } from './popups';
import { addProject } from './my-projects';

const newUser = userFactory('User', {});
const welcomeUser = document.querySelector('.sidebar-user strong');
welcomeUser.textContent = newUser.name;

//Add default projects to user
newUser.projects['Home'] = {};
newUser.projects['Work'] = {};

console.log(newUser.projects);

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
Object.keys(newUser.projects).forEach((project) => {
    addProject(project);
});
