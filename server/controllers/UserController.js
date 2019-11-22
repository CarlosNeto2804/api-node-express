'use strict';
const UserService = require('./../services/UserService');
class UserController {
  //----------------------MÉTODOS-DE-CRUD-GENERICO-----------------------//
  //Create
  static async create(req, res) {
    if (!req.body)
      return res.status(400).send('Formato de requisição inválido');
    try {
      const response = await UserService.create('User', req.body);
      res.status(response.status).send(response.data);
    } catch (error) {
      global.logger.error('UserController->create():', error.err);
      res.status(error.status).send(error.data);
    }
  } //create()

  //Read
  static async findAll(req, res) {
    try {
      const response = await UserService.findAll('User');
      res.status(response.status).send(response.data);
    } catch (error) {
      global.logger.error('UserController->findAll():', error.err);
      res.status(error.status).send(error.data);
    }
  } //findAll()

  static async findById(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).send('É necessário fornecer um Id');
      const response = await UserService.findOneById('User', req.params.id);
      res.status(response.status).send(response.data);
    } catch (error) {
      global.logger.error('UserController->findById():', error.err);
      res.status(error.status).send(error.data);
    }
  } //findById()
  static async findByCode(req, res) {
    try {
      if (!req.params.code)
        return res.status(400).send('É necessário fornecer o Código');
      const response = await UserService.findUserByCode(
        'User',
        req.params.code
      );
      res.status(response.status).send(response.data);
    } catch (error) {
      global.logger.error('UserController->findById():', error.err);
      res.status(error.status).send(error.data);
    }
  } //findByCode

  //Update
  static async update(req, res) {
    if (!req.body._id)
      return res
        .status(400)
        .send('É preciso fornecer o ID do usuario para alterá-lo');
    try {
      const response = await UserService.update('User', req.body);
      res.status(response.status).send(response.data);
    } catch (error) {
      global.logger.error('UserController->update():', error.err);
      res.status(error.status).send(error.data);
    }
  } //update()

  //Delete
  static async remove(req, res) {
    if (!req.body._id)
      return res
        .status(400)
        .send('É preciso fornecer o ID do usuario para remove-lo');
    try {
      const response = await UserService.remove('User', req.body);
      res.status(response.status).send(response.data);
    } catch (error) {
      global.logger.error('UserController->remove():', error.err);
      res.status(error.status).send(error.data);
    }
  } //remove()
}
module.exports = UserController;
