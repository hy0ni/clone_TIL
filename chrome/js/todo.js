const $toDoForm = document.getElementById('todo-form');
const $toDoInput = $toDoForm.querySelector('input');
const $toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  // console.log(typeof li.id)
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const btn = document.createElement('button');
  btn.innerText = '❌';
  btn.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  if (newTodo !== '') {
    $toDoList.appendChild(li);
  } else {
    return;
  }
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = $toDoInput.value;
  $toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

$toDoForm.addEventListener('submit', handleToDoSubmit)

const sevedToDos = localStorage.getItem(TODOS_KEY);
if (sevedToDos !== null) {
  const parsedToDos = JSON.parse(sevedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

