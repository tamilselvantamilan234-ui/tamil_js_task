// // let arr = [];
// // let isEdit = null;

// // const form = document.querySelector('.form');

// // function handleSubmit() {

// //     const userName = document.getElementById('userName').value.trim();
// //     const emailId = document.getElementById('emailId').value.trim();
// //     const phone = document.getElementById('phone').value.trim();
// //     const address = document.getElementById('address').value.trim();

// //     if (!userName || !emailId || !phone || !address) {
// //         alert("Please fill all fields!");
// //         return;
// //     }

// //     let user = {
// //         userName: userName,
// //         emailId: emailId,
// //         phoneNumber: phone,
// //         address: address
// //     };

// //     if (isEdit === null) {
// //         arr.push(user);
// //     } else {
// //         arr[isEdit] = user;
// //         isEdit = null;
// //     }

// //     handleView();
// //     handleClear();
// // }


// // function handleView() {
// //     let tbody = document.getElementById('tbody');
// //     tbody.innerHTML = '';
// //     arr.forEach((value, index) => {
// //         const tr = document.createElement('tr');
// //         tr.innerHTML =
// //             `
// // <td>${value.userName}</td>
// // <td>${value.emailId}</td>
// // <td>${value.phoneNumber}</td>
// // <td>${value.address}</td>
// // <td><button onclick="handleEdit(${index})">Edit</button></td>
// // <td><button type="button" onclick="handleDelete(${index})">Delete</button></td>
// //         `;
// //         tbody.appendChild(tr);
// //     })
// // };


// // function handleEdit(index) {
// //     console.log(index); // 0
// //     console.log(arr[index]);
// //     document.getElementById('userName').value = arr[index].userName;
// //     document.getElementById('emailId').value = arr[index].emailId;
// //     document.getElementById('phone').value = arr[index].phoneNumber;
// //     document.getElementById('address').value = arr[index].address;

// //     isEdit = index;
// // }

// // function handleDelete(index ){
// //     arr.splice(index, 1);
// //     handleView()
// // }


// // function handleClear() {
// //     document.getElementById('userName').value = '';
// //     document.getElementById('emailId').value = '';
// //     document.getElementById('phone').value = '';
// //     document.getElementById('address').value = '';
// // }

// // form.addEventListener('submit', (e) => {
// //     e.preventDefault();
// //     handleSubmit();
// // })
// // let arr = [];

// // async function fetchProducts(){
// //   try{
// //   const response=await fetch('https://fakestoreapi.com/products');
// //   arr=await response.json();

// //   console.log(arr);
// //   handleView();

// // }catch(error){
// //   console.log(error);
// // }
// // };

// // fetchProducts()


// // function handleView() {
// // let tbody = document.getElementById('tbody');
// // tbody.innerHTML = '';

// // arr.forEach((value, index) => {
// // const tr = document.createElement('tr');

// // tr.innerHTML = `
// // <td>${value.title}</td>
// // <td>${value.price}</td>
// // <td>${value.category}</td>
// // <td>${value.description}</td>`;

// // tbody.appendChild(tr);

// // });
// // }


// let a = [10, 20];
// let b = [30, 40];
// let C = [];

// for (let i = 0; a[i] !== undefined; i++) {
//     C[i] = a[i];
// }
// for (let i = 0; b[i] !== undefined; i++) {
//     C[i + 2] = b[i];
// }

// console.log(C);
class user{
    constructor(name,age){
        this.name = name
        this.age = age
    };
    display(){     
        console.log(`user name : ${this.name} \n age : ${this.age}`)
    }
};

const user1 = new user("priya",22);
user1.display()
// console.log(user1);