import './style.css';
import { userFactory } from './user';

const newUser = userFactory('User', []);
const welcomeUser = document.querySelector('.sidebar-user strong');
welcomeUser.textContent = newUser.name;

// Edit name popup
let popup = document.querySelector('.edit-popup');
popup.addEventListener('click', function () {
    let popupForm = document.querySelector('.edit-form');
    popupForm.classList.toggle('show');
});

console.log('Testing');
