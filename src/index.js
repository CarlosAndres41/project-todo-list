import './style.css';
import { userFactory, displayName } from './user';
import { editUserName, addProject } from './popups';
import { renderProjects } from './my-projects';

const newUser = userFactory('User');
displayName(newUser);

editUserName(newUser);
addProject(newUser);
renderProjects(newUser);
