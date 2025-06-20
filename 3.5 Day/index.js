// Creating A Promise 

// let promise = new Promise(function(resolve, reject) { 
//   // async task 
//   if (success) { 
//     resolve("Success message"); 
//   } else { 
//     reject("Error message"); 
//   } 
// }); 

// let MyPromise = new Promise (function (resolve , reject){
//     let FoodReady = true;
//     if (FoodReady){
//         resolve("Khana Mil Gya")
//     }
//     else {
//         reject("Khana Nhi Mila")
//     }

// })

// MyPromise
// .then (result => console.log(result))
// .catch (error => console.log(error))


// function getData (){
//     return new Promise((resolve ,reject) =>{
//         setTimeout(()=>{
//             resolve("Data Received after 5 Seconds")

//         }, 5000);
//     });
// }


// Task 1 Using Resolve

// getData().then(data=> console.log(data));


// function GetValue (){
//     return new Promise((resolve,reject) =>{

//         setTimeout(() =>
//         {
//             resolve("Task Complete")
//         },2000)

//     })
// }

// GetValue().then(data=> console.log(data));


// Task 2 Using Reject 

function getData(){
    return new Promise ((resolve , reject) =>{
        setTimeout(() =>
        {
            reject("Something Error")
        },3000
        )
    })
}

getData().catch(data => console.log(data))