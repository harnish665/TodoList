//let todoArray = [];
let todoArray = JSON.parse(localStorage.getItem("todoArrays"));

renderTodo()



function renderTodo () {
  let todoHtml = "" //initialize empty todoHtml

  for (i = 0; i < todoArray.length; i++) {
    const todoObject = todoArray[i];
    const name = todoObject.name;
    const dueDate = todoObject.date;
    let html = `
    <input type="checkbox" class="checker"/>
    <div>

    <p class="todoName">

    ${name}
    </p>
    </div>
    <div class="due-date">
    ${dueDate}
    </div>
    <div>
    <button class="delete-button" onclick="
    todoArray.splice(${i}, 1)
    renderTodo();
    ">Delete</button>
    </div>
    `
    todoHtml += html
  }
  document.querySelector(".todo-box").innerHTML = todoHtml


  return todoHtml
}

function cleared() {
  todoArray = [];
  renderTodo()
}

function addTodo () {

  let inputElement = document.querySelector(".js-userInput")
  let dateElement = document.querySelector(".js-dateInput")
  let todoName = inputElement.value.trim();
  let dueDate = dateElement.value

  todoArray.push({
    name: todoName,
    date: dueDate,
  })

  if (!todoName && !dueDate) {
    todoHtml = renderTodo();
    todoHtml = ""
    document.getElementById("todo-container").classList.remove(".todo-div")


  }
  renderTodo();

  inputElement.value = ""
  dateElement.value = "";


  localStorage.setItem("todoArrays", JSON.stringify(todoArray))
}
