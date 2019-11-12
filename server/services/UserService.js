"use strict";
const MONGOOSE = require("mongoose");
const User = MONGOOSE.model("User");

class UserService {
  //-------------------------MÉTODOS-DE-CRUD-------------------------//
  static async find() {
    try {
        const response = await User.find({});
        return {data:response ,status:new Number(200)}
    } catch (error) {

        throw {err:error.message,data:"Falha ao Buscar usuários" ,status:new Number(500)}
    }

  }
  static async findUserById(id) {
    try {
        const response = await User.findOne({_id:id});
        return  response._id
        ?{data:response ,status:new Number(200)}
        :{data:"Nenhum usuário encontrado", status:new Number(404)}
    } catch (error) {

        throw {err:error.message,data:"Falha ao Buscar usuário" ,status:new Number(500)}
    }

  }
  static async findUserByCode(code) {
    try {
        const response = await User.findOne({code:code});
        return response._id
        ?{data:response ,status:new Number(200)}
        :{data:"Nenhum usuário encontrado", status:new Number(404)}
    } catch (error) {

        throw {err:error.message,data:"Falha ao Buscar usuário" ,status:new Number(500)}
    }
    
  }
  static async create(user) {
    try {
        const response = await User.create(user);
        return response._id
        ?{data:"Criado com Sucesso",status:new Number(201)}
        :{data:"Falha ao criar",    status:new Number(500)}        
    } catch (error) {

        throw {err:error.message,data:"Falha ao criar usuário" ,status:new Number(500)}
    }

  }
  static async update(user) {
    try {
        const response = await User.findByIdAndUpdate(user._id, user);
        return response._id
        ?{data:"Atualizado com Sucesso",status:new Number(200)}
        :{data:"Falha ao atualizar",    status:new Number(304)}  
    } catch (error) {
        throw {err:error.message,data:"Falha ao atualizar usuário" ,status:new Number(500)}
    }

  }
  static async remove(user) {
    try {
        await User.findByIdAndRemove(user);
        return {data:"Removido com Sucesso",status:new Number(200)}
    } catch (error) {
        throw {err:error.message,data:"Falha ao atualizar usuário" ,status:new Number(500)}
    }
  }
  static async findByEmail(email) {
    try {
        const response =  await User.findOne({email: email});
        return response._id  
        ?{data:response ,status:new Number(200)}
        :{data:"Nenhum usuário encontrado", status:new Number(404)}
    } catch (error) {
        throw {err:error.message,data:"Falha ao atualizar usuário" ,status:new Number(500)}
    }
  }
};

module.exports = UserService