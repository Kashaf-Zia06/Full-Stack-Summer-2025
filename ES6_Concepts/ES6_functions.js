// ES6 Array Methods Examples

// 1. map(): transform each element in an array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// 2. filter(): select elements based on a condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [2, 4]

// 3. reduce(): reduce array to a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 15

// 4. forEach(): loop through array (no return)
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// 5. find(): return first element that satisfies condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First Even:", firstEven); // 2

// 6. some(): check if at least one element passes condition
const hasNegative = numbers.some(num => num < 0);
console.log("Has Negative?", hasNegative); // false

// 7. every(): check if all elements pass condition
const allPositive = numbers.every(num => num > 0);
console.log("All Positive?", allPositive); // true

// 8. includes(): check if value exists
const hasThree = numbers.includes(3);
console.log("Includes 3?", hasThree); // true

// 9. sort(): sort array elements
const sorted = [...numbers].sort((a, b) => b - a); // descending
console.log("Sorted Descending:", sorted); // [5, 4, 3, 2, 1]

// 10. flat(): flatten nested arrays
const nested = [1, 2, [3, 4], [5, [6]]];
const flatArray = nested.flat(2);
console.log("Flattened:", flatArray); // [1, 2, 3, 4, 5, 6]

// BONUS: chaining methods
const processed = numbers
  .map(n => n * 2)
  .filter(n => n > 5)
  .reduce((acc, curr) => acc + curr, 0);
console.log("Chained Result:", processed); // 24 (6 + 8 + 10)
