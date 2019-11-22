'use strict';
const MONGOOSE = require('mongoose');
class GenericService {
  /**
   * @param {String} entity  Nome dado ao *Mongoose.model* definido na criação do Modelo da entidade
   * @param {String} props parametro opcional para especificar quais as informações dos documentos que o banco irá retornar, *default = " "*
   * @description Método que busca todos os documentos do tipo T cadastrados no banco
   */
  static async findAll(entity, props = '') {
    try {
      const response = await MONGOOSE.model(entity).find({}, props);
      return { data: response, status: new Number(200) };
    } catch (error) {
      throw {
        err: error.message,
        data: 'Falha ao Buscar usuários',
        status: new Number(500),
      };
    }
  }
  /**
   * @param {MONGOOSE.model} entity Nome dado ao *Mongoose.model* definido na criação do Modelo da entidade
   * @param {String} id
   * @description Método que busca um documento do tipo T cadastrado no banco
   */
  static async findOneById(entity, id) {
    try {
      const response = await MONGOOSE.model(entity).findOne({ _id: id });
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
  /**
   * @param {MONGOOSE.model} entity Nome dado ao *Mongoose.model* definido na criação do Modelo da entidade
   * @param {*} element
   * @description Método que cria um novo documento do tipo <T> no banco
   */
  static async create(entity, element) {
    try {
      const response = await MONGOOSE.model(entity).create(element);
      return response._id
        ? { data: 'Criado com Sucesso', status: new Number(201) }
        : { data: 'Falha ao criar', status: new Number(500) };
    } catch (error) {
      throw {
        err: error.message,
        data: 'Falha ao criar usuário',
        status: new Number(500),
      };
    }
  }
  /**
   * @param {MONGOOSE.model} entity Nome dado ao *Mongoose.model* definido na criação do Modelo da entidade
   * @param {*} element
   * @description atualiza um documento do tipo <T> no banco
   */
  static async update(entity, element) {
    try {
      await MONGOOSE.model(entity).findOneAndUpdate(
        { _id: element._id },
        element
      );
      return { data: 'Atualizado com Sucesso', status: new Number(200) };
    } catch (error) {
      throw {
        err: error.message,
        data: 'Falha ao atualizar usuário',
        status: new Number(500),
      };
    }
  }
  /**
   * @param {MONGOOSE.model} entity Nome dado ao *Mongoose.model* definido na criação do Modelo da entidade
   * @param {*} element
   * @description remove um documento do tipo <T> no banco
   */
  static async remove(entity, element) {
    try {
      await MONGOOSE.model(entity).findOneAndRemove({ _id: element._id });
      return { data: 'Removido com Sucesso', status: new Number(200) };
    } catch (error) {
      throw {
        err: error.message,
        data: 'Falha ao atualizar usuário',
        status: new Number(500),
      };
    }
  }
}
module.exports = GenericService;
