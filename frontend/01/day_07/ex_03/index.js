// 조건문
// 비교 연산자, 논리 연산자 (단축 평가), boolean.
let age = 10;
if (age >= 20) {
  console.log("일하러 가야지!");
}
if (age >= 20) {
  console.log("일하러 가야지!");
} else {
  console.log("놀아야지!");
}

// let money = 10000;
// let money = 6000;
let money = 4000;
if (money >= 10000) {
  console.log("고급 자장면을 먹어야지!");
} else if (money >= 5000) {
  console.log("자장면을 먹어야지!");
} else {
  console.log("못 먹겠네 ㅠㅠ");
}

const randNum = Math.floor(Math.random() * 6); // 0 include 포함, 1 exclude 제외
console.log(randNum);
// break가 없으면 해당하는 것 아래로 다 나옴
switch (randNum) {
  case 0:
    console.log("1입니다");
    break;
  case 1:
    console.log("2입니다");
    break;
  case 2:
    console.log("3입니다");
    break;
  case 3:
    console.log("4입니다");
    break;
  case 4:
    console.log("5입니다");
    break;
  case 5:
    console.log("6입니다");
    break;
  default:
    console.log("뭔가 잘못됐습니다");
    break;
}

// 반복문
let w = 0;
while (w < 10) {
  console.log("w", w);
  //   w = w + 1;
  //   w += 1; // 복합대입연산자
  w++; // w--; // 증감연산자
}

let w2 = 2;
while (true) {
  if (w2 > 100) {
    break;
  }
  w2 **= 2;
  console.log(w2);
}

while (true) {
  if (Math.random() > 0.5) {
    console.log("HEAD!");
    break;
  } else {
    console.log("TAIL ㅠㅠ");
  }
}

for (let index = 0; index < 10; index++) {
  if (index % 2 == 0) {
    continue; // 하던거를 일단 멈춰. 근데 반복은 continue. (stop은 하고.)
  }
  console.log("index", index);
  //   break;
}
