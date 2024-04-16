## Chrome app 구현하기

### Login 기능

* [login](chrome/js/greetings.js)

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
* [color](chrome/js/clock.js)

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
* [quotes](chrome/js/quotes.js)
```javascript
Math.floor() // 내림처리 한 정수 리턴.
Math.random() // 0~1 사이의 랜덤한 숫자.
```
---

### 랜덤 background image
img요소 생성  
document.createElement('img');

---

### ToDo 리스트
adding ToDo List: li와 span 태그 생성. input value값 넣어주기.  
deleting button: li 삭제 버튼 추가하기. button click event. click시 해당 버튼의 부모인 li 지워주기