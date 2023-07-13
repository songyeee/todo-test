const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

let todos = [];

addButton.addEventListener('click',addTodo);

// 투두 추가 함수
function addTodo() {
  const todoText = todoInput.value.trim();
  
  if (todoText !== '') {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todos.push(todoText);
    saveTodo(todos);
    todoInput.value = '';
  }
 
  // 할일완료
  function createTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    todoItem.addEventListener('click', completeTodo);
  }

  // 삭제 버튼 
  const removeButton = document.createElement("button");
  removeButton.textContent = '✂';
  todoItem.appendChild(todoItem);
  removeButton.addEventListener('click', removeTodo);
  return todoItem;
}
  function completeTodo(event) {
    const todoItem = event.target.closest('li');
    todoItem.classList.toggle('completed');
  }

  function removeTodo(event) {
    const todoItem = event.target.closest('li');
    todoItem.parentNode.removeChild(todoItem);
    }

    
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
