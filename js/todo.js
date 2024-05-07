const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todolist");
const emo = ["🌸", "🌞", "🌼", "🤍", "💛", "🍀", "🌟", "💫"]

let todos = [];

//로컬스토리지에 투두리스트 추가
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        id: Date.now(),
        text: newTodo
    }
    todos.push(todoObj); //todos빈Arr에 todovalue를 추가 -> obj형으로 추가
    addTodo(todoObj);
    saveTodos();
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    todos = todos.filter((Todo) => Todo.id !== parseInt(li.id));
    li.remove();
    saveTodos()
}

//element를 추가하는 함수
function addTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const emoRandom = emo[Math.floor(Math.random() * emo.length)];

    todoList.classList.remove(HIDDEN_CLASSNAME);
    li.id = newTodo.id; //li의 id에 고유아이디를 추가
    li.appendChild(span);
    span.innerText = emoRandom + " " + newTodo.text
    button.innerText = "✖️"
    todoList.appendChild(li);
    li.appendChild(button);

    button.addEventListener("click", deleteTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(addTodo);
}
