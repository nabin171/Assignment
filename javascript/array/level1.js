//Q1 find list of numbers divisible by 3

const arr = [3, 5, 1, 2, 9, 12];
//write your code here
console.log(arr);

const filteredArr = arr.filter((item, id) => {
  if (item % 3 === 0) {
    return item;
  }
});

console.log(filteredArr);
