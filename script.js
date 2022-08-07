const inputAdd = document.getElementById("input-add-todo");
const todoCtn = document.getElementById("todo-container");

inputAdd.onkeyup = (event) => {
  if (event.key !== "Enter") return;

  //your code here
  
  if(inputAdd.value === "") return  alert("Todo cannot be empty"); 
  addTodo(inputAdd.value,false);
  inputAdd.value = ""
 

};

function addTodo(title, completed) {
  //create a div that holds todo title, done button, delete button
  console.log(title);
  console.log(completed);
  const div = document.createElement("div");
  div.className = "border-bottom p-1 py-2 fs-2 d-flex";

  //create span for showing title
  const span = document.createElement("span");
  span.innerText = title;
  span.style.textDecoration = completed ? "line-through" : "";
  span.className = "me-3";

  //create done button
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.className = "btn btn-success me-2";

  //create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "btn btn-danger";

  //your code here
  //append todo to HTML...
  div.appendChild(span)
  div.appendChild(doneBtn)
  div.appendChild(deleteBtn)
  
  
  todoCtn.prepend(div)
  //define buttons event...

  
  doneBtn.style.display = "none"
  deleteBtn.style.display = "none"
  div.onmouseover = () => {
    doneBtn.style.display = ""
    deleteBtn.style.display = ""
  }
  div.onmouseout = () => {
    doneBtn.style.display = "none"
    deleteBtn.style.display = "none"
  }
  doneBtn.onclick = () => {
    if(span.style.textDecoration === ""){
      span.style.textDecoration === "line-through";
    }
    else{
      span.style.textDecoration = ""
      
    }

  }
  deleteBtn.onclick = () => {
    todoCtn.removeChild(div);
  }
  saveTodo();
  


  
  
}

function saveTodo() {
  const data = [];
  for (const todoDiv of todoCtn.children) {
    //your code here
     const todoObj = {}
     todoObj.title = todoDiv.children[0].innerText
     todoObj.completed = todoDiv.children[0].style.textDecoration === "line-through"
     data.push(todoObj)
     
    
  }

  
  //your code here
  localStorage.setItem("todoList",JSON.stringify(data))
 
}

function loadTodo() {
  //your code here
  const data = JSON.parse(localStorage.getItem("todoList"))
  for(const x of data.reverse()){
    addTodo(x.title,x.completed)


  }
 
}

loadTodo();

