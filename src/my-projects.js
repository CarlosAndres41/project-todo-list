import { projectEditPopUp } from './popups';

function addProject(projectName) {
    let container = document.querySelector('.projects-container');
    let prDiv = document.createElement('div');
    prDiv.classList.add('project');

    let name = document.createElement('p');
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
    span2.classList.add('edit-project');
    let logo2 = document.createElement('i');
    logo2.classList.add('fa-regular');
    logo2.classList.add('fa-trash-can');
    logo2.classList.add('fa-xs');
    span2.appendChild(logo2);

    buttons.appendChild(span1);
    buttons.appendChild(span2);
    prDiv.appendChild(name);
    prDiv.appendChild(buttons);
    buttons.appendChild(projectEditPopUp(projectName));
    container.appendChild(prDiv);
}

export { addProject };