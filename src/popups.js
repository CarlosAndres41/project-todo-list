function toggleNamePopUp() {
    let popupForm = document.querySelector('.edit-form');
    popupForm.classList.toggle('show');
}

function projectEditPopUp(projectName) {
    let container = document.createElement('div');
    container.classList.add('edit-current-project');

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
    logo1.classList.add('fa-2xs');
    span1.appendChild(logo1);
    let span2 = document.createElement('span');
    span2.classList.add('cancel');
    let logo2 = document.createElement('i');
    logo2.classList.add('fa-solid');
    logo2.classList.add('fa-xmark');
    span2.appendChild(logo2);
    buttons.appendChild(span1);
    buttons.appendChild(span2);

    container.appendChild(buttons);

    return container;
}

export { toggleNamePopUp, projectEditPopUp };
