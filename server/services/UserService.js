'use strict';
const MONGOOSE = require('mongoose');
const User = MONGOOSE.model('User');
const GenericService = require('./GenericService');

class UserService extends GenericService {
  static async findUserByCode(code) {
    try {
      const response = await User.findOne({ code: code });
      return response._id
        ? { data: response, status: new Number(200) }
        : { data: 'Nenhum usuário encontrado', status: new Number(404) };
    } catch (error) {
      throw {
        err: error.message,
        data: 'Falha ao Buscar usuário',
        status: new Number(500),
      };
    }
  }
  static async findByEmail(email) {
    try {
      const response = await User.findOne({ email: email });
      return response._id
        ? { data: response, status: new Number(200) }
        : { data: 'Nenhum usuário encontrado', status: new Number(404) };
    } catch (error) {
      throw {
        err: error.message,
        data: 'Falha ao atualizar usuário',
        status: new Number(500),
      };
    }
  }
}

module.exports = UserService;
