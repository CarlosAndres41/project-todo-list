const userFactory = (name) => {
    let projects = [
        { projectName: 'Work', tasks: [] },
        { projectName: 'Home', tasks: [] },
    ];
    return { name, projects };
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

export { userFactory, editProjectName, confirmDeleteProject, displayName };
