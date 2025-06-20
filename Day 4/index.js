// 💡 Day 4: Async/Await & Fetch API 



// async function example(){

//     return "Hello Async"
// }

// example().then(i=>(console.log(i)));


// async function fetchData(){

//     const MyPromise = new Promise (( resolve ) =>{
//         setTimeout (() => resolve("Data Reloaded"),5000);
//     });

//     const Result = await MyPromise
//     console.log(Result);//Output : Data Reloaded


// }

//   fetch('https://jsonplaceholder.typicode.com/users') 
//   .then(response => response.json())
//   .then(data => console.log(data));


//   async function getUser() {
//     const response = await
//     fetch('https://jsonplaceholder.typicode.com/users') 

    

//     const data = await response.json();
//     console.log(data)
//   }

//   getUser();


// async function getPosts() { 
//   try { 
//     const res = await 
// fetch('https://jsonplaceholder.typicode.com/posts/2'); //Yha Pr 1 As a Argument Bn jaa rhi hai Or Particular id bs show ho rhi hai or await  ho jaa rhi 
//     const data = await res.json(); 
//     console.log(data); 
//   } catch (err) { 
//     console.error("Something went wrong:", err); 
//   } 
// } 

// getPosts()


// function delay (ms){
//     return new Promise (resolve => setTimeout (resolve , ms))
    
// }


// async function delayHello (){
//     console.log("Waiting")
//     await delay (5000)
//     console.log("Am After 5 Second!")
// }

// delayHello()  

// Task 1  Make a function getTodos() using async/await to fetch data from:

// async function getTodos(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then (res => res.json())
//     .then (data => console.log(data))
// }

// getTodos()



// Task 2 Create a delay(ms) function (as above).  Call it with 2 seconds and print “Waited 2 seconds” after waiting.


function delay (ms){
    return new Promise (resolve => setTimeout(resolve , ms)

    )
}

async function delayHello (){
    console.log("Waiting")
    await delay(2000)
    console.log("Am 2 Second After Hello")
}

delayHello()