const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

// function onLoginSubmit () {
//   const username = loginInput.value;
//   if (username === "") {
//     alert("Please write your name");
//   } else if (username.length > 15) {
//     alert("Your name is too long.");
//   }
// }

const HIDDEM_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //preventDefault() : 어떤 이벤트의 기본 행동이든지 발생되지 않도록 막는것
  const username = loginInput.value;
  loginForm.classList.add(HIDDEM_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
}
// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
//   console.dir(event);
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);
function paintGreetings(username) {
  // const username = localStorage.getItem(USERNAME_KEY);  //인자를 주지않고 이렇게 적어서 넣는것도 가능하다
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEM_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEM_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
