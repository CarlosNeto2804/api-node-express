'use strict';
const MOONGOOSE = require('mongoose');
const uuid = require('uuid/v1');

class User extends MOONGOOSE.Schema {
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

    MOONGOOSE.model('User', this);
  }
}
module.exports = User;
