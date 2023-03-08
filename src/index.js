import './style.css';
import { userFactory } from './user';
import { toggleNamePopUp } from './popups';

const newUser = userFactory('User', []);
const welcomeUser = document.querySelector('.sidebar-user strong');
welcomeUser.textContent = newUser.name;

// Edit name popup

let popup = document.querySelector('.edit-user');
popup.addEventListener('click', toggleNamePopUp);

console.log('Testing');
