// func1=()=>{
//     setTimeout((func)=>{
//         console.log("Hello i m func A")
//     },5000)
// }

// func2=()=>{
//     console.log("Hello i m func 2")
// }


// func1()// it wont executte 1st as it takes 5 sec
// func2() // it will execute first

const data1 = (func2) => {
    setTimeout(() => {
        console.log("data1...");
        func2(); // Call data2 here
    }, 2000);
};

const data2 = (func3) => {
    setTimeout(() => {
        console.log("data2...");
        func3(); // Call data3 here
    }, 2000);
};

const data3 = () => {
    setTimeout(() => {
        console.log("data3...");
    }, 2000);
};

// // Call chain: data1 → data2 → data3

data1(()=>{
    data2(()=>{
        data3()
    })
})

// 🧪 Dry Run Timeline (Step-by-Step Execution)
// 🕐 = Time elapsed

// ⏱ 0ms (Start)
// data1() is called.

// You pass an anonymous function: () => data2(() => data3())

// Inside data1, setTimeout() is set for 2000ms

// Nothing is logged yet.

// ⏱ 2000ms (2 seconds later)
// data1’s setTimeout fires.

// Logs: "data1..."

// Then calls the anonymous function: () => data2(() => data3())

// This triggers data2() with a callback () => data3()

// Inside data2, another setTimeout() is set for 2000ms

// ⏱ 4000ms (4 seconds total)
// data2’s setTimeout fires.

// Logs: "data2..."

// Then calls func3(), which is () => data3()

// This triggers data3()

// Inside data3, yet another setTimeout() is set for 2000ms

// ⏱ 6000ms (6 seconds total)
// data3’s setTimeout fires.

// Logs: "data3..."

