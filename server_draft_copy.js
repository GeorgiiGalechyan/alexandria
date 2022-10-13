const net = require('net')

const server = net
  .createServer((socket) => {
    socket.end('До свидания!')
  })
    .on('error', (err) => {
      throw err; // Обрабатывайте ошибки здесь.
    })

// Захват неипользуемого произвольного порта (IP-адрес назначается ОС)
server.listen(() => {
  console.log('Сервер открыт на порту:', server.address());
});
