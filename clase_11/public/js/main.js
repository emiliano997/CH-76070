const socket = io();
let user = null;

Swal.fire({
  title: "Welcome!",
  text: "Please enter your username",
  padding: "2em",
  input: "text",
  inputValidator: (value) => {
    return !value && !value.trim() && "You need to write something!";
  },
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
}).then((result) => {
  user = result.value;
  document.getElementById("username").innerText = user;

  socket.emit("new-user", user);
});

socket.on("connected", (message) => {
  if (user && user !== null) {
    Swal.fire({
      text: message,
      toast: true,
      position: "top-right",
    });
  }
});

const button = document.getElementById("send");

button.addEventListener("click", () => {
  const message = document.getElementById("message");

  if (!message.value) {
    return alert("Please fill out both fields");
  }

  const data = {
    user,
    message: message.value,
  };

  socket.emit("new-message", data);
  message.value = "";
});

socket.on("messages", (messages) => {
  const messagesList = document.getElementById("messages");

  messagesList.innerHTML = "";

  if (messages.length === 0) {
    messagesList.innerHTML = `<li class="collection-item">No messages yet</li>`;
    return;
  }

  messages.forEach((message) => {
    const li = document.createElement("li");

    li.innerHTML = `<strong>${message.user}</strong>: ${message.message}`;
    li.className = "collection-item";

    messagesList.appendChild(li);
  });
});
