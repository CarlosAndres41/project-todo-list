import './style.css';
import { userFactory, displayName, deleteTask } from './user';
import { editUserName, addProject } from './popups';
import { renderProjects } from './my-projects';
import { showTasks } from './tasks';
import { showTodaysTasks } from './today';
import { showUpcomingTasks } from './upcoming';
import { showPriorityTasks } from './high-priority';

const newUser = userFactory('User');
displayName(newUser);
editUserName(newUser);
addProject(newUser);
renderProjects(newUser);
showTasks(newUser);
showTodaysTasks(newUser);
showUpcomingTasks(newUser);
showPriorityTasks(newUser);
