## Apple site clone coding

css 작성 시  
기본 html의 font-size:14px로 지정.  
현재 적용한 font-size의 비율로 적용하기 font-size는 rem으로 그 외의 값들은 em으로 적용함.

```css
.description strong {
  float: left;
  margin-right: 0.2em;
  font-size: 3rem;
  color: rgb(29, 29, 31);
}
```

위 코드의 경우 height의 값은 3rem으로 기본 폰트 사이즈인 14px의 3배가 적용된다.

1rem은 14px이고,  
3rem => 14 x 3 = 42px  
0.2em => 42 x 0.2 = 8.4px (3rem의 0.2배)

pc버전의 경우 일부(크기가 큰 타이틀의 경우만 뷰포트 단위로 적용) 뷰포트 단위인 vw로 적용함.  
만약 4vw라면 창크기의 4%가 된다. rem은 고정값 (html의 font-size)

### 각 구간별 애니메이션 구현하기

스크롤값에 의해 애니메이션이 재생되도록 해야한다.  
scroll-section 4개의 구간으로 마크업.  
현재 보고있는 구간의 애니메이션만 재생되어야한다.

### #1. 위치가 고정된 요소의 처리

실행되는 구간에 해당되는 sticky-elem클래스를 가진 요소들만
보여지도록 하기.
