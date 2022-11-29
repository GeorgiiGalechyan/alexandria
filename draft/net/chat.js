let client = require('./client') // let client = new net.Socket()
let client2 = require('./client2') // let client2 = new net.Socket()
let server = require('./server') // let server = new net.Server().listen(2000)

server.on('listening', () => console.log('Server listening'))

server.on('connection', (socket) => console.log(socket.remoteAddress))

client.on('connect', () => console.log('Client connected'))
client2.on('connect', () => console.log('Client2 connected'))

client.connect(2000)
client2.connect(2000)

server.on('error', (err) => console.log('Server error: ' + err))
client.on('error', (err) => console.log('Client error: ' + err))
client2.on('error', (err) => console.log('Client2 error: ' + err))

// получить количество активных подключений
server.getConnections((err, count) => console.log(count))

// Закрываем сервер
//server.close(() => console.log('Server closed'))
