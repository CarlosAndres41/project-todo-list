import './style.css';
import { userFactory } from './user';

const newUser = userFactory('User', []);
const welcomeUser = document.querySelector('.sidebar-user strong');
welcomeUser.textContent = newUser.name;

console.log('Testing');
