## Chrome app 구현하기

> Login 기능

- submit event

form의 기본 동작: Occurs when you press Enter or click a button.  
새로고침이 일어나는 건 form submit의 기본 동작이다.

value를 받아올때 submit event의 새로고침을 방지하기 위한 방법:  
event를 인자로 전달, _e_.preventDefault()를 명시하여 새로고침을 방지할 수 있다.

변수,상수를 대문자로 표기하는 경우: 중요한 정보를 담고 있지 않은 경우 대문자로 작성.  
(일반적으로 string만 포함된 변수는 대문자로 표기. string을 저장하고 싶을 때 사용한다.)

```javascript
const HIDDEN_CLASSNAME = "hidden";
```

---

- localStorage API를 사용해 username 기억하기

```javascript
localStorage.setItem(key, value);
```

setItem()을 활용하여 local storage에 정보를 저장할 수 있다.

```javascript
localStorage.getItem(key);
```

getItem()을 활용하여 저장 된 값을 불러올 수 있다.

```javascript
localStorage.removeItem(key);
```

removeItem()을 활용하여 저장되어있는 값을 삭제할 수 있다.

getItem을 활용해 localStorge에 유저정보 유무 확인하는 코드 작성.  
함수를 사용해 반복되는 코드 줄이기.  
code >>> [login](./chrome/login/app.js)
