function getUrlKey() {
  let url_string = window.location.href;
  let url = new URL(url_string);
  return url.searchParams.get("u");
}

let key = getUrlKey();
// let checkLogout = JSON.parse(localStorage.getItem("logout"));
// if (checkLogout) {
//   window.location.assign("createAccount.html");
// }

let productName = document.querySelector("#product-name");
let productPrice = document.querySelector("#product-price");
let form = document.querySelector(".form");
let hasErrors = false;

function errorMessage(element, color, msg) {
  let err = document.createElement("div");
  err.textContent = msg;
  err.style.backgroundColor = color;
  err.style.cssText = `margin-top:2px;
 color:${color};
  `;
  element.parentElement.appendChild(err);
}

function isEmpty(element) {
  if (element.value.length == 0) {
    errorMessage(element, "red", "Please fill all details of the product.");
    hasErrors = true;
  }
}

// inputs.forEach((element)=>{
//     element.addEventListener("focus",(e)=>{
//         if(e.target.value.length == 0){
//             if(e.target.nextSibling){
//                 console.log(e.target.nextSibling);
//             }
//         }
//     })
// })
function makeId() {
  let r = Math.random().toString(36).substring(7);
  return r;
}

function getUserId(key) {
  let users = JSON.parse(localStorage.getItem("users"));
  console.log(users[key]);
}

function setProductId(id) {
  let users = JSON.parse(localStorage.getItem("users"));
  users[key].p_id.push(id);
  localStorage.setItem("users", JSON.stringify(users));
}

form.addEventListener("submit", (e) => {
  // localStorage.clear();
  e.preventDefault();
  isEmpty(productName);
  isEmpty(productPrice);
  console.log(hasErrors);
  console.log(key);
  if (hasErrors === false) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let len = products.length;
    let tempid = makeId();

    let product = {
      index: len + 1,
      p_id: tempid,
      u_id: getUserId(),
      productName: productName.value,
      productPrice: productPrice.value,
    };

    setProductId(tempid);

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));
    console.log("product has been created!");
    let logout = false;
    localStorage.setItem("logout", false);
    window.location.assign(`index.html?u=${key}`);
  }
});
