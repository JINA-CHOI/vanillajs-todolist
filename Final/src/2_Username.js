// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

/*
Clock.
Username Persistance.
To Do List.
Random Background Image.
Weather with Geolocation. 
*/

const form = document.querySelector(".InputNameFormZone"),
    input = form.querySelector("input"),
    output = document.querySelector(".OutputNameZoneZone");

const USER_LS="currentUser",
    SHOWING_CN="showing";

const resetBtn = document.querySelector(".resetName");    

function deleteName(event){
    localStorage.removeItem(USER_LS);
    output.classList.remove(SHOWING_CN);
    input.value = null;
    return askForName();
}
    
function saveUserName(text){
    localStorage.setItem(USER_LS, text);
}    

function handleSubmit2(event){
    event.preventDefault();
    const currentValue=input.value;
    paintUserName(currentValue);
    saveUserName(currentValue);        
}    

function askForName(){
    resetBtn.style.display="none";
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit2);
    
    
}    

function paintUserName(text){
    resetBtn.style.display="block";
    form.classList.remove(SHOWING_CN);
    output.classList.add(SHOWING_CN);
    output.innerText=`Hello ${text}`;
}

function loadUserName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintUserName(currentUser);
    }
}

function init(){
    loadUserName();
    resetBtn.addEventListener("click",deleteName);
}

init();