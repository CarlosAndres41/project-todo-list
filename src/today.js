import { clearMainDisplay } from './tasks';
import { format } from 'date-fns';

function getTodaysTasks(user) {
    let todaysDate = new Date();
    let todaysTasksArray = [];
    let formatedDate = format(todaysDate, 'dd-MM-yyyy');
    user.projects.forEach((project) => {
        let tasks = project.tasks;
        tasks.forEach((task) => {
            if (task.date === formatedDate) {
                todaysTasksArray.push(task);
            }
        });
    });
    return todaysTasksArray;
}

function createDiv(tasks) {
    const display = document.querySelector('.main-display');

    const todayDiv = document.createElement('div');
    todayDiv.classList.add('today-div');

    const todayPrs = document.createElement('h1');
    todayPrs.classList.add('today-title');
    todayPrs.textContent = 'Today';

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
        let span2 = document.createElement('span');
        span2.classList.add('delete-task');
        let logo2 = document.createElement('i');
        logo2.classList.add('fa-regular');
        logo2.classList.add('fa-trash-can');
        span2.appendChild(logo2);
        taskIcons.appendChild(span2);

        const taskHour = document.createElement('p');
        taskHour.classList.add('task-hour');
        taskHour.textContent = task.hour;

        individualTask.appendChild(taskDescription);
        individualTask.appendChild(taskDate);
        individualTask.appendChild(taskHour);
        individualTask.appendChild(taskIcons);

        todayDiv.appendChild(individualTask);
    });

    display.appendChild(todayPrs);
    display.appendChild(todayDiv);
}

function showTodaysTasks(user) {
    let todayBtn = document.querySelector('.today .notif-text');
    let tasks = getTodaysTasks(user);
    todayBtn.addEventListener('click', () => {
        clearMainDisplay();
        createDiv(tasks);
    });
    // Display number of tasks
    let notification = document.querySelector('.today-notification');
    notification.textContent = `${tasks.length}`;
}

export { showTodaysTasks };
