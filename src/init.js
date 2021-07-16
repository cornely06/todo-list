import navButtons from './navbuttons.js'

function paragraph(content) {
    const para = document.createElement('p');
    para.innerText = content;
    para.classList.add('para')
    return para;
}

function titleBar(){
    const title = document.createElement('div');
    title.classList.add('titleBar');
    title.appendChild(paragraph('todo-list'));
    return title;
}

function navSection() {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    nav.appendChild(paragraph('boo'));
    nav.appendChild(navButtons());
    return nav;
}

function projectSection() {
    const project = document.createElement('div');
    project.classList.add('project');
    project.appendChild(paragraph('boo'));
    return project;
}

function content() {
    const content = document.createElement('div');
    content.classList.add('content');
    content.appendChild(navSection());
    content.appendChild(projectSection());
    return content;
}

function init() {
    const body = document.body;
    body.appendChild(titleBar());
    body.appendChild(content());
}

export default init;