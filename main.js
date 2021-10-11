// console.log("hello world");
// console.error("Yes");

let x = 2;
const y = 4;

// console.log(y);

//String, Number, Boolean, null, undefined

// const name = 'John';
// const age = 10;
// const rating = 4.5;
// const isCool = true;
// const t = undefined;
// const v = null;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isCool);
// console.log(typeof age);
// console.log(typeof v);

// console.log(`I am called ${name} and my age is ${age}`);

// const s = ['apple', 'google', 'micrsoft', 'techlive'];

const s = "apple, google, micrsoft, techlive";
// console.log(s.split(', '))

//object literals
const person = {
  firstName: "May",
  lastName: "Cal",
  age: 30,
  hobbies: ["music", "gaming", "reading"],
  address: {
    street: "24 Dome Gym",
    city: "Accra",
    region: "GA",
  },
};

person.email = "may@gmail.com";
person.address.home = "Pillar 2";
console.log(person);
console.log(JSON.stringify(person));

// console.log(person.hobbies[0])
// console.log(person.address.city)

// const {firstName, lastName} = person;
// console.log(firstName)

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with Boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "See family",
    isCompleted: false,
  },
];

// console.log(todos);

const todoJson = JSON.stringify(todos);
// console.log(todoJson);

//looping
for (let i = 0; i <= 10; i++) {
  // console.log(` for loop ${i}`);
}

//while loop
let i = 0;
while (i <= 10) {
  // console.log(` while loop ${i}`);
  i++;
}

//recommended, high-order-arrays
//forEach, map, filter
// === is used to validate types / value itself
const todoItems = todos.forEach(function (todo) {
  console.log(todo.id);
});

//map => returns array
const todoText = todos.map(function (todo) {
  return todo.text;
});
// console.log(todoText);

//filter
const todoToBeComplted = todos.filter(function (todo) {
  return todo.isCompleted === false;
});
// console.log(todoToBeComplted);

//filter and map
const todoToBeCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === false;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoToBeCompleted);

//reduce

const aArray = [1, 2, 10, 16];

const reducerArray = aArray.reduce((accumulator, item) => {
  return accumulator + item;
}, 12);

console.log("reduce", reducerArray);

//arrow function
//=> is called fat arrow
const addNum = (num1 = 1, num2 = 1) => {
  return num1 + num2;
};
// console.log(addNum());
// console.log(addNum(4,9));

//DOM

// console.log(window);
//single element

const form = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
// console.log(form);

// console.log(document.querySelector('h1'));

//multiple select
// console.log(document.querySelectorAll('.item'));

// const ul = document.querySelector('.items');
// // ul.remove()
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'May'
// ul.lastElementChild.innerHTML = '<h1>Yes</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

//add event listener to button
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Cal</h1>';

// });

// form.addEventListener('submit', onSubmit());

// function onSubmit(event) {
//     event.preventDefault();
//     // console.log(nameInput);

// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(nameInput.value);

//     if(nameInput.value === '' || emailInput.value === ''){
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';

//         //hide after 3x
//         setTimeout(() => msg.remove(),5000);
//     }else{
//         const li = document.createElement('li')
//     }
// });

form.addEventListener("submit", onSubmits);

function onSubmits(e) {
  e.preventDefault();
  console.log("yes");

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.textContent = "All fields are required!";

    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    //clear fields
    nameInput.value = "";
    nameInput.value = "";
  }
}

let output = (function messageFunction(message) {
  return message + " World!";
})("Hello");

let may = {
  name: function username(name) {
    console.log(`My name is ${name}`);
  },

  addition: function add(num1, num2) {
    return num1 + num2;
  },
};

may.name("Elorm");
// may.addition(2, 5);

// arrow function
const sumNum = (a, b) => {
  return a + b;
};

// or

const sumNumbers = (a, b) => a + b;

let a = 2;
const result = a > 20 ? "yes" : "No ";

function moveCommand(direction) {
  let outcome;
  switch (direction) {
    case "forward":
      outcome = "climb up";
      break;

    default:
      outcome = "Enter valid direction";
      break;
  }
  return outcome;
}

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
// newFunc();

// curring
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
//usage curriedMultiply(5)(2)
const multiplyBy2 = curriedMultiply(2);
//usage multiplyBy2(8)

//compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`I am ${this.name} and age ${this.age}`);
  }
}

//inheritance
class Boy extends Person {
  constructor(name, age) {
    super(name, age);
  }

  play() {
    console.log(`I am a boy age ${this.age}`);
  }
}

//
const p = new Person("kofi", 2);
const b = new Boy("Elorm", 36);

//includes
const pets = ["baird", "cat"];
pets.includes("cat");
