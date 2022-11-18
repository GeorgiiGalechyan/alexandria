const { Worker, isMainThread, workerDat } = require('node:worker_threads')

if (isMainThread) {
  // Повторно запускаем файл в новом потоке worker
  // и как параметр, передаем в него workerData
  const worker = new Worker(__filename, { workerData: 'anyData' })
} else {
  // Получаем workerData
  console.log(workerData) // Выведет 'anyData'.
}
