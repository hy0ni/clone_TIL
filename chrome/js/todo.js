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
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
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
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

$toDoForm.addEventListener('submit', handleToDoSubmit)

const sevedToDos = localStorage.getItem(TODOS_KEY);
// console.log(sevedToDos);
if (sevedToDos !== null) {
  const parsedToDos = JSON.parse(sevedToDos);
  toDos = parsedToDos;
  // console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}