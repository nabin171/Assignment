// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: "John", age: 30 };
specifyAgeGroup(person1);

function specifyAgeGroup(person) {
  if (person.age >= 0 && person.age <= 12) {
    console.log("Child");
  } else if (person.age >= 13 && person.age <= 19) {
    console.log("Teen");
  } else if (person.age >= 20 && person.age <= 59) {
    console.log("Adult");
  } else {
    console.log("Senior");
  }
}

// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };

const totalNumber = (inventory) => {
  let { apples, bananas, oranges } = inventory;
  let sum = apples + bananas + oranges;
  return sum;
};

console.log(totalNumber(inventory2));

// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: "Alice", student2: "Bob", student3: "Emma" };

console.log(studentNames(students3));

function studentNames(students) {
  let studentsNamesArray = Object.values(students);
  return studentsNamesArray;
}

// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: "John", age: 25, city: "New York" };

checkForValues(details4);

function checkForValues(details) {
  for (let key in details) {
    if (details[key] === null) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 350
const products5 = {
  product1: { name: "Laptop", price: 800 },
  product2: { name: "Phone", price: 100 },
  product3: { name: "Tablet", price: 150 },
};

console.log(calculatesAveragePrice(products5));

function calculatesAveragePrice(products) {
  let { product1, product2, product3 } = products;
  let averagePrice = (product1.price + product2.price + product3.price) / 3;
  return averagePrice;
}

// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };

console.log(findHighestScore(scores6));

function findHighestScore(scores) {
  let { math, science, english } = scores;
  if (math > science > english) {
    return math;
  } else if (science > math > english) {
    return science;
  } else {
    return english;
  }
}

// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = {
  emp1: { name: "John", salary: 60000 },
  emp2: { name: "Alice", salary: 50000 },
  emp3: { name: "Bob", salary: 55000 },
};

console.log(calculateAverageSalary(employees7));

function calculateAverageSalary(employees) {
  let objectLength = Object.keys(employees).length;
  let sum = 0;
  for (let emp in employees) {
    sum += employees[emp].salary;
  }
  let averageSalary = sum / objectLength;
  return averageSalary;
}

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: "John", age: 25, city: "New York" };

console.log(sortArray(data8));

function sortArray(data) {
  let dataArray = Object.values(data);
  let sortedArray = dataArray.sort();
  return sortedArray;
}

// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: "Laptop", quantity: 2, price: 75 };

console.log(totalCost(order9));

function totalCost(order) {
  let total = order.quantity * order.price;
  return total;
}

// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = {
  rent: 200,
  groceries: 150,
  utilities: 100,
  entertainment: 50,
};

console.log(totalAmount(expenses10));

function totalAmount(expenses) {
  let { rent, groceries, utilities, entertainment } = expenses;
  let totalAmount = rent + groceries + utilities + entertainment;
  return totalAmount;
}
