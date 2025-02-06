console.log("여기서");
myFunc(); //  호이스팅의 예시

//  함수 선언과 함수 표현식
function myFunc() {
  console.log("myfunc");
}

console.log("저기서");
myFunc; //  객체
console.log(myFunc); //  객체 상태(타입) 자체 출력
myFunc(); //  호출
console.log(myFunc()); //  호출 + log() 출력

//  이 경우는 호이스팅 안됨
//  ReferenceError: Cannot access 'myFunc2' before initialization
// myFunc2();
const myFunc2 = function () {
  console.log("myfunc2");
};
myFunc2();

//  아래처럼 오버로딩된 경우 가장 마지막으로 정의된 함수가 호이스팅됨.
merge("파이썬", "SQL");

function merge(a, b) {
  console.log(`${a} and ${b} is merged.`);
}

function merge(a, b) {
  console.log(`${a} and ${b} is merged 2.`);
}

const merge2 = (a, b) => {
  console.log(`${a} and ${b} is merged 3.`);
};

merge2("자바", "도커");

//  객체 형태로 반환
const merge3 = (a, b) => {
  console.log(`${a} and ${b} is merged 3.`);
  return "결과";
};

console.log(merge3("C언어", "파이썬"));

//  객체가 아닌 형태로 반환
const merge4 = (a, b) => a + b;
console.log(merge4("B언어", "A언어"));

function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3);

//  undefined
//  1. 객체 등에서 키나 프로퍼티 빼먹은 이슈 (or DOM에서 id, class 빼먹은 경우)
//  2. 함수나 메서드, 생성자에서 파라미터를 누락시킴
//  3. 비동기 처리 시 제대로 동기 처리나 큐 / 스레드 처리를 못한 경우

//  클로저?
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
