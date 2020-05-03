
/*
Clock.
Username Persistance.
To Do List.
Random Background Image.
Weather with Geolocation. 
*/

const toDoForm = document.querySelector(".ToDoFormZone"),
    toDoInput=toDoForm.querySelector("input"),
    List=document.querySelector(".toDoList");

const LIST_LS="toDos";
let toDos=[];

const resetAllBtn = document.querySelector(".resetList"); 

function reset(event){
  const Allclearlist = List;
  while (Allclearlist.hasChildNodes()) {
    Allclearlist.removeChild(Allclearlist.firstChild);
 } 
  toDos=[];
  console.log(toDos);
  if(toDos.length===0){
    resetAllBtn.style.display="none";
  }
  saveToDos();
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    List.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
      console.log(toDo.id, parseInt(li.id));
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    if(toDos.length===0){
      resetAllBtn.style.display="none";
    }
  
    saveToDos();
    console.log(cleanToDos, toDos);
}

function saveToDos() {
    localStorage.setItem(LIST_LS, JSON.stringify(toDos));
  }

function paintToDo(text) {
    resetAllBtn.style.display="block";
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.className="del";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    delBtn.innerText = "🔚";
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    List.appendChild(li);
    const toDoObj = {
      text: text,
      id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
  }

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
   
  }

function loadToDos() {
    const loadedToDos = localStorage.getItem(LIST_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo) {
        paintToDo(toDo.text);
      });
    }
  }


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    resetAllBtn.addEventListener("click", reset);
}
init();
