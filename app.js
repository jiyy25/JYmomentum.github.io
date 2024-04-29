const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(e){
    e.preventDefault();
    const userName = loginInput.value;
    greeting.innerText = `Hello! ${userName}!`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("userName",userName);
    //로컬스토리지에 value에 저장한 userName을 저장. key-value
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",loginSubmit);