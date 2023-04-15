const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }
  save() {
    const db = getDb();
    let dbOperation;
    if (this._id) {
      dbOperation = db.collection('users').updateOne({ _id: this._id }, { $set: this });
    }
    else {
      dbOperation = db.collection('users').insertOne(this)
    }
    return dbOperation
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findAllUsers() {
    const db = getDb();
    return db
      .collection('users')
      .find()
      .toArray()
      .then((users) => {
        return users;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findUserById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new mongodb.ObjectId(userId) })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
