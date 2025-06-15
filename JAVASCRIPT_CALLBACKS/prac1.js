let a=2
let b=4

const sum=()=>{
    setTimeout(()=>{
        console.log("Sum of numbers is: ",a+b)
        sub()
    },2000)
}

const sub=()=>{
    setTimeout(()=>{
        console.log("Difference of numbers is: ",a-b)
        mul()
    },2000)
}

const mul=()=>{
    setTimeout(()=>{
        console.log("Product of numbers is: ",a*b)
        div()
    },2000)
}

const div=()=>{
    setTimeout(()=>{
        console.log("Quotient of numbers is: ",a/b)
    },2000)
}

sum(()=>{
    sub(()=>{
        mul(()=>{
            div()
        })
    })
})

//Output(delay of 2 sec before each)
// Sum of numbers is:  6
// Difference of numbers is:  -2
// Product of numbers is:  8
// Quotient of numbers is:  0.5