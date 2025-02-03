# 용어 정리

| 용어                | 간단 요약                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| 검색엔진최적화(SEO) | 검색 엔진이 이해하기 쉽도록 웹의 구조와 페이지를 개선해 검색 결과 상위에 노출될 수 있도록 하는 작업 |
| Bullet Point        | 말머리부호, 목차                                                                                    |
| Nut Shell           | 핵심만 작성하는 것                                                                                  |
| CSS in JS           | JavaScript 안에서 CSS 스타일을 작성하고 조작하는 방법으로 React, Vue.js 등에서 주로 사용함          |
| Styled Component    | React 애플리케이션에서 스타일 작성을 위한 CSS in JS 라이브러리                                      |
| Emmet               | HTML 태그 작성을 빠르게 작성할 수 있도록 도와주는 플러그인                                          |

# HTML이란?

→ 웹 페이지를 구성하는 마크업 언어

- 태그와 속성으로 문법이 이뤄짐

```html
<태그 속성="값">내용</태그>
```

> 속성이란?
>
> Attribute: 어떤 값, HTML에서 사용
>
> Property: 미리 정의된 값, CSS에서 사용

## HTML 기본 구조

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>타이틀 제목</title>
  </head>
  <body>
    <!-- 웹 페이지 내용 -->
  </body>
