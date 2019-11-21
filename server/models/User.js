'use strict';
const mongoose = require('mongoose');
const uuid = require('uuid/v1');

class User extends mongoose.Schema {
  constructor() {
    super({
      code: {
        type: String,
        required: true,
        unique: true,
        default: uuid,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      picture: {
        type: String,
        required: false,
      },
      active: {
        type: Boolean,
        default: true,
      },
    });

    mongoose.model('User', this);
  }
}
module.exports = User;
