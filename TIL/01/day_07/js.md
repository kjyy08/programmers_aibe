# Java Script

## 변수

```js
var a = 10;
let b = 20;
const c = 30;
```

- **`var`**: 함수 or 전역 스코프를 가지며 재선언과 재할당 가능

- **`let`**: 블록 스코프, 재할당은 가능하지만 재선언은 불가능

- **`const`**: 블록 스코프, 재할당과 재선언 모두 불가, 상수에 주로 사용

## js의 **const** vs 자바의 **fianl**

- `const`: 컴파일 시에 값을 결정함, 상수 할당에 적합
- `final`: 런타임 시에 값을 결정함
- 비교 예시

  ```textplain
  final finalTime = DateTime.now(); // 실행 중 시간이 결정되므로 사용 가능
  const constTime = DateTime.now(); // error 발생, 컴파일 시 시간을 담을 수가 없음
  ```

## 호이스팅(Hoisting)

- 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미

- `var`의 경우 호이스팅 시 `undefined`로 변수를 초기화

- `let`과 `const`의 경우 호이스팅 시 변수를 초기화하지 않음

- 호이스팅 예시

  ```js
  console.log(x); // 출력: undefined
  var x = 5;

  console.log(y); // 오류: Cannot access 'y' before initialization
  let y = 10;

  function sayHello() {
    console.log("Hello!");
  }
  sayHello(); // "Hello!" 출력
  ```

## 자료형

## 알쓸신잡

```js
console.log(typeof null);
```

위의 결과는 `object`가 출력되는데 이는 버그다
