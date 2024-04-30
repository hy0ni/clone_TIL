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
