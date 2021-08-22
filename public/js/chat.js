const socket = window.io();

const messageForm = document.querySelector('#message-form');
const inputMessage = document.querySelector('#message-input');
const nicknameForm = document.querySelector('#nickname-form');
const nicknameInput = document.querySelector('#nickname-input');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nickname = document.querySelector('#users-list').firstElementChild.innerText;
  socket.emit('message', { chatMessage: inputMessage.value, nickname });
  inputMessage.value = '';
  return false;
});

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages-list');
  const li = document.createElement('li');
  li.innerText = message;
  li.dataset.testid = 'message';
  messagesUl.appendChild(li);
};

nicknameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  socket.emit('nicknameChange', nicknameInput.value);
  nicknameInput.value = '';
  return false;
});

const renderUserList = (userList) => {
  const usersUl = document.querySelector('#users-list');
  usersUl.innerHTML = '';
  userList.sort((a, b) => {
    if (a.id === socket.id) return -1;
    if (b.id === socket.id) return 1;
    return 0;
  });
  userList.forEach((user, index) => {
    const li = document.createElement('li');
    li.innerText = user.nickname;
    if (index === 0) {
      li.dataset.testid = 'online-user';
    }
    usersUl.appendChild(li);
  });
};

// console.log(socket);
socket.on('message', (message) => createMessage(message));
socket.on('renderUserList', (userList) => renderUserList(userList));
socket.on('generateNickname', (nickname) => socket.emit('nicknameChange', nickname));
window.onload = () => {
  // socket.connect();
};
