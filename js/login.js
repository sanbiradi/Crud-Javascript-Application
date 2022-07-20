// let checkLogout = JSON.parse(localStorage.getItem("logout"));
// if (checkLogout) {
//   window.location.assign("login.html");
// }
let username = document.querySelector("#exampleInputEmail1");
let password = document.querySelector("#exampleInputPassword1");
let form = document.querySelector("#form");
let msg = document.querySelector("#message");
let hasErrors = false;

let users = JSON.parse(localStorage.getItem("users"));
function errorMessage(element, color, msg) {
  let err = document.createElement("div");
  err.textContent = msg;
  err.style.backgroundColor = color;
  err.style.cssText = `margin-top:2px;
 color:${color};  `;
  element.parentElement.appendChild(err);
}

function isEmpty(element) {
  if (element.value.length == 0) {
    errorMessage(element, "red", "Please enter the given field");
    hasErrors = true;
  }
}

// {
//   index: len + 1,
//   u_id: tempid,
//   fullName: userFullName.value,
//   username: userName.value,
//   password: userPassword.value,
// };

function checkLogin(username, password) {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === username.value &&
      users[i].password === password.value
    ) {
      console.log("i'm here");
      localStorage.setItem("logout", false);
      localStorage.setItem("ActiveAC", JSON.stringify(i));
      window.location.assign(`index.html?u=${i}`);
      break;
    } else {
      errorMessage(msg, "red", "Username password is wrong, Try again!");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isEmpty(username);
  isEmpty(password);
  if (!hasErrors) {
    checkLogin(username, password);
  }
});
