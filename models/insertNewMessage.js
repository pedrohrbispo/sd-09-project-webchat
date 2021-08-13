const connection = require('./connection');
require('dotenv').config();

const insertNewMessage = async (message) => {
  const result = await connection()
    .then((db) => db.collection(process.env.DB_NAME)
      .insertOne({ message })).then((res) => res.ops[0]);

  return result;
};

module.exports = insertNewMessage;
