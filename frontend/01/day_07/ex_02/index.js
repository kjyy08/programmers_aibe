//  string
let emptyStr = "";
let text = "템플릿 리터럴 문법";
console.log(`hello ${text}`); //  템플릿 리터럴 문법 (변수를 ${} 안에 넣어 바로 표현하고 ``사용)

//  bool
let isTrue = true;
console.log(`${isTrue}`);

//  undefined
let mem;
console.log("메모리: ", mem); //  undefined 출력

//  null
let isNull = null;
console.log("null: ", isNull); //   null 출력

//  null value
console.log(null == 0); //  이 경우는 false
console.log(null == undefined); //  이 경우는 true

//  object
let person = {
  name: "kim",
  job: "student",
};
console.log(person);

//  array
let names = ["kim", "lee", "park", "son"];
names.push(3);
console.log(names);
console.log(names.at(3, "asdf"));

//  pow
let pow = 10 ** 3;
console.log("pow: ", pow);

let divide = 10 / 7; // parseInt(10 / 7);
console.log("div: ", divide);

//  느슨한 동등 연산자(loose equality comparison), 크기만 비교
console.log("느슨한 동등 연산자: ", "1" == 1.0);
console.log(`1 == "1.0"`, 1 == "1.0");

//  엄격한 동등 연산자(strict equality comparison), 크기, 자료형 둘 다 비교
console.log("엄격한 동등 연산자: ", "1" === 1.0);

console.log("a > b: ", "a" <= "b");

//  AND(&&) OR(||) -> 단축 평가
//  ★앞의 조건이 false면 뒤의 연산 무시
//  https://menduck.tistory.com/entry/9%EC%9E%A5-%EB%8B%A8%EC%B6%95-%ED%8F%89%EA%B0%80
console.log("1 > 2 &&  2 < 3: ", 1 > 2 && 2 < 3);