</html>
```

## HTML 주석

```html
<!-- 주석 내용 입력 -->
```

## HTML 태그

- 웹 페이지의 구조와 내용을 정의하는 기본 구성
- `<>`를 사용해서 표현함

```html
<태그>내용</태그>
```

- 열린 태그와 닫힌 태그
  - 열린 태그, 닫힌 태그가 같이 있는 요소
    ```html
    <태그명>내용<태그명>
    ```
  - 빈 요소
    ```html
    <태그 />
    ```

## 주요 태그들

### 문서 구조와 관련된 태그

- `<html>`: HTML 문서 작성을 위한 필수 태그
- `<head>`: 문서의 메타데이터 내용을 포함
- `<body>`: 웹에 표시되는 콘텐츠
- `<div>`: 영역을 구분하기 위한 태그로 별 다른 기능은 없음
- `<span>`: 인라인으로 주어진 데이터만큼만 공간을 가지는 태그로 줄넘김 처리가 없음

### 텍스트 관련 태그

- `<h1>` ~ `<h6>`: 제목을 나타내는 태그로 1 ~ 6의 크기를 지정 가능
- `<p>`: 단락을 나타내는 태그
- `<strong>`: 중요한 텍스트를 강조하는데 사용하고 SEO에서 주로 사용하기에 `<b>` 태그보다 자주 사용함

### 리스트 관련 태그

- `<ul>`: 순서가 없는 리스트를 나타내는 태그
- `<ol>`: 순서가 있는 리스트를 나타내는 태그
- `<li>`: 리스트의 각 항목을 나타내는 태그
  ```html
  <!-- ul>li*2^ol>li*2 -->
  <ul>
    <li>사과</li>
    <li>바나나</li>
  </ul>
  <ol>
    <li>수박</li>
    <li>오렌지</li>
  </ol>
  ```

### 링크, 이미지 관련 태그

- `<a>`: 하이퍼링크를 생성하는 태그
  ```html
  <!-- a[href="https://programmers.co.kr"]{text} -->
  <a href="www.naver.com">네이버 접속하기</a>
  ```
- `<img>`: 이미지를 삽입하는 태그
  ```html
  <img src="./image.jpg" alt="이미지 로드에 실패한 경우 보여질 텍스트" />
  ```

### 테이블 관련 태그

- `<table>`: 테이블 구조 정의
- `<tr>`: 테이블의 행
- `<th>`: 테이블의 헤더 셀, 굵게 표시되고 중앙 정렬이 기본값
- `<td>`: 행 내의 데이터 셀
  ```html
  <!-- table>tr*2>th*3 -->
  <!-- tr>td*3^tr>td*3 -->
  <!-- (tr>td*3)*2 -->
  <table>
    <tr>
      <th>이름</th>
      <th>나이</th>
      <th>직업</th>
    </tr>
    <tr>
      <td>김개발</td>
      <td>27</td>
      <td>개발자</td>
    </tr>
    <tr>
      <td>강개발</td>
      <td>22</td>
      <td>학생</td>
    </tr>
  </table>
  ```

## block, inline, inline-block

### block 속성

- 혼자서 한 줄을 차지함
- 연속적 배치 시 세로로 배치됨
- `<style>`태그를 사용해서 `width`, `height` 지정 가능
- `<div>`태그를 사용해서 영역 설정하면 그 영역은 `block` 속성이 됨

### inline 속성

- 한 줄에 여러 요소 배치 가능
- 연속적으로 배치 시 가로로 배치됨
- `<style>`태그를 사용해서 `width`, `height` 변경 불가능
- `<span>`태그를 사용했을 때 그 영역은 `inline` 속성을 가짐

### inline-block 속성

- 한 줄에 여러 요소를 배치할 수 있고 가로로 배치됨
- `inline` 속성과 다르게 너비 및 높이를 지정하고 다양한 스타일 적용 가능
- `style` 태그를 사용해서 `display: inline-block;` 작성 시 적용 가능

## form, input

### form 관련 태그

- `<form>`: 사용자 입력을 통해 서버로 전송하는 대화형 영역
- `action` 속성을 이용해 전송할 URL을 지정하고 `method` 속성을 통해 전송 방식을 결정함
  ```html
  <form action="https://search.naver.com/search.naver" method="get">
    <label for="query">검색어</label>
    <input
      id="query"
      type="text"
      name="query"
      placeholder="검색어를 입력하세요"
    />
    <input type="hidden" name="where" value="news" />
  </form>
  ```

### input 관련 태그

- `<input>`: 사용자 입력과 관련된 태그
- `type` 속성을 이용해 사용자로부터 입력받는 형식을 지정 가능

  - `text`: 텍스트 입력
  - `password`: 비밀번호 입력
  - `radio`: 라디오 버튼
  - `checkbox`: 체크 박스
  - `submit`: `form` 전송 버튼

  ```html
  <label for="male">남성</label>
  <input type="radio" id="male" name="gender" value="male" />

  <label for="female">여성</label>
  <input type="radio" id="female" name="gender" value="female" />
  ```

## Favicon, OG

### Favicon

→ 웹 브라우저의 탭, 북마크, 즐겨찾기에 표시되는 아이콘

- 준비목록
  - 정가각형 형태의 아이콘 준비
  - 권장 크기: `16x16`, `32x32`
  - 파일 형식: `.ico`, `.png`, `.svg`
- 추가방법
  1. https://realfavicongenerator.net/ 접속 후 `Pick your favicon image` 클릭
  2. 이미지 업로드 후 `Next` 클릭
  3. 플랫폼별 설정 조정
  4. 생성된 패키지 다운로드 후 HTML 코드 삽입
- 코드 삽입 예시
  ```html
  <link
    rel="icon"
    type="image/png"
    href="./favicon/favicon-96x96.png"
    sizes="96x96"
  />
  <link rel="icon" type="image/svg+xml" href="./favicon/favicon.svg" />
  <link rel="shortcut icon" href="./favicon/favicon.ico" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="./favicon/apple-touch-icon.png"
  />
  <link rel="manifest" href="./favicon/site.webmanifest" />
  ```
- 주의사항
  - 파일의 경로 지정 주의하기
  - 절대 경로가 아닌 상대 경로로 설정하는 것을 습관화하자!

### OG(Open Graph)

→ 페이스북에서 개발한 `meta` 태그로 SNS에서 웹 사이트를 공유할 때 미리보기를 제공

- 특징

  - 소셜 미디어에 콘텐츠 노출을 최적화하여 SEO에 기여
  - 사용자 참여와 클릭율 증가에 도움됨

- 주요 태그

```html
<meta property="og:title" content="title" />
<meta property="og:description" content="content" />
<meta property="og:image" content="https://image-src.com/image.jpg" />
```

1. `title`: 미리보기 타이틀 제목
2. `description`: 미리보기 설명
3. `image`: 미리보기 이미지

## 그 외 태그

### 시맨틱 태그

- `<header>`
- `<nav>`
- `<section>`
- `<article>`
- `<footer>`
