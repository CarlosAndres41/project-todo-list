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

export {
    userFactory,
    editProjectName,
    confirmDeleteProject,
    displayName,
    addProjectToUser,
    taskFactory,
    addTask,
};
