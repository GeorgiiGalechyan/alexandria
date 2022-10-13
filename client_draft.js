'use strict'

const net = require('net')

const options = {
  host: '127.0.0.1',
  port: 2000,
}

const client = new net.Socket()

client.connect(options, () => {
  const opt = options
  console.log(`Клиент подключился к серверу на сокет: ${opt.host}:${opt.port}`)
})
