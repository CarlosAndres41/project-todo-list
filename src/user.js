const userFactory = (name) => {
    let projects = [
        { projectName: 'Work', tasks: [] },
        { projectName: 'Home', tasks: [] },
    ];
    return { name, projects };
};

const editProjectName = (user, index, newName) => {
    user.projects[index].projectName = newName;
};

export { userFactory, editProjectName };
