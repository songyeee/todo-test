const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

let todos = [];

addButton.addEventListener('click',addTodo);

//투두 추가함수
function addTodo() {
  const todoText = todoInput.value.trim();
  
  if (todoText !== '') {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todos.push(todoText);
    saveTodo(todos);
    todoInput.value = '';
  }

}
 
  // 투두리스트생성함수
  function createTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    todoItem.addEventListener('click', completeTodo);
  

  // 삭제 버튼 
  const removeButton = document.createElement("button");
  removeButton.textContent = '✂';
  removeButton.addEventListener('click', removeTodo);
  todoItem.appendChild(removeButton);
  return todoItem;
}
  //투두 완료
  function completeTodo(event) {
    const todoItem = event.target.closest('li');
    todoItem.classList.toggle('completed');
  }
  //투두 지울때
  function removeTodo(event) {
    const todoItem = event.target.closest('li');
    todoItem.parentNode.removeChild(todoItem);
    }

    //로컬 저장소, JSON
    function saveTodo(todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodo() {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        todos = JSON.parse(savedTodos);
      }
      for (let i = 0; i < todos.length; i++) {
        const todoItem = createTodoItem(todos[i]);
        todoList.appendChild(todoItem);
      }
    }
    
    window.addEventListener('load', loadTodo);

