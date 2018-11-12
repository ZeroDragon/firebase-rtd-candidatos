const functions = require('firebase-functions')
const users = require('./users')
const money = require('./money')
const movements = require('./movements')
const conta = require('./conta')

exports.users = functions.https.onRequest(users)
exports.money = functions.https.onRequest(money)
exports.movements = functions.https.onRequest(movements)
exports.conta = functions.https.onRequest(conta)
