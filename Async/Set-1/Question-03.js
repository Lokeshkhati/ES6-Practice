// const output = document.querySelector(".output");
// Q 1. Use this URL - https://example.com/post/comments to make a fake fetch call and list out all the emails of users on the DOM in ordered list. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/post/comments") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
//             {
//               email: "hello@outlook.com",
//               commentBody: "Good going a lot to learn from you awesome"
//             },
//             {
//               email: "ram99@gmail.com",
//               commentBody: "Anyone from Vadodara here"
//             }
//           ]
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No Commentes found."
//         });
//       }
//     }, 2000);
//   });
// };

// const display = (data) => {
//   data.forEach((item) => {
//     let ol = document.createElement("ol");
//     let li = document.createElement("li");
//     li.textContent = item.email;
//     ol.appendChild(li);
//     output.appendChild(ol);
//   });
// };

// fakeFetch("https://example.com/post/comments")
//   .then((data) => display(data.data))
//   .catch((error) => console.log(error.message));

// Q 2. Use this URL - https://example.com/winner-team to make a fake fetch call to the get names of winner group members and show a nice message on the DOM congratulating all of them. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/winner-team") {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: ["Jhon", "Raju", "Anjali", "Sakshi"]
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No Users found."
//         });
//       }
//     }, 2000);
//   });
// };

// const display = (data) => {
//   const names = data.map((name) => name);
//   output.textContent = `Congratulation to the members of winning team  ${names}, great work keep it up.`;
// };

// const getData = async () => {
//   const { data } = await fakeFetch("https://example.com/winner-team");
//   display(data.data);
// };

// getData();

// Q 3. Use this URL - https://example.com/login to make a fake fetch call and show the status like it is authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/login") {
//         resolve({
//           status: 200,
//           data: {
//             auth: true
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Status not found"
//         });
//       }
//     }, 2000);
//   });
// };

// // your code here

// const getData = async () => {
//   try {
//     const { data } = await fakeFetch("https://example.com/login");
//     if (data.auth) {
//       output.textContent = "vefified";
//     }
//   } catch (error) {
//     output.textContent = error.message;
//   }
// };

// getData();

// Q 4 . Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/order/status/OR00A12") {
//         resolve({
//           status: 200,
//           data: {
//             order: {
//               orderId: "OR00A12",
//               status: "delivery pending",
//               userName: "Kajal Kumari"
//             }
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No order found"
//         });
//       }
//     }, 2000);
//   });
// };

// const getData = async () => {
//   try {
//     const { data } = await fakeFetch(
//       "https://example.com/order/status/OR00A12"
//     );
//     output.textContent = `Hello ${data.order.userName} your order status is ${data.order.status}`;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// getData();

// Q 5. Use this URL - https://example.com/photo to make a fake fetch call and show an image on the DOM using the photo link received in the response. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/photo") {
//         resolve({
//           status: 200,
//           data: {
//             photo: {
//               link: "https://source.unsplash.com/featured/300x201",
//               title: "Random Image"
//             }
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No order found"
//         });
//       }
//     }, 2000);
//   });
// };

// const getData = async () => {
//   try {
//     const { data } = await fakeFetch("https://example.com/photo");
//     const img = document.createElement("img");
//     img.src = data.photo.link;
//     output.appendChild(img);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getData();

// Q . 6 Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of all the products. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/productlist") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { itemName: "Shoes", price: 100, quantity: 2 },
//             { itemName: "Hat", price: 350, quantity: 1 },
//             { itemName: "Tshirt", price: 410, quantity: 5 }
//           ]
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Items list not found."
//         });
//       }
//     }, 2000);
//   });
// };

// const getData = async () => {
//   try {
//     const { data } = await fakeFetch("https://example.com/api/productlist");

//     const totalPrice = data.reduce((acc, curr) => acc + curr.price, 0);

//     output.textContent = ` Total: INR ${totalPrice}`;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getData();

// Q 7 . Use this URL - https://example.com/api/users to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try again.), as per the status received from the server. The error should be displayed in red colour. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/users") {
//         reject({
//           status: 500,
//           message: "Internal Server Error"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// const getData = async () => {
//   try {
//     const { data } = await fakeFetch("https://example.com/api/users");
//     console.log(data.message);
//   } catch (error) {
//     console.log(error);
//     if (error.status) {
//       output.textContent = "Oops. Unexpected Error. Please try again.";
//       output.style.color = "red";
//     }
//   }
// };

// getData();

// Q 8 . Use this URL - https://example.com/api/allbooks to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Bad Request! Requested size too large.), as per the status received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/allbooks") {
//         reject({
//           status: 400,
//           message: "Bad Request"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// const getData = async () => {
//   try {
//     const { data } = await fakeFetch("https://example.com/api/allbooks");
//     console.log(data.message);
//   } catch (error) {
//     if (error.status === 400) {
//       output.textContent = `${error.message}! Requested size too large.`;
//     }
//   }
// };

// getData();

// Q 9 . Use this URL - https://example.com/welcome to make a fake fetch call and display a welcome message to the user on the DOM. Welcome message (if provided) should be used else the default message of Welcome to the servershould be shown. Message should be only shown if the user is logged in. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!url === "https://example.com/welcome") {
//         reject({
//           status: 511,
//           message: "Network auth required"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             logged: true
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// const getData = async () => {
//   try {
//     const { data } = await fakeFetch("https://example.com/welcome");
//     if (data.logged) {
//       output.textContent = "Welcome to the server";
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getData();

// Q. 10 Use this URL - https://example.com/getImage to make a fake fetch call which takes a url and dimensions for the photo to be displayed. Dimensions should be passed in the format [width, height]. Show the image provided in the response on DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch = (url, dimensions) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/getImage") {
        resolve({
          status: 200,
          data: {
            image: {
              link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
              title: "Random Image"
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "No photo of such dimension found"
        });
      }
    }, 2000);
  });
};

const getData = async () => {
  try {
    const { data } = await fakeFetch("https://example.com/getImage", [
      200,
      300
    ]);
    let img = document.createElement("img");
    img.src = data.image.link;
    output.appendChild(img);
  } catch (error) {
    console.log(error.message);
  }
};
getData();
