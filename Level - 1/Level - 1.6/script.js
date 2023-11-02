function createTodo() {
    const listItem = document.createElement("li");
    const todosContainerElement = document.getElementById("todos-container");
    todosContainerElement.appendChild(listItem);
    listItem.setAttribute("onclick", "todoCheck(event, this)");
    const userInput = document.getElementById("note").value;
    listItem.innerHTML = userInput;
  }
  
  function deleteTodos() {
    const deleteTodos = document.getElementById("todos-container");
    deleteTodos.innerHTML = '';
  }
  
  function todoCheck(e, todo) {
    if (todo.style.textDecoration === '') {
      todo.style.textDecoration = 'line-through';
    } else {
      todo.style.textDecoration = '';
    }
  }