'use strict'
require('./../../config');
const {verify, sign} = require('jsonwebtoken')
class TokenUtil{
    static async generateToken(user, typeKey) {
        return await sign({user},typeKey, {expiresIn: '365d'});
    }
    static async decodeToken(token) {
        return await verify(token, global.config.secret);
    }
}
module.exports = TokenUtil 