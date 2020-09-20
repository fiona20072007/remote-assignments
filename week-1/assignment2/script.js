//assignment 1

function max(numbers) {
  let max = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);

//assignment 2

function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

//1
calculate({ op: "+", n1: 1, n2: 2 });

//2
class Calc {
  constructor(op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
  }
}
const args = new Calc("+", 1, 2);
calculate(args);

//assignment 3

function avg(data) {
  let sum = 0;
  let len = data.products.length;
  for (let i = 0; i < len; i++) {
    sum += data.products[i].price;
  }
  sum = sum / data.size;
  console.log(sum);
}

avg({
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
});

//assignment 4

const headline = document.querySelector(".headline");
const bottonToggle = document.querySelector(".button-toggle");
const exit = document.querySelector(".exit");
const navbar = document.querySelector(".nav-bar");
const callButton = document.querySelector(".call");
const hideBlock = document.querySelector("#hide");

headline.addEventListener("click", () => {
  if (headline.textContent === "Welcome!") {
    headline.textContent = "Have a GoodTime!";
  } else {
    headline.textContent = "Welcome!";
  }
});

bottonToggle.addEventListener("click", () => {
  navbar.style.display = "block";
});

exit.addEventListener("click", () => {
  navbar.style.display = "none";
});

callButton.addEventListener("click", () => {
  hide.style.display = "flex";
});

//assignment 5

function twoSum(nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}
