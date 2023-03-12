import { clearMainDisplay } from './tasks';
import { format } from 'date-fns';

function getUpcomingDates() {
    let upcomingDates = [];
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAftTomorrow = new Date(today);
    dayAftTomorrow.setDate(dayAftTomorrow.getDate() + 2);
    upcomingDates.push(format(today, 'dd-MM-yyyy'));
    upcomingDates.push(format(tomorrow, 'dd-MM-yyyy'));
    upcomingDates.push(format(dayAftTomorrow, 'dd-MM-yyyy'));
    return upcomingDates;
}

function getUpcomingTasks(user) {
    let upcomingDates = getUpcomingDates();
    let upcomingTasksArray = [];
    user.projects.forEach((project) => {
        let tasks = project.tasks;
        tasks.forEach((task) => {
            if (upcomingDates.includes(task.date)) {
                upcomingTasksArray.push(task);
            }
        });
    });
    return upcomingTasksArray;
}

function createDiv(tasks) {
    const display = document.querySelector('.main-display');

    const upcomingDiv = document.createElement('div');
    upcomingDiv.classList.add('upcoming-div');

    const todayPrs = document.createElement('h1');
    todayPrs.classList.add('upcoiming-title');
    todayPrs.textContent = 'Upcomig';

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

        upcomingDiv.appendChild(individualTask);
    });

    display.appendChild(todayPrs);
    display.appendChild(upcomingDiv);
}

function showUpcomingTasks(user) {
    let upcomingBtn = document.querySelector('.upcoming .notif-text');
    let tasks = getUpcomingTasks(user);
    upcomingBtn.addEventListener('click', () => {
        clearMainDisplay();
        createDiv(tasks);
    });
    // Display number of tasks
    let notification = document.querySelector('.upcoming-notification');
    notification.textContent = `${tasks.length}`;
}

export { showUpcomingTasks };
