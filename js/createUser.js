// let checkLogout = JSON.parse(localStorage.getItem("logout"));
// if (checkLogout) {
//   window.location.assign("createAccount.html");
// }

let userFullName = document.querySelector("#name");
let userName = document.querySelector("#user-name");
let userPassword = document.querySelector("#password");
let confirmPassword = document.querySelector("#cpassword");
let form = document.querySelector(".form");
let inputs = document.querySelectorAll("input");
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
    errorMessage(element, "red", "Please enter the full name");
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

form.addEventListener("submit", (e) => {
  // localStorage.clear();
  e.preventDefault();
  isEmpty(userFullName);
  isEmpty(userName);
  isEmpty(userPassword);
  isEmpty(confirmPassword);
  if (userPassword.value !== confirmPassword.value) {
    hasErrors = true;
  }
  console.log(hasErrors);
  if (hasErrors === false) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let len = users.length;
    let tempid = makeId();

    user = {
      index: len + 1,
      u_id: tempid,
      fullName: userFullName.value,
      username: userName.value,
      password: userPassword.value,
    };

    users.push(user);
    localStorage.setItem("ActiveAC", JSON.stringify(len));
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Account has been created!");
    let logout = false;
    localStorage.setItem("logout", false);
    window.location.assign(`index.html?key=${len}`);
  }
});
