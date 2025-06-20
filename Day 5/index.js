//Day 5: Timers in JavaScript – 
// setTimeout, setInterval, 
// clearInterval, clearTimeout

// setTimeout :- Execute function only Once After Delay 


// 1
// setTimeout (() =>{
//     console.log("Hello Jarvis");
// },5000
// )


// const timer = setTimeout(() =>{
//     console.log("Hello");
// },5000)

// clearTimeout(timer)// Cleartimeout ke vjh seh callback function execute nhi hoti

// //2
// // SetInterval () :- Har Delay Ke Bad Function callback Hota Hai 

// const tiktik =setInterval(()=>{
//     console.log("Run After 2 Seconds")
// },2000)

// clearTimeout(tiktik);// cleartimeout ke through Direct Callback ko close kr sakte hai

// const My_interval = setInterval(() =>
// {
//     console.log("Repeating")
// },1000)

// setTimeout (()=>{
//     clearInterval(My_interval);
//     console.log("Only Required To Print 5 Second")
// },5000)

// 🚫 3. clearTimeout() and clearInterval() 
// Used to stop the actions triggered by setTimeout and setInterval. 

// let count = 5;
// const countdown = setInterval(()=>{
//     console.log(count)
//     count--;

// if (count === 0){
//     clearInterval(countdown)
//     console.log("Count Down End")
// }

// },3000)    


// 🔹 Task 1: Delay Greeting 
// Make a function sayHello() that logs “Hello User” after 3 seconds using setTimeout.

setTimeout(() => {
    console.log("Hello User")
}, 3000);

// 🔹 Task 2: Auto Increment 
// Make a counter that logs numbers from 1 to 10, one number per second using setInterval.

let count = 1 ;
const Incr =   setInterval(() =>{
    console.log(count)
    count++;

    if (count === 11){
        clearInterval(Incr)
        console.log("Value Is Printed From 1 To 10 per Seconds")
    }
}, 1000



)


// 🔹 Task 3: Stop Interval 
// Create a timer that prints “Running...” every 2 seconds, and stops after 6 seconds.

const a = setInterval(()=>
{
    console.log("Running")
},2000)

setTimeout(() => {
    clearInterval(a)
    console.log("Its Only Run 6 Seconds")
}, 6000);
