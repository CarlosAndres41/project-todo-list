const userFactory = (name) => {
    let projects = [
        { projectName: 'Work', tasks: [] },
        { projectName: 'Home', tasks: [] },
    ];
    return { name, projects };
};

export { userFactory };
