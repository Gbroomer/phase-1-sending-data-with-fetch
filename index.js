// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }
//  const configurationObject = {
//     method: "Post",
//     headers: {
//     "Content-Type": "application/json",
//         },
//         body: JSON.stringify({formData}),
// }
// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(res => res.json())
//     .then((obj) => console.log(obj))
//     .catch(function err() {
//         alert("Bad things! Ragnarok!")
//         console.log(err.message)
//     })
const userInfo = {
    name: "(Whatever Would Be Submitted)",
    email: "(Whatever Would Be Submitted)",
}
const document.querySelector
const configObj = {
    method: "Post",
    headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify({userInfo})
}
function submitData() {
    fetch("http://localhost:3000/users", configObj)
    .then(res => res.json())
    .then((obj) => console.log(obj))
    .catch(function err() {
        alert("HEAL BOOTSTRAP!")
        console.log(err.message)
    return fetch("http://localhost:3000/users");
    })
}