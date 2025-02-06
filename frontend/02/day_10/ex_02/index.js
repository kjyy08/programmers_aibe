const alertFunc = function () {
  console.log("alert");
  alert("alert");
};

const promptFunc = function () {
  const inputText = prompt();
  alert(inputText);
};

alertFunc();
promptFunc();
