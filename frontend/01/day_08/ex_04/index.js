const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  var answer = [];

  return answer;
}

// function solution(record) {
//     // console.log(record); // 1. 매개변수를 출력;
//     // 2. split을 알아야함. (문자열을 쪼개서 배열로 만드는 메서드)
//     // -> LLM과 스무고개 하세요 (나한테 적절하게 조금씩 맞출 수 있게 힌트를 줘봐. 풀어달라고 하거나 한 번에 큰 힌트를 말고, 그 단계와 관련된 조금씩에 생각 확정 -> 문자열이란 건 아니까... 그것과 관련된 힌트들을 받아서 추론)
//     // 최종 닉네임 4.
//     const idToName = new Map();
//     const msg = []; // 최종 메세지

//     for (const r of record) { // 3. 한줄 한줄 쪼개서 (이니셜)
//         // console.log(idToName);
//         // console.log(r);
//         // console.log(r.split()); // "" (X)
//         // console.log(r.split(" ")); // " " (O)
//         const action = r.split(" ")[0];
//         const id = r.split(" ")[1];
//         const name = r.split(" ")[2];
//         // 5.
//         if (action == 'Enter' || action == 'Change') {
//             idToName.set(id, name); // set(a, b)
//             // a라고 하는 key에 b라는 value를 넣는다
//             // 있어도 덮어쓴다 없으면 그냥 넣는다
//             // 업데이트 된다 (갱신 된다)
//         }
//     }
//     // console.log(idToName);

//     for (const r of record) { // 3. 한줄 한줄 쪼개서 (이니셜)
//         // console.log(msg);
//         // console.log(r);
//         // console.log(r.split()); // "" (X)
//         // console.log(r.split(" ")); // " " (O)
//         const action = r.split(" ")[0];
//         const id = r.split(" ")[1];
//         // const name = r.split(" ")[2];
//         // 6
//         if (action == 'Enter') {
//             // map.get(key) -> 값.
//             msg.push(`${idToName.get(id)}님이 들어왔습니다.`);
//         } else if (action == 'Leave') {
//             msg.push(`${idToName.get(id)}님이 나갔습니다.`);
//         }
//     }
//     // console.log(msg);
//     return msg;
// }

// 1. 일단 들숨에 콘솔찍기 날숨엔 주석 달기
// -> AI한테 어디서 주석이랑 어디서 출력 달아봐? -> 너무 의존하는 것 같으면
// 풀이를 물어보지말고, 출력과 주석 시점을 물어봐...
// 2. 자료구조나 핵심풀이 기법만 물어보기 (이게 문제의 70%를 결정함)
// - 이걸 랜덤으로 추출해줘 혹은 만들어줘 혹은 모르는 상태에서 랜덤으로 하고 내가 맞춰보기
// 3. 디버그 모드. 중단점. (주로 인텔리제이와 파이참) -> 일단 멈추고 중간중간의 데이터 변화나 기타 흐름을 봄
// -> 내 생각의 흐름과 실제 프로그램의 흐름을 일치시킴.
