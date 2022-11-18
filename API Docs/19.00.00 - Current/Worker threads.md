<details> <summary> Содержание </summary>

- [Worker threads](#worker-threads-рабочие-потоки)
  - [worker.getEnvironmentData(key)](#workergetenvironmentdatakey)
  - [worker.isMainThread](#workerismainthread)
  - [worker.markAsUntransferable(object)](#workermarkasuntransferableobject)
  - [worker.moveMessagePortToContext(port, contextifiedSandbox)](#workermovemessageporttocontextport-contextifiedsandbox)
  - [worker.parentPort](#workerparentport)
  - [worker.receiveMessageOnPort(port)](#workerreceivemessageonportport)
  - [worker.resourceLimits](#workerresourcelimits)
  - [worker.SHARE_ENV](#workershare_env)
  - [worker.setEnvironmentData(key[, value])](#workersetenvironmentdatakey-value)
  - [worker.threadId](#workerthreadid)
  - [worker.workerData](#workerworkerdata)
  - [Class: MessageChannel](#class-messagechannel)
  - [Class: MessagePort](#class-messageport)
    - [Event: 'close'](#event-close)
    - [Event: 'message'](#event-message)
    - [Event: 'messageerror'](#event-messageerror)
    - [port.close()](#portclose)
    - [port.postMessage(value[, transferList])](#portpostmessagevalue-transferlist)
      - [Рекоммендации при передаче "TypedArrays" и "Buffers"](#рекоммендации-при-передаче-typedarrays-и-buffers)
    - [port.ref()](#portref)
    - [port.start()](#portstart)
    - [port.unref()](#portunref)
  - [Class: Worker](#class-worker)
    - [new Worker(filename[, options])](#new-workerfilename-options)
    - [Event: 'error'](#event-error)
    - [Event: 'exit'](#event-exit)
    - [Event: 'message'](#event-message-1)
    - [Event: 'messageerror'](#event-messageerror-1)
    - [Event: 'online'](#event-online)
    - [worker.getHeapSnapshot()](#workergetheapsnapshot)
    - [worker.performance](#workerperformance)
      - performance.eventLoopUtilization([utilization1[, utilization2]])
    - [worker.postMessage(value[, transferList])](#workerpostmessagevalue-transferlist)
    - [worker.ref()](#workerref)
    - [worker.resourceLimits](#workerresourcelimits-1)
    - [worker.stderr](#workerstderr)
    - [worker.stdin](#workerstdin)
    - [worker.stdout](#workerstdout)
    - [worker.terminate()](#workerterminate)
    - [worker.threadId](#workerthreadid-1)
    - [worker.unref()](#workerref)
  - [Примечания](#примечания)
    - [Синхронная блокировка stdio](#синхронная-блокировка-stdio)
    - [Запуск рабочих потоков из скриптов предварительной загрузки](#запуск-рабочих-потоков-из-скриптов-предварительной-загрузки)

</details>

---

# Worker threads (Рабочие потоки)

**Исходный код:** [lib/worker_threads.js](https://github.com/nodejs/node/blob/v14.21.1/lib/worker_threads.js)

Модуль `worker_threads` позволяет использовать потоки, параллельно выполняющие JavaScript. Чтобы получить к нему доступ пропишите:

```
const worker = require('worker_threads');
```

Рабочие потоки (**_worker threads_** / **_workers_**) полезны для выполнения операций JavaScript, требующих больших затрат процессора. Они не очень помогают при выполнении интенсивных операций ввода-вывода. Встроенные в Node.js асинхронные операции ввода-вывода более эффективны, чем Workers.

В отличие от `child_process` или `cluster`, `worker_threads` могут совместно использовать память. Они делают это путем передачи экземпляров `ArrayBuffer` или совместного использования экземпляров `SharedArrayBuffer`.

```
const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

if (isMainThread) {
  module.exports = function parseJSAsync(script) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: script
      });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };
} else {
  const { parse } = require('some-js-parsing-library');
  const script = workerData;
  parentPort.postMessage(parse(script));
}
```

В приведенном выше примере каждый вызова `parse()` порождает рабоий поток (worker / worker thread). В реальной практике для таких задач следует использовать пул (pool) рабочих потоков (workers / worker threads). В противном случае накладные расходы на создание рабочих потоков, скорее всего, превысят их пользу.

При реализации пула рабочих потоков используйте [`AsyncResource`](https://nodejs.org/dist/latest-v19.x/docs/api/async_hooks.html#class-asyncresource) API, предоставляющий инструменты диагностики (например, для предоставления асинхронных трассировок стека) для отслеживания взаимосвязи между задачами (tasks ) и их результатами. Пример реализации см. в разделе ["Использование AsyncResource для пула рабочих потоков"](https://nodejs.org/dist/latest-v19.x/docs/api/async_context.html#using-asyncresource-for-a-worker-thread-pool) в документации `async_hooks`.

По умолчанию, рабочие потоки наследуют параметры, не относящиеся к конкретному процессу. Обратитесь к [параметрам конструктора Worker (new Worker)](https://nodejs.org/dist/latest-v19.x/docs/api/worker_threads.html#new-workerfilename-options), чтобы узнать, как настроить параметры рабочего потока, в частности параметры argv и execArgv.

## worker.getEnvironmentData(key)

<details> <summary> История версий</summary>

| **Версия**         | **Изменения**                |
| ------------------ | ---------------------------- |
| v17.5.0, v16.15.0  | Больше не экспериментальный. |
| v15.12.0, v14.18.0 | Введён в Node.js             |

</details>

- **`key`** [\<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)- Любое произвольное, клонируемое значение JavaScript, которое может быть использовано в качестве ключа [\<Map>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
- Returns: [\<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Внутри рабочего потока `worker.getEnvironmentData()` возвращает клон данных, переданных в `worker.setEnvironmentData()` порождающего потока. Каждый `new Worker` получает свою собственную копию данных об окружении автоматически.

```
const {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} = require('node:worker_threads');

if (isMainThread) {
  setEnvironmentData('Hello', 'World!');

  // Это повторно загружает текущий файл внутри рабочего экземпляра.
  const worker = new Worker(__filename);
} else {
  console.log(getEnvironmentData('Hello'));  // Выведет 'World!'.
}
```

## worker.isMainThread

**Добавлен в версии:** v10.5.0

- [\<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Возвразает `true`, если этот код не выполняется внутри потока [Worker](#class-worker).

```
const { Worker, isMainThread } = require('node:worker_threads')

if (isMainThread) {
  console.log(isMainThread) // true
  console.log('Вне рабочего потока (Worker)')

  // Это повторно загружает текущий файл внутри рабочего экземпляра.
  new Worker(__filename)
} else {
  console.log(isMainThread) // false
  console.log('Внутри рабочего потока (Worker)')
}
```

## worker.markAsUntransferable(object)

**Добавлен в версии:** v14.5.0, v12.19.0

Маркирует объект как не подлежащий передаче. Если объект встречается в списке передачи в вызове [port.postMessage()](#portpostmessagevalue-transferlist), он игнорируется.

В частности, это имеет смысл для объектов, которые можно клонировать, а не передавать, и которые используются другими объектами на передающей стороне. Например, таким образом Node.js помечает `ArrayBuffers`, которые он использует для своего [`Buffer` pool](https://nodejs.org/dist/latest-v19.x/docs/api/buffer.html#static-method-bufferallocunsafesize).

Эта операция не может быть отменена:

```
const { MessageChannel, markAsUntransferable } = require('node:worker_threads')

const pooledBuffer = new ArrayBuffer(8)
const typedArray1 = new Uint8Array(pooledBuffer)
const typedArray2 = new Float64Array(pooledBuffer)

// Пометили pooledBuffer как не не подлежащий переносу.
markAsUntransferable(pooledBuffer)

const { port1 } = new MessageChannel()
port1.postMessage(
  typedArray1, // пытаемся передать (transfer) typedArray1
  [typedArray1.buffer] // пытаемся передать pooledBuffer
)

// Выведем в консоль содержимое typedArray1 - он по-прежнему владеет
// своей памятью, т.к. он был клонирован, а не передан (transferred).
// Без `markAsUntransferable()` pooledBuffer и typedArray1 будут
// перенесены и в консоли выведет пустой Uint8Array.
console.log(typedArray1)
console.log(typedArray2) // typedArray2 также не затронут.
```

В браузерах нет эквивалента этому API.

## worker.moveMessagePortToContext(port, contextifiedSandbox)

## worker.parentPort

## worker.receiveMessageOnPort(port)

## worker.resourceLimits

## worker.SHARE_ENV

## worker.setEnvironmentData(key[, value])

## worker.threadId

## worker.workerData

## Class: MessageChannel

## Class: MessagePort

### Event: 'close'

### Event: 'message'

### Event: 'messageerror'

### port.close()

### port.postMessage(value[, transferList])

#### Рекоммендации при передаче TypedArrays и Buffers

### port.ref()

### port.start()

### port.unref()

## Class: Worker

### new Worker(filename[, options])

### Event: 'error'

### Event: 'exit'

### Event: 'message'

### Event: 'messageerror'

### Event: 'online'

### worker.getHeapSnapshot()

### worker.performance

#### performance.eventLoopUtilization([utilization1[, utilization2]])

### worker.postMessage(value[, transferList])

### worker.ref()

### worker.resourceLimits

### worker.stderr

### worker.stdin

### worker.stdout

### worker.terminate()

### worker.threadId

### worker.unref()

## Примечания

### Синхронная блокировка stdio

### Запуск рабочих потоков из скриптов предварительной загрузки
