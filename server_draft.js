const net = require('net')

const server = net
  .createServer((socket) => {
    server.maxConnections = 1 // указываем максимальное количество соединений для сервера

    // при подклюении клиента к серверу выведем в консоль
    const host = server.address().address
    const port = server.address().port
    console.log(`2. К сокету ${host}:${port} подключился клиент.`)
  })
  .listen(2000, () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`1. Сервер слушает сокет ${host}:${port}`)
  })

server.on('drop', (data) => {
  console.log(
    '3. ' + JSON.stringify(data)
  ) /* при отбрасывании сервером входящего соединения получим объект data, содержащий сведения о отброшенном соединении и выведем в консоль объект data в формате json*/
})
