import { clearMainDisplay } from './tasks';

function getPriorityTasks(user) {
    let highPArray = [];
    user.projects.forEach((project) => {
        let tasks = project.tasks;
        tasks.forEach((task) => {
            if (task.priority === 'high') {
                highPArray.push(task);
            }
        });
    });
    return highPArray;
}

function createDiv(tasks) {
    const display = document.querySelector('.main-display');

    const priDiv = document.createElement('div');
    priDiv.classList.add('highP-div');

    const todayPrs = document.createElement('h1');
    todayPrs.classList.add('highP-title');
    todayPrs.textContent = 'High Priority';

    tasks.forEach((task) => {
        const individualTask = document.createElement('div');
        individualTask.classList.add('individual-task-div');
        if (task.priority === 'high') {
            individualTask.classList.add('priority-task');
        }

        const taskDescription = document.createElement('div');
        taskDescription.classList.add('task-description');

        // const checkBox = document.createElement('input');
        // checkBox.setAttribute('type', 'checkbox');
        const description = document.createElement('p');
        description.textContent = task.description;
        // taskDescription.appendChild(checkBox);
        taskDescription.appendChild(description);

        const taskDate = document.createElement('div');
        taskDate.classList.add('task-date');

        const date = document.createElement('p');
        date.textContent = task.date;
        taskDate.appendChild(date);

        const taskIcons = document.createElement('div');
        taskIcons.classList.add('task-icons');

        let span1 = document.createElement('span');
        span1.classList.add('high-priority');
        let logo1 = document.createElement('i');
        logo1.classList.add('fa-solid');
        logo1.classList.add('fa-exclamation');
        span1.appendChild(logo1);
        if (task.priority === 'high') {
            taskIcons.appendChild(span1);
        }
        // let span2 = document.createElement('span');
        // span2.classList.add('delete-task');
        // let logo2 = document.createElement('i');
        // logo2.classList.add('fa-regular');
        // logo2.classList.add('fa-trash-can');
        // span2.appendChild(logo2);
        // taskIcons.appendChild(span2);

        const taskHour = document.createElement('p');
        taskHour.classList.add('task-hour');
        taskHour.textContent = task.hour;

        individualTask.appendChild(taskDescription);
        individualTask.appendChild(taskDate);
        individualTask.appendChild(taskHour);
        individualTask.appendChild(taskIcons);

        priDiv.appendChild(individualTask);
    });

    display.appendChild(todayPrs);
    display.appendChild(priDiv);
}

function showPriorityTasks(user) {
    let priorityBtn = document.querySelector('.high-priority .notif-text');
    let tasks = getPriorityTasks(user);
    priorityBtn.addEventListener('click', () => {
        clearMainDisplay();
        createDiv(tasks);
    });
    // Display number of tasks
    let notification = document.querySelector('.priority-notification');
    notification.textContent = `${tasks.length}`;
}

export { showPriorityTasks };
