'use strict';

const mongoose = require('mongoose');

class ConnectionFactory {
  static async getConnection() {
    let url;
    let options = {
      keepAlive: 1,
      autoReconnet: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      reconnectionInterval: 1000,
      useUnifiedTopology: true,
      reconnectionTries: Number.MAX_VALUE,
      connectTimeoutMS: 30000,
    };

    if (!global.config.db.username && !global.config.db.password)
      url = `mongodb://${global.config.db.url}/${global.config.db.name}`;
    else
      url = `mongodb://${global.config.db.username}:${global.config.db.password}@${global.config.db.url}/${global.config.db.name}`;

    return await mongoose.connect(url, options);
  }
}

module.exports = ConnectionFactory;
