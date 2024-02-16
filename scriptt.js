

debugger;

console.log("Hello everyone");
// const data={
//   postid:"10",
//   id:"101",
//   title:"into the woods",
//   body:"this is body"
// }
// axios.post("https://jsonplaceholder.typicode.com/posts",data

// )
  
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
  console.log(response,"data")
})
.catch((error)=>{
  console.log("error")
})

// #asynchronous program
// setTimeout(() => {
//   for(  i=1;i<10;i++){
//   console.log("hello"+i)
// }
// }, 100);

// console.log("Good morning")


// const data={
//     userid:"2",
//     title:"My Story",
//     body:"This is my body"

// }
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data)
// }
// )

// .then((data)=>{
//     console.log("THISSSS",data)
// })



