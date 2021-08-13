const models = require('../models');
const formatMessage = require('../services/formatMessage');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('message', async ({ chatMessage, nickname }) => {
    const newMessage = formatMessage(chatMessage, nickname);
    await models.insertNewMessage(newMessage);
    const allMessages = await models.getAllMessages();

    socket.emit('retorno', allMessages);
  });
});
