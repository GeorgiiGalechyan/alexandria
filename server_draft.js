'use strict'

const net = require('net')

const server = net
  .createServer((socket) => {
    server.maxConnections = 1
  })
  .listen(2000, () => {
    //мы можем обработать событие 'listening' в этом блоке
    console.log(`1. Server listening... (первый)`)
  })

server.drop
// так же мы можем обработать событие 'listening' отдельно:
server.on('listening', () => {
  console.log(`2. Server listening... (второй)`)
})

// При чтении файла (кода) в консоль выведется следующее:
// 1. Server listening... (первый)
// 2. Server listening... (второй)
