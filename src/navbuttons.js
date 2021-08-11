function createButton(text, id, event) {
    const button = document.createElement('button');
    button.classList.add('navButton');
    button.innerText = text;
    button.value = id;
    button.addEventListener('click', event);
    return button;
}

function newProject() {
    console.log('testing');
}

function newTask() {
    console.log('testing');
}

function projectList() {
    console.log('testing');
}

function navButtons() {
    const navButtons = document.createElement('div');
    navButtons.classList.add('navButtons');
    navButtons.appendChild(createButton('New Project', 'new-project', newProject));
    navButtons.appendChild(createButton('New Task', 'new-task', newTask));
    navButtons.appendChild(createButton('Project List', 'project-list', projectList));
    return navButtons;
}

export default navButtons