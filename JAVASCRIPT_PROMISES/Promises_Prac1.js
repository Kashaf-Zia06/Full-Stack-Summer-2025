/******************************
 * ✅ PROMISES PRACTICE GUIDE *
 * 🔁 By: Kashaf Zia           *
 ******************************/

/*
--------------------------------------
📌 1. Creating a Basic Promise (promOne)
--------------------------------------
This is an example of manually resolving and rejecting a promise.
Note: Only the first call (resolve or reject) will be considered.
*/

const promOne = new Promise(function (resolve, reject) {
    console.log("Async function 1 in promise one...");
    resolve();  // Only this will be processed
    console.log("ASync reject...");
    reject();   // This line is ignored since resolve was already called
});

// Consuming promOne
promOne.then(function () {
    console.log("Promise 1 resolved");
});
promOne.catch(function () {
    console.log("Promise 1 rejected");
});


/*
---------------------------------------------------------------
📌 2. Creating and Consuming a Promise Together (Inline Example)
---------------------------------------------------------------
This is a shorter form where we don't separately store the promise.
*/

new Promise(function (resolve, reject) {
    console.log("Another promise one");
    resolve();
}).then(() => {
    console.log("Promise resolved");
});


/*
--------------------------------------------------
📌 3. Passing Data Through resolve() (promThree)
--------------------------------------------------
You can pass any data/object to the .then() method.
*/

const promThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Sending data via resolve");
        resolve({ username: "Kashaf", age: 20 });
    }, 2000);
});

// Consuming promThree
promThree.then(function (userdata) {
    console.log(userdata); // { username: 'Kashaf', age: 20 }
});


/*
---------------------------------------------------------------
📌 4. Handling Success & Failure (promFour with .then/.catch)
---------------------------------------------------------------
Here we simulate both resolve and reject paths with a condition.
Includes: Chaining and finally() block.
*/

const promFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false; // Change this to `true` to test error path
        console.log("Promise four");
        if (!error) {
            resolve({ username: "KASHAF", age: 20 });
        } else {
            reject("Error occurred!");
        }
    }, 2000);
});

// Consuming promFour with then-chaining and catch
promFour
    .then((userdata) => {
        console.log(userdata);           // Log the full object
        return userdata.username;        // Extract just the name
    })
    .then((data) => {
        console.log(data);              // Output: "KASHAF"
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise either resolved or rejected");
    });


/*
-----------------------------------------------------
📌 5. Using async/await with Promises (consumeFive)
-----------------------------------------------------
Using `await` makes your async code look like synchronous.
Still need to handle errors using try-catch.
*/

const promFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true; // Set to false to test resolve
        console.log("Promise five");
        if (!error) {
            resolve({ language: "JS , Python" });
        } else {
            reject("Error occurred!");
        }
    }, 2000);
});

// Consuming promFive using async/await
async function consumeFive() {
    try {
        let response = await promFive;
        console.log(response); // Output: { language: "JS , Python" }
    } catch (error) {
        console.log(error);
    }
}

consumeFive(); // Async function must be explicitly called


/*
---------------------------------------------------
📌 6. Fetch API Call Example (Using Promises)
---------------------------------------------------
This is an example of fetching data from an API using fetch().
Note: `fetch` returns a Promise and belongs to the browser.
*/

fetch('https://leetcode-stats-api.herokuapp.com/Kashaf_Zia')
    .then((response) => {
        // Response is a readable stream; convert it to JSON
        return response.json();
    })
    .then((data) => {
        // Data from API
        console.log(data);
    })
    .catch((error) => {
        // Handles network errors or invalid JSON
        console.log(error);
    });

/*
🔎 NOTE:
Even if the code above (promises/async) has setTimeouts,
the fetch may still execute first due to microtask queue handling.

🧠 Why? -> fetch uses the browser's internal priority queue and runs
          before regular task queue operations like setTimeout.
*/
