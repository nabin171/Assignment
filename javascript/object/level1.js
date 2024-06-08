// Q1: Retrieve the value of the 'model' property from the 'car' object.
// Expected output:
// 'Civic'
const car = { make: "Honda", model: "Civic", year: 2020 };
let { model } = car;
console.log(model);

// Q2: Add a new property 'color' with the value 'red' to the 'shirt' object.
// Expected output:
// { size: 'large', material: 'cotton', color: 'red' }
const shirt = { size: "large", material: "cotton" };
shirt.color = "red";
console.log(shirt);

// Q3: Calculate the total price by multiplying the 'quantity' and 'price' properties of the 'product' object.
// Expected output:
// 400
const product = { name: "Laptop", quantity: 2, price: 200 };
const { quantity, price } = product;
const totalPrice = quantity * price;
console.log(totalPrice);

// Q4: Update the value of the 'age' property in the 'person' object to 35.
// Expected output:
// { name: 'Alice', age: 35, city: 'New York' }
const person = { name: "Alice", age: 30, city: "New York" };
person.age = 35;
console.log(person);

// Q5: Remove the 'price' property from the 'book' object.
// Expected output:
// { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  price: 15,
};
delete book.price;
console.log(book);

// Q6: Retrieve the value of the 'department' property from the 'employee' object.
// Expected output:
// 'HR'
const employee = { name: "John", age: 28, department: "HR", salary: 60000 };
console.log(employee.department);

// Q7: Add a new property 'size' with the value 'large' to the 'box' object.
// Expected output:
// { type: 'box', dimensions: { length: 10, width: 8, height: 6, size: 'large' } }
const box = { type: "box", dimensions: { length: 10, width: 8, height: 6 } };
box.dimensions.size = "large";
console.log(box);

// Q8: Concatenate the 'firstName' and 'lastName' properties of the 'person' object with a space in between.
// Expected output:
// 'John Doe'
const person = { firstName: "John", lastName: "Doe", age: 25 };
const { firstName, lastName } = person;
console.log(firstName + " " + lastName);

// Q9: Increment the value of the 'quantity' property in the 'cart' object by 1.
// Find price of an 'item' and update the value of 'total' property with increase in 'quantity'.
// Expected output:
// { item: 'Book', quantity: 3, total: 45 }

                            // const cart = { item: "Book", quantity: 2, total: 30 };
                            // let { quantity: bookQuantity, total } = cart;
                            // let bookPrice = total / bookQuantity;
                            // bookQuantity++;
                            // total = bookQuantity * bookPrice;
                            // cart.quantity = bookQuantity;
                            // cart.total = total;
                            // console.log(cart);

const cart = { item: "Book", quantity: 2, total: 30 };
singlePrice = cart.total / cart.quantity;
cart.quantity++;
cart.total = cart.quantity * singlePrice;
console.log(cart);

// Q10: Check if the 'price' property in the 'product' object is less than 100.
// Expected output:
// true
const product10 = { name: "Phone", price: 90 };
lessThanHundred = product10.price < 100;
console.log(lessThanHundred);
