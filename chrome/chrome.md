## Chrome app 구현하기

### Login 기능

- [login](chrome/js/greetings.js)

> **submit event**

form의 기본 동작: Occurs when you press Enter or click a button.  
새로고침이 일어나는 건 form submit의 기본 동작이다.

value를 받아올때 submit event의 새로고침을 방지하기 위한 방법:  
event를 인자로 전달, _e_.preventDefault()를 명시하여 새로고침을 방지할 수 있다.

변수,상수를 대문자로 표기하는 경우: 중요한 정보를 담고 있지 않은 경우 대문자로 작성.  
(일반적으로 string만 포함된 변수는 대문자로 표기. string을 저장하고 싶을 때 사용한다.)

```javascript
const HIDDEN_CLASSNAME = "hidden";
```

<br>

> **localStorage API를 사용해 username 기억하기**

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

---

### 시계 구현하기

- [clock](chrome/js/clock.js)

setInterval()을 사용하여 매 초마다 시간을 불러오는 함수를 호출하도록 작성.  
new Date object는 현재 날짜, 시간, 분, 초에 대한 정보를 가지고 있으므로,  
object를 매 초마다 새로 create한다.

getHours(), getMinutes(), getSeconds() 메소드를 사용하여 시간, 분, 초에 대한 정보 가져오기.

```javascript
const $clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  $clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(getClock, 1000);
```

**문제점 2가지:**

1.  초를 셀때 두자리 숫자가 아닌 0과 같은 한자리 숫자로 표기되는 방식 수정.
2.  매 초마다 기다려야 하므로 시간을 바로 보여주지 않는 점 수정.

> **첫 번째 문제 해결하기**

한 자리 숫자로 표기되는 부분을 항상 두 자리 숫자로 표기되도록 수정.  
(string이 최소한 2개의 문자를 가지고 있어야 한다.  
만약 1자리 숫자일 경우 앞에 0을 붙여준다. 만약 2자리 숫자라면 스킵.)

padStart()는 string에 사용할 수 있는 함수이다.

```javascript
"1".padStart(2, "0");
// 1이라는 string이 있다. 만약 그 string의 길이가 2가 아니라면, 앞쪽에 "0"을 추가한다.

"12".padStart(2, "0");
// 12라는 string이 있다. 12는 길이가 2자리 string이므로, 아무작업도 수행하지 않는다.
```

getHours(), getMinutes(), getSeconds()해당 메소드들은 모두 number type이기 때문에  
String()을 사용해 string으로 변환한 후 padStart() 함수를 사용한다.

```javascript
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
```

<br>

> **두 번째 문제 해결하기**

website가 load 되자마자 getclock()을 실행하고 매 초마다 다시 실행 되도록 한다.  
이렇게 하면 한번 호출한 다음 그뒤로도 계속 실행되는 것을 확인할 수 있다.

### 랜덤 명언 리스트

- [quotes](chrome/js/quotes.js)

```javascript
Math.floor(); // 내림처리 한 정수 리턴.
Math.random(); // 0~1 사이의 랜덤한 숫자.
```

---

### 랜덤 background image

img요소 생성  
document.createElement('img');

---

### ToDo 리스트

adding ToDo List: li와 span 태그 생성. input value값 넣어주기.

deleting button: li 삭제 버튼 추가하기. button click event. click시 해당 버튼의 부모인 li 지워주기

saving ToDO List: li 저장하기.(새로고침시 삭제 방지)  
todo list작성 후 localStorage에 저장. 새로고침시 localStroage에 저장되어 있는 값 불러오기.

toDos변수를 만들고 배열 생성.
새로운 todoli를 생성하기 전 toDos array를 가지고 와서 newTodo push.
todoli에 저장된 value값을 localStorage에 저장.
문제점:
새로고침시 초기화 된다.
localStorage에는 array를 저장할 수 없다.(string만 가능)

JSON.stringify()를 활용하여 string으로 변환.
단순 text이므로 각각의 item에 접근X. javascript object 변환해줘야 한다.

javascript object으로 변환하기 위한 방법:
JSON.parse()를 활용해 javascript가 이해할 수 있는 array로 변환한다.

localStorage에 어떠한 값도 저장되어 있지만으면 null이므로,  
if문으로 값이 있는 경우의 조건을 작성한다.

forEach문으로 array의 각 item에 대해 함수를 실행할 수 있다.
parsedToDos array 내부의 item들을 list에 뿌려준다.
코드에서 작성한 paintToDo 함수는 화면에 li를 그려주는 역할이기 때문에 forEach문에서 함수를 호출한다.

문제점: 새로운 값을 저장할 경우 localStorage에 저장되는 값들을 덮어씌우게 된다.
이 문제점의 이유는 브라우저가 실행될 때 toDos array의 값이 항상 비어있으므로,
newToDo를 작성하고 form을 submit할 때마다 비어있는 array에 값이 push되기 때문에 새로운 값만 저장된다.

해결방법: 브라우저가 실행될 때 toDos를 const가 아닌 let으로 값이 업데이트 될 수 있도록 변경한다.
localStorage에 toDo값이 들어있으면 toDos에 parsedToDos값을 넣어서 이전에 있던 값들을 복원한다.

deleteing ToDo List:  
element가 만들어질 때 각각의 li item들에 랜덤한 id값을 설정해 중복되는 li를 구분한다.

form을 submit할 때 todolist의 text를 push하지 않고, object push하기.
Date.now()는 밀리초(1000분의 1초)를 주는 함수이다.

ToDo list를 지울 때마다 localStorage 업데이트 하기.
클릭한 X버튼의 id 얻기.

filter()를 활용해 지우고 싶은 item을 제외하고 새 array만든다.

```javascript
toDos = toDos.filter((toDo) => toDo.id !== li.id);
```

현재 클릭한 li.id와 다른 toDo는 남겨두고 새로운 배열을 만든다.
li에 들어있는 id의 값은 string으로 저장되어 있으므로 number type으로 변환하고  
다시 localStorage에 저장한다.

### 날씨 API 활용

user의 위치 좌표를 가져온다.
navigator.geolocation.getCurrentPosition()
user의 위치 좌표를 나타내주는 함수.

```javascript
navigator.geolocation.getCurrentPosition(success, error);
```

getCurrentPosition()은 2개의 argument가 필요하다.
첫 번째 모든 게 잘 됐을때 실행 될 함수, 두 번째 에러가 발생했을 때 실행 될 함수.

https://openweathermap.org/api 로그인 후 API 활용.  
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}  
해당 주소를 변경하여 사용.

api key를 그대로 노출하면 개인정보유출 위험이 있으므로 api key를 안전하게 숨겨서 github에 파일을 업로드해야 한다.

1. apikey를 저장해둘 js파일을 생성.
2. html에서 js연결
3. .gitignore 파일에서 js파일 숨김.
