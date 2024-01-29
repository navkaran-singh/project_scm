const todoList = [];
renderTodoList();
let todoListHTML = '';
function renderTodoList() {

    for (i in todoList) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        todoListHTML+=html;
}
}

console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

function addTodo() {
    const inputElement  =  document.querySelector('.js-name-input');
    let name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    renderTodoList();    
}