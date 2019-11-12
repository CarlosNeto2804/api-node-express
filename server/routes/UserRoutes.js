'use strict '
const UserController = require("./../controllers/UserController")


class UserRoute{
    constructor(app){
        app.route("/public/user")
            .get(UserController.findAll)
            .put(UserController.update)

        app.route("/public/user/:id")
            .get(UserController.findById)

        app.route('/admin/user')
            .post(UserController.create)
            .put(UserController.update)
            .get(UserController.findAll)
            .delete(UserController.remove)
        
        
            
    }
}   
module.exports = UserRoute