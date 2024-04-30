## 그림판 만들기

canvas API 사용.
getContext는 canvas에서 사용할 브러쉬라고 생각하면 된다.

```javascript
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
```

### 1. Mouse Painting

마우스를 클릭한 채로 움직일 때 그리도록 만들기.
mousemove, mousedown, mouseup event 활용

```javascript
let isPainting = false;

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return;
    // 만약 isPainting이 true라면, stroke를 사용해 선을 그리고 함수 종료.
  }
  ctx.moveTo(e.offsetX, e.offsetY);
  // 만약 isPainting이 false라면, 브러쉬만 움직인다.
}
```

user가 마우스를 움직이고,
만약 isPainting 변수가 false이면 연필이 움직이기만 하고,
isPainting 변수가 true일 때 선을 그린다.

!문제점: isPainting이 false가 아닌 true인 상태.  
canvas밖으로 마우스를 클릭한채로 이동하게되면 onMouseUp event가 실행되지 않음.  
즉, canvas로 돌아와서 더 이상 클릭을 하지 않더라도 선이 그려진다.

1. 문제해결 첫 번째 방법  
   canvas.addEventListener를 사용해 마우스가 떠났을 때를 감지

```javascript
canvas.addEventListener("mouseleave", onMouseUp);
```

2. 문제해결 두 번째 방법
   canvas에 mouseup event를 주지 않고,  
   document에 mouseup event를 주게되면 어디에서든지 마우스에서 손을 떼면 isPainting은 false가 된다.

해당 코드에서는 첫번째 방법으로 해결함.

### 2. Modify line thickness

그림판에 선의 굵기를 수정할 수 있는 input 추가하기.

```html
<input type="range" id="line-width" min="1" max="10" value="5" />
```

최소값/최대값/초기값

```javascript
function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value;
}
$lineWidth.addEventListener("change", onLineWidthChange);
```

선을 그릴때 input의 value값으로 그려주는데 이 경우 새로 그려지는 선들도 value를 변경할 때마다 같이 변경되므로,   
이전에 그려진 선과 새로운 선의 연결을 끊어줘야한다.
(모든 line들은 같은 path로 그려지기 때문이다.)

```javascript
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}
```

user가 선을 그리고 그리는게 끝나면, 새로운 path를 시작하도록 해야한다.

```html
<input type="range" id="line-width" min="1" max="10" value="5" step="0.5" />
```

range input의 또 다른 attribute인 step을 지정해주면 증가되는 정도의 값을 지정해줄 수 있다.
