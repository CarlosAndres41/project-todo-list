import './style.css';
import { userFactory, displayName } from './user';
import { toggleNamePopUp, toggleAddProject } from './popups';
import { renderProjects } from './my-projects';

const newUser = userFactory('User');
displayName(newUser);

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

toggleAddProject();
renderProjects(newUser);
