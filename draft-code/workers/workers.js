const { isMainThread, BroadcastChannel, Worker } = require('node:worker_threads')

// Создаем новый канал
const bc = new BroadcastChannel('Hello')

if (isMainThread) {
  let c = 0
  bc.onmessage = (event) => {
    console.log(event.data) // выведет 'Сообщение для каждого Worker'
    // закрываем канал когда сообщение будет получено 10 раз
    if (++c === 10) bc.close()
  }
  // создаём 10 рабочих потоков, и в каждом запускаем этот файл
  for (let n = 0; n < 10; n++) new Worker(__filename)
} else {
  //  BroadcastChannel отправляет сообщение, коорое
  // получат все экземпляры Worker
  bc.postMessage('Сообщение для каждого Worker')
  bc.close
}
