// // Global variable
var counter = 5;
console.log(counter);

function sayNumber() {
  // Local variable
  var number = 25;
  console.log(number);
}
sayNumber();

const groceries = ["milk", "cow"];
for (let i = 0; i < groceries.length; i++) {
  console.log(groceries[i]);
}

//Deconstructing

const list = {
  title: "book",
  author: "bilgates",
  rupees: [25, 40],
};

const { title, rupees } = list;
console.log(title, rupees);

const studentData = {
  name: "yahiya",
  age: 22,
  sem: 7,
};

const { name, age, sem } = studentData;
console.log(name, age, sem);

// Arrow function

const town = () => {
  console.log("my town name is humnabad");
};
town();

const learning = () => {
  console.log("learning to ES6");
};
learning();

Concatination;
let name = "yahiya";
console.log(`my name is ${name}`);

// for each loop
const fruits = ["banana", "grapes", "mango", "apple"];
fruits.forEach((items) => {
  console.log(items);
});

const vegitables = ["tomato", "onion", "garlic", "potato"];
vegitables.forEach((product, index) => {
  console.log(`The product is ${product} and the index is ${index}`);
});

// Filter

const skills = ["html", "css", "js", "react", "python"];
const filterList = skills.filter((items) => {
  return items !== "js";
});

console.log(filterList);

const vegitables = ["tomato", "onion", "garlic", "potato"];
const filtervegitables = vegitables.filter((product) => {
  return product === "tomato";
});
console.log(filtervegitables);

// Constructor
class shoppingList {
  constructor(items, quantity, price) {
    this.items = items;
    this.quantity = quantity;
    this.price = price;
  }
}
class productQuality extends shoppingList {
  constructor(items, quantity, price, quality, totalamount) {
    super(items, quantity, price);
    this.quality = quality;
    this.totalamount = totalamount;
  }
}

const mylist = new productQuality(["apple", "banana"], 2, 5, "best", 10);
console.log(mylist);
