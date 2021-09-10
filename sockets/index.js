const {
  handleChangeNickname,
  handleMessageEvent,
  handleWithNewConnection,
  handleWithDisconnectEvent,
} = require('../services/socket');

const handleEventsSocket = async (io) => {
  io.on('connection', async (socket) => {
    await handleWithNewConnection(io, socket);

    socket.on('message', async ({ nickname, chatMessage }) => {
      console.log(nickname);
      await handleMessageEvent(io, chatMessage, nickname);
    });

    socket.on('changeNickname', async (userObj) => {
      await handleChangeNickname(io, socket, userObj);
    });

    socket.on('disconnect', async () => {
      console.log(socket.id);
      await handleWithDisconnectEvent(socket.id, io);
    });
  });
};

module.exports = handleEventsSocket;