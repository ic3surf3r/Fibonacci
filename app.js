const container = document.querySelector(".container");
const form = document.querySelector("form");
const inputField = document.querySelector(".input-field");
const box = document.querySelector(".box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const num = inputField.value;
  const res = fibonacci(num);
  const list = document.createElement("ul");
  box.innerHTML = "";
  res.forEach((item) => {
    list.innerHTML = list.innerHTML + `<li>${item}</li>`;
  });
  inputField.value = "";
  box.appendChild(list);
  return;
});

function fibonacci(size) {
  var first = 0,
    second = 1,
    next,
    count = 2,
    result = [first, second];

  if (size < 2) {
    return "The request was made but it was not good";
  }

  while (count++ < size) {
    next = first + second;
    first = second;
    second = next;
    result.push(next);
  }

  return result;
}
