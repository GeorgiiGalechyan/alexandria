const { BroadcastChannel, Worker } = require('node:worker_threads')

const bc1 = new BroadcastChannel('test-channel')
const bc2 = new BroadcastChannel('test-channel')
const bc3 = new BroadcastChannel('another channel')

bc1.onmessage = (event) => {
  console.log(event.target)
  console.log(event.data)
}

bc2.onmessage = (event) => {
  console.log(event.target)
  console.log(event.data)
}

bc3.onmessage = (event) => {
  console.log(event.target)
  console.log(event.data)
}

const post = () => {
  bc1.postMessage('Сообщение от bc1 для "test-channel"')
  bc2.postMessage('Сообщение от bc2 для "test-channel"')
  bc3.postMessage('Сообщение от bc3 для "another-channel"')
}

post()

// В консоли выведет:
//
// BroadcastChannel { name: 'test-channel', active: true }
// Сообщение от bc1 для "test-channel"
//
// BroadcastChannel { name: 'test-channel', active: true }
// Сообщение от bc2 для "test-channel"
