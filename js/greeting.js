const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logOut");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "userName"

function loginSubmit(e) {
    e.preventDefault();
    const userName = loginInput.value;
    loginInput.value = "";
    loginForm.classList.add(HIDDEN_CLASSNAME);

    //로컬스토리지에 value에 저장한 userName을 저장. key-value
    localStorage.setItem(USER_NAME_KEY, userName);
    helloUserName(userName);
}

const saveUserName = localStorage.getItem(USER_NAME_KEY);

if (saveUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    helloUserName(saveUserName);
};

logOut.addEventListener("click", clickLogOut);

function helloUserName(name) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello! ${name}!`;
}

function clickLogOut() {
    const resetBtn = confirm("everything is reset!");
    if (resetBtn == true) {
        localStorage.removeItem(USER_NAME_KEY);
        localStorage.removeItem("todos");
        todoList.innerHTML = "";
        greeting.classList.add(HIDDEN_CLASSNAME);
        greeting.innerText = ""; //현재 출력된 내용을 초기화 해야함
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        todoForm.classList.add(HIDDEN_CLASSNAME);
        todoList.classList.add(HIDDEN_CLASSNAME);
    }
}

