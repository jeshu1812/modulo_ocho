const verifySingUp = require('../middleware/verifySingUp.js');
const verifyToken = require('../middleware/auth.js');

module.exports = {
    verifySingUp,
    verifyToken
}