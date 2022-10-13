const net = require('net')

const server = net
  .createServer((socket) => {
    socket.write('Привет от Сервера!)')
  })
  .listen(2000, () => {
    console.log(`Server listening...`)
  })

// При сработает при подключении клиента к серверу:
server.on('connection', (socket) => {
  
  // получаем объект options и сохраняем его в переменную address
  const address = socket.address()

  // получим значение полей address и port объекта options
  console.log(`К сокету ${address.address}:${address.port} подключился новый пользователь.`) // К сокету 127.0.0.1:2000 подключился новый пользователь.
})
