const obj = {
  name: "kim",
  age: 15,
  a: "1",
  b: "2",
  c: "3",
};

console.log(obj);

// 키 출력
console.log("keys: ", Object.keys(obj));
// 값 출력
console.log("values: ", Object.values(obj));
// 키, 값 배열 출력
console.log("entries: ", Object.entries(obj));

const _keys = Object.keys(obj);

for (const v of _keys) {
  console.log("v:", v);
}

for (const k in _keys) {
  console.log("k:", k);
}
