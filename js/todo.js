const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todolist");

const todos = [];

//로컬스토리지에 투두리스트 추가
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo); //todos빈Arr에 todovalue를 추가
    addTodo(newTodo);
    saveTodos();
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    console.log(li);
    console.dir(li);
    li.remove();
}

//element를 추가하는 함수
function addTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    span.innerText = newTodo
    button.innerText = "✖️"
    console.log(li);
    todoList.appendChild(li);
    li.appendChild(button);

    button.addEventListener("click", deleteTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
