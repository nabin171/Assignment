// Level 2 Questions

// Q1: Extract and return the 'firstName' and 'lastName' properties as a single string from the 'person' object.
// Expected output:
// 'John Doe'
const person = { firstName: "John", lastName: "Doe", age: 30 };
let { firstName, lastname } = person;
console.log(firstName + " " + lastName);

// Q2: Create a new object by merging the 'details1' and 'details2' objects propperties.
// Expected output:
// { name: 'John', age: 25, city: 'New York', hobby: 'Soccer' }
const details1 = { name: "John", age: 25 };
const details2 = { city: "New York", hobby: "Soccer" };
const details3 = { ...details1, ...details2 };
console.log(details3);

// Q3: Add a new property 'quantity' with the value 10 to the 'product' object, if it doesn't already exist.
// Expected output:
// { name: 'Laptop', price: 800, quantity: 10 }
const product3 = { name: "Laptop", price: 800 };
if (!product3.quantity) {
  product3.quantity = 10;
  console.log(product3);
} else {
  console.log(product3);
}

// Q4: Check if all properties ('make', 'model', 'year') exist in the 'car' object.
// Expected output:
// false
const car = { make: "Toyota", year: 2021 };
if (car.make && car.model && car.year) {
  console.log(true);
} else {
  console.log(false);
}

// Q5: Create a copy of the 'student' object without modifying the original object.
// Expected output:
// { name: 'Alice', age: 20, grade: 'A' }
const student = { name: "Alice", age: 20, grade: "A" };
let copyOfStudent = { ...student };
console.log(copyOfStudent);

// Q6: Check if the 'address' property in the 'user' object is a string.
// Expected output:
// true
const user = { name: "John", age: 30, address: "123 Main St" };
console.log(typeof user.address === "string");

// Q7: Retrieve the keys of the 'inventory' object as an array.
// Expected output:
// ['apples', 'bananas', 'oranges']
const inventory = { apples: 10, bananas: 5, oranges: 8 };
const result = Object.keys(inventory);
console.log(result);

// Q8: Create an array of all the property values from the 'data' object.
// Expected output:
// ['John', 25, 'New York']
const data = { name: "John", age: 25, city: "New York" };
const propertyNames = Object.values(data);
console.log(propertyNames);

// Q9: Check if any property in the 'book' object has a value of null.
// Expected output:
// false
const book = { title: "JavaScript Basics", author: "John Smith", year: 2020 };

for (let key in book) {
  if (book[key] === null) {
    console.log(true);
    return;
  }
}
console.log(false);

// Q10: Reverse the 'fullName' property value in the 'person' object.
// Expected output:
// 'Doe John'
const person10 = { fullName: "John Doe" };
let reversedName = person10.fullName.split(" ").reverse().join(" ");
console.log(reversedName);
