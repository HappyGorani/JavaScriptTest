const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
let database;

async function connect() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db('funny');
}
function getDb() {
  if (!database) {
    throw { massage: "데이터베이스가 없습니다." };
  }
  return database;
}


module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
};