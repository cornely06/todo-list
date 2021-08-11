function createButton(text, id) {
    const button = document.createElement('button');
    button.classList.add('navButton');
    button.innerText = text;
    button.value = id;
    return button;
}

function navButtons() {
    const navButtons = document.createElement('div');
    navButtons.classList.add('navButtons');
    navButtons.appendChild(createButton('New Project', 'new-project'));
    navButtons.appendChild(createButton('New Task', 'new-task'));
    navButtons.appendChild(createButton('Project List', 'project-list'));
    return navButtons;
}

export default navButtons