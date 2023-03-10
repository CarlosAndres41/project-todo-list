const userFactory = (name) => {
    let projects = [
        {
            projectName: 'Home',
            tasks: [
                {
                    description: 'Start by creating new tasks',
                    date: '11-03-2023',
                    hour: '12:00',
                    priority: 'high',
                    project: '',
                },
            ],
        },
        {
            projectName: 'Work',
            tasks: [
                {
                    description: 'Start by creating new tasks',
                    date: '12-03-2023',
                    hour: '12:00',
                    priority: 'normal',
                    project: '',
                },
            ],
        },
    ];
    return { name, projects };
};

const taskFactory = (description, date, hour, priority) => {
    return { description, date, hour, priority };
};

const addTask = (user, index, task) => {
    user.projects[index].tasks.push(task);
};

const displayName = (user) => {
    const welcomeUser = document.querySelector('.sidebar-user strong');
    welcomeUser.textContent = user.name;
};

const editProjectName = (user, index, newName) => {
    user.projects[index].projectName = newName;
};

const confirmDeleteProject = (user, index) => {
    if (index > -1) {
        // only splice array when item is found
        user.projects.splice(index, 1); // 2nd parameter means remove one item only
    }
};

const addProjectToUser = (user, project) => {
    let template = { projectName: project, tasks: [] };
    user.projects.push(template);
};

function deleteTask(user) {
    console.log(user);
    let deleteTaskBtns = document.querySelectorAll('.delete-task');
    console.log(deleteTaskBtns);
    deleteTaskBtns.forEach((button) => {
        console.log(button);
        button.addEventListener('click', () => {
            console.log('clicked');
        });
    });
}

export {
    userFactory,
    editProjectName,
    confirmDeleteProject,
    displayName,
    addProjectToUser,
    taskFactory,
    addTask,
    deleteTask,
};
