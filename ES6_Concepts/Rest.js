// Rest Operator Examples

// 1. Rest in Function Parameters
function printAll(...args) {
  console.log("Arguments:", args);
}
printAll(1, 2, 3, 4); // [1, 2, 3, 4]

// 2. Rest with Named Parameters
function introduce(name, age, ...hobbies) {
  console.log(`${name} is ${age} years old and likes`, hobbies);
}
introduce("Kashaf", 20, "coding", "reading", "writing");

// 3. Destructuring with Rest
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log("First:", first);   // 10
console.log("Second:", second); // 20
console.log("Rest:", rest);     // [30, 40, 50]

// 4. Rest in Objects
const person = { name: "Ali", age: 22, city: "Lahore", profession: "Developer" };
const { name, ...others } = person;
console.log("Name:", name);      // Ali
console.log("Others:", others);  // { age: 22, city: "Lahore", profession: "Developer" }
