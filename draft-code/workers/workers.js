const { MessageChannel } = require('node:worker_threads')
const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) => console.log(data);

// Встроенный объект URL не клонируется и не передастся
port2.postMessage(new URL('https://example.org'));

// Выведет пустой объект: { }.