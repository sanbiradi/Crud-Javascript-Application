// let database = [
//   {
//     users: [
//       {
//         index,
//         fullname,
//         u_id,
//         p_id,
//         username,
//         password,
//       },
//     ],
//     products: [
//       {
//         index,
//         P_id,
//         owner_id,
//         P_name,
//         P_price,
//       },
//     ],
//   }
// ];

// let tables = {
//     users:[],
//     products:[]
// }

// localStorage.setItem("tables",JSON.stringify(tables));
// tables.users.push({
//     name:"sandip"
// })
// // console.log(tables.users[0])
// localStorage.setItem("tables",JSON.stringify(tables));

// console.log(JSON.parse(localStorage.getItem("tables")));

// let tables = {
//     users:[],
//     products:[],
//     currentUser:""
// }

//1. to change login to logout functionality
//2. to display user name on the navigation
let logout;
let getLogout = () => {
  localStorage.setItem("logout", true);
  logout = true;
  window.location.assign("login.html");
};

let checkLogout = JSON.parse(localStorage.getItem("logout"));
if (checkLogout) {
  window.location.assign("login.html");
}

function getUrlKey() {
  let url_string = window.location.href;
  let url = new URL(url_string);
  return url.searchParams.get("u");
}
// let url_string = window.location.href;
// let username = document.querySelector("#username");
// let url = new URL(url_string);
// let key = url.searchParams.get("u");
let key = getUrlKey();
let users = JSON.parse(localStorage.getItem("users"));
username.innerHTML = users[key].fullName;

function addProduct() {
  window.location.assign(`addProduct.html?u=${key}`);
}

function addProduct() {
  window.location.assign(`addProduct.html?u=${key}`);
}
loadUserProducts(key);

function loadUserProducts(index) {
  //fetch products array from localstorage
  //catch the dom
  //create a dom and append to the records
  //comapare user product id to the product table id's
  let records = document.querySelector("#records");
  let products = JSON.parse(localStorage.getItem("products"));
  let k = getUrlKey();
  let p_ids = users[k].p_id;
  let record;
  products.forEach((product) => {
    p_ids.forEach((p_id) => {
      if (product.p_id == p_id) {
        record = ` <tr>
        <td>${product.index}</td>
        <td>${product.productName}</td>
        <td>${product.productPrice}</td>
        <td>
            <button class="btn btn-sm btn-success text-white w-25">Edit</button>
            <button class="btn btn-sm btn-danger w-25">Delete</button>
        </td>
      </tr>`;
      records.innerHTML += record;
      }
    });
    // console.log(product);
  });
}
