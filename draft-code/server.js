const net = require('net')

const server = new net.Server().listen(2000)

module.exports = server
