
// debugger;
// const first= new Promise ((resolve,reject)=>{
//     const flight=false
//     if(flight){
//         resolve("you are in the flight") 
//     }else{
//         reject("you are not")
//     }
// })
// console.log(first)

// first 
// .then((data)=>{
//     console.log("fulfilled" + data)
// })
// .catch((data)=>{
//     console.log("not fulfilled" + data)
// })
const data = {
    userId: "1",
    name:"niha",
    email:"niha@gmail.com",
    body:"this is my body"
  };
  
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      console.log("Request successful, status:");
      return response.json();  
    })
    .then((responseData) => {
      console.log("Response data:", responseData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  