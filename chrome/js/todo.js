const $toDoForm = document.getElementById('todo-form');
const $toDoInput = $toDoForm.querySelector('input');
const $toDoList = document.getElementById('todo-list');

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  // e.target.parentNode.remove();
  // this.parentNode.remove();
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
  paintToDo(newTodo);
}

$toDoForm.addEventListener('submit', handleToDoSubmit)