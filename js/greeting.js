const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "userName"

function loginSubmit(e){
    e.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    //로컬스토리지에 value에 저장한 userName을 저장. key-value
    localStorage.setItem(USER_NAME_KEY,userName);
    helloUserName(userName);
}

const saveUserName = localStorage.getItem(USER_NAME_KEY);

if(saveUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginSubmit);
}else{
    helloUserName(saveUserName);
};

function helloUserName(name){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello! ${name}!`;
}