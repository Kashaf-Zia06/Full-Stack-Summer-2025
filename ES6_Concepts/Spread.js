// Spread Operator Examples

// 1. Spread in Arrays
const nums1 = [1, 2, 3];
const nums2 = [4, 5];
const combined = [...nums1, ...nums2];
console.log("Combined Array:", combined); // [1, 2, 3, 4, 5]

// 2. Spread in Objects
const user = { name: "Kashaf", age: 20 };
const updatedUser = { ...user, city: "Karachi" };
console.log("Updated User:", updatedUser); 
// { name: "Kashaf", age: 20, city: "Karachi" }

// 3. Copying Arrays
const original = [10, 20, 30];
const copy = [...original];
copy.push(40);
console.log("Original:", original); // [10, 20, 30]
console.log("Copy:", copy);         // [10, 20, 30, 40]

// 4. Spread in Function Arguments
function sum(a, b, c) {
  return a + b + c;
}
const values = [5, 10, 15];
console.log("Sum:", sum(...values)); // 30
