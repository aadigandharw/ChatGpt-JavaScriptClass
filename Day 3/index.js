// let Fruits = ["Apple" , "Mango" , "Banana"]
// console.log(Fruits[1])


// PRinting Value Of Each Element In List 

// let number = [1,2,3,4,5,6,7,8,9,10]

// for ( let i = 0 ; i < number.length;i++){
//     console.log(number[i]);
// }


// Map Function 


// let  number = [1,2,3,4,5,6,7,8,9,10]

// let sq = number.map(i=>(

//     console.log(i*i)

// ))



// Filter Function 

// let number = [1,2,3,4,5,6,7,8,9,10]

// let Even = number.filter( (i) => i%2===0)

//     console.log(Even)


// Reduce Function  Last Main Ek Hi Vale dene ke Liye USe Krte Hain.....................

// let number = [1,2,3,4,5,6,7,8,9,10]

// let Sum = number.reduce( (a , b) => a+b ,0 ) // Yha PR 0 Initial Value HAi!!!!


// console.log(Sum)

// let number = [1,2,3,4,5,6,7,8,9,10]
// let Multiply = number.reduce((a,b) => a*b,1) // Yha PR 1 Initial Value HAi!!!!
// console.log(Multiply)


// ForEach Function List Ke Sare Element Ko Line By Line Return Krta hai..

// let arr = [10,20,30]
// arr.forEach((value) =>
//     console.log(value)
// )





// JavaScript Day 3 Task

// Task 1 : Map Function
console.log("Here Is Task-1")

let a = [1, 2, 3, 4, 5, 6] 
a.map(i=>(
    console.log(i*i)
))


console.log("Here Is Task-2")
// Task 2 : Filter Function

let b = [1, 2, 3, 4, 5, 6] 

let c = b.filter(i=>(i%2 != 0))

console.log(c);


console.log("Here Is Task-3")
// Task 3 : Reduce Function 

let d = [1, 2, 3, 4, 5, 6] 

let Multiply = d.reduce((a,b) => a*b , 1)
console.log(Multiply)