const me = {
  name: "김씨",
  age: 25,
  job: "개발자",
  height: 173.4,
  hobby: ["fingerstyle", "game"],
  print: function () {
    console.log("name: ", this.name);
    console.log("age: ", this.age);
    console.log("job: ", this.job);
    console.log("height: ", this.hieght + "cm");
    console.log("hobby: ", this.hobby);
  },
};

me.print();

function add(a, b) {
  return a + b;
}

console.log("10 + 5 =", add(10, 5));
