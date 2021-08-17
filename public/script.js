const socket = window.io();

const nicknameBtn = document.querySelector('#nickname-btn');
const sendBtn = document.querySelector('#send-btn');

const messagesUl = document.querySelector('#messages-list');
const usersUl = document.querySelector('#users-list');

let nickname = '';

sendBtn.addEventListener('click', () => {
  const messageInput = document.querySelector('#message-input').value;
  socket.emit('message', {
    nickname,
    chatMessage: messageInput,
  });

  return false;
});

nicknameBtn.addEventListener('click', () => {
  const nicknameInput = document.querySelector('#nickname-input').value;
  nickname = nicknameInput;
  socket.emit('nickname', nicknameInput);

  return false;
});

// Retornos

const createMessage = (message) => {
  const messageLI = document.createElement('li');
  messageLI.innerHTML = message;
  messageLI.setAttribute('data-testid', 'message');
  messagesUl.appendChild(messageLI);
};

socket.on('message', (message) => createMessage(message));

socket.on('messageList', (messageList) => {
  messageList.forEach((message) => createMessage(message));
});

socket.on('updateList', (users) => {
  if (usersUl) usersUl.innerHTML = '';

  const index = users.indexOf(nickname);
  if (index !== -1) users.splice(index, 1);
  users.unshift(nickname);
  console.log('users >>>', users)
  usersArray = users.filter(user => user !== '');
  console.log('users DEPOIS >>>', usersArray)

  usersArray.forEach((user) => {
    console.log('user.nickname')
    console.log(user)
    // if(user.nickname) {
      const userLi = document.createElement('li');
      userLi.innerHTML = user;
      userLi.setAttribute('data-testid', 'online-user');
      usersUl.appendChild(userLi);
    // }
    // continue;
  });
});
