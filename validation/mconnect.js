const { MongoClient } = require('mongodb');

const connFun = async () => {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'USERDIRECTORY';
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db;
}

exports.connFun = connFun;