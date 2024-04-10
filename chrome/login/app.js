const $loginForm = document.querySelector('#login-form')
const $loginInput = document.querySelector('#login-form input');
const $greeting = document.querySelector('#greeting');
const $error = document.querySelector('.error');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
  e.preventDefault();
  const typedUsername = $loginInput.value;
  if (typedUsername === '') {
    $error.classList.remove(HIDDEN_CLASSNAME);
  } else {
    $loginForm.classList.add(HIDDEN_CLASSNAME);
    $error.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, typedUsername);
    paintgreetings(typedUsername);
  }
}

function paintgreetings(username) {
  $greeting.innerText = `Hello ${username}`;
  $greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  $loginForm.classList.remove(HIDDEN_CLASSNAME);
  $loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // show the greeting
  paintgreetings(savedUsername);
}