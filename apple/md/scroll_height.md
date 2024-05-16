## 스크롤 높이 세팅

브라우저 창사이즈의 배수값으로 세팅하기.
애니메이션 요소가 있는 구간은 type을 sticky, 애니메이션 요소가 없다면 normal로 설정.

sceneInfo배열에 htightNum을 브라우저 높이의 5배로 scrollHeight 세팅함.

```javascript
function setLayout() {
  // 각 스크롤 섹션의 높이 세팅
  for (let i = 0; i < sceneInfo.length; i++) {
    sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
  }
  // console.log(sceneInfo);
}
setLayout();
```

for문을 활용해 각 스크롤 섹션의 높이를 window.innerHeight의 5배로 설정.

```javascript
objs: {
  container: document.querySelector('#scroll-section-0'),
}
```

각 섹션마다 높이 설정을 위해  
objs속성에 객체를 만들어서 html객체들을 모아둔다.

#scroll-section-0 ~ #scroll-section-3까지 모두 세팅.

```javascript
function setLayout() {
  // 각 스크롤 섹션의 높이 세팅
  for (let i = 0; i < sceneInfo.length; i++) {
    sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
  }
}
```

각 container에 scrollHeight를 세팅한다.

```javascript
window.addEventListener("resize", setLayout);
```

윈도우창이 리사이즈 될 때마다 스크롤 섹션의 높이 값 세팅.
