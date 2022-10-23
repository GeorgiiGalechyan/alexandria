<details> <summary> Содержание </summary>

- [Net](#Net)
  - [IPC support](#)
    - [Identifying paths for IPC connections](#)
  - [Class: net.BlockList]()
    - [blockList.addAddress(address[, type])]()
    - [blockList.addRange(start, end[, type])]()
    - [blockList.addSubnet(net, prefix[, type])]()
    - [blockList.check(address[, type])]()
    - [blockList.rules]()
  - [Class: net.SocketAddress]()
    - [new net.SocketAddress([options])]()
    - [socketaddress.address]()
    - [socketaddress.family]()
    - [socketaddress.flowlabel]()
    - [socketaddress.port]()
  - [Class: net.Server]()
    - [new net.Server([options][, connectionlistener])]()
    - [Event: 'close']()
    - [Event: 'connection']()
    - [Event: 'error']()
    - [Event: 'listening']()
    - [Event: 'drop']()
    - [server.address()]()
    - [server.close([callback])]()
    - [server.getConnections(callback)]()
    - [server.listen()]()
      - [server.listen(handle[, backlog][, callback])]()
      - [server.listen(options[, callback])]()
      - [server.listen(path[, backlog][, callback])]()
      - [server.listen([port[, host[, backlog]]][, callback])]()
    - [server.listening]()
    - [server.maxConnections]()
    - [server.ref()]()
    - [server.unref()]()
  - [Class: net.Socket]()
    - [new net.Socket([options])]()
    - [Event: 'close']()
    - [Event: 'connect']()
    - [Event: 'data']()
    - [Event: 'drain']()
    - [Event: 'end']()
    - [Event: 'error']()
    - [Event: 'lookup']()
    - [Event: 'ready']()
    - [Event: 'timeout']()
    - [socket.address()]()
    - [socket.bufferSize]()
    - [socket.bytesRead]()
    - [socket.bytesWritten]()
    - [socket.connect()]()
      - [socket.connect(options[, connectListener])]()
      - [socket.connect(path[, connectListener])]()
      - [socket.connect(port[, host][, connectlistener])]()
    - [socket.connecting]()
    - [socket.destroy([error])]()
    - [socket.destroyed]()
    - [socket.end([data[, encoding]][, callback])]()
    - [socket.localAddress]()
    - [socket.localPort]()
    - [socket.localFamily]()
    - [socket.pause()]()
    - [socket.pending]()
    - [socket.ref()]()
    - [socket.remoteAddress](#socketremoteaddress)
    - [socket.remoteFamily]()
    - [socket.remotePort]()
    - [socket.resetAndDestroy()]()
    - [socket.resume()]()
    - [socket.setEncoding([encoding])]()
    - [socket.setKeepAlive([enable][, initialdelay])]()
    - [socket.setNoDelay([noDelay])]()
    - [socket.setTimeout(timeout[, callback])]()
    - [socket.timeout]()
    - [socket.unref()]()
    - [socket.write(data[, encoding][, callback])]()
    - [socket.readyState]()
  - [net.connect()]()
    - [net.connect(options[, connectListener])]()
    - [net.connect(path[, connectListener])]()
    - [net.connect(port[, host][, connectlistener])]()
  - [net.createConnection()]()
    - [net.createConnection(options[, connectListener])]()
    - [net.createConnection(path[, connectListener])]()
    - [net.createConnection(port[, host][, connectlistener])]()
  - [net.createServer([options][, connectionlistener])]()
  - [net.isIP(input)]()
  - [net.isIPv4(input)]()
  - [net.isIPv6(input)]()

</details>

---

# Net

**Исходный код:** [lib/net.js](https://github.com/nodejs/node/blob/v18.10.0/lib/net.js)

Встроенный модуль Net предоставляет набор API для **асинхронной** работы с сетями, создания потоковых (stream-based) серверов TCP или IPC, а так же клиентов.
Для создания серверов см. [`net.createServer()`](), а для создания клиента см. [`net.createConnection()`]().

## **Поддержка IPC**

**IPC** (_inter-process communication_) обеспечивает обмен данными **между потоками** одного или разных **процессов**. IPC также называют **межпроцессным взаимодействием**.
Встроенный модуль **Net** поддерживает IPC с _именованными каналами_ (named pipe) Windows и _доменными сокетами_ Unix в других операционных системах.

> **Примечание переводчика (требуется проверка):**  
> Скорее всего имеется в виду, что Node.js подстраивается под операционные системы и может эмулировать функционал (создавать абстракции) именованных каналов как в Windows и доменных сокетов как в Unix.

### Идентификация путей для IPC-соединений

Функции [`net.connect()`](), [`net.createConnection()`](), [`server.listen()`](), and [`socket.connect()`]() могут принимать в качестве аргумента (параметр) **path** для идентиикации (определения) конечных точек IPC.

> **Примечание переводчика (требуется проверка):**  
> Кончные точки IPC (endpoint) должны быь локальными. IPC связывает два потока одного локального процесса или два потока относящихся к разным процессам. Я мало знаком с IPC, и не знаю, можно ли использовать IPC чтобы связать 2 процесса, работающих на разных физических устройствах.

В Unix _локальный сокет_ также называют _**доменным сокетом Unix**_. Путь (`path`) сокета — это расположение в файловой системе, которое вы можете выбрать для хранения сокета, который обеспечивает связь между клиентом и [демоном](<https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BC%D0%BE%D0%BD_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0)>).  
Длина пути усекается до длины зависящей от ОС - `sizeof(sockaddr_un.sun_path) — 1`. Типичные значения — 107 байт в Linux и 103 байта в macOS.

> **Примечание переводчика:**  
> При указании пути (path), следует учитывать, что максимальная длина пути ограчничена в размере на уровне ОС. Максимальная длина пути измеряется в байтах. Причём в разных ОС максимальная длина пути различается. Поэтому стремитесь к совместимости!!! Учитывайте размер пути вашего доменного (локального) сокета Unix и операционную систему в которой этот код будет выполняться.

При создании доменного сокета Unix через API Node.js, Node.js сам создаст сокет Unix и сам его отключит. Например, вызвав команду [`net.createServer()`]() node.js создат доменный сокет Unix, а команда [`server.close()`]() разъединит его. Однако, имейте ввиду, что если пользователь создает сокет домена Unix за пределами этих абстракций, т.е. не через API Node.js, а каким-то иным способом, то пользователь должен самостоятельного удалить такой сокет. То же самое происходит, когда API-интерфейс Node.js создает доменный сокет Unix, но затем программа аварийно завершает работу. Короче говоря, **доменный сокет Unix будет виден в файловой системе и будет существовать до тех пор, пока не будет отключен**.

> **Рекоммендация от переводчика:**  
> Перед тем как идти дальше, советую почитать про именованные каналы на Wikipedia (там не много) на [английском языке](https://en.wikipedia.org/wiki/Named*pipe) или на [русском языке](https://ru.wikipedia.org/wiki/%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9*%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB).

В Windows локальный домен реализован с использованием концепции **именованного канала**. Путь должен указывать на запись в корневой папке `\\?\pipe\` или `\\.\pipe\`. Допускаются любые символы, но последний может выполнять некоторую обработку имен каналов, например, разрешать `..` последовательности. Несмотря на то, как это может выглядеть, пространство имен pipe является плоским, т.е. не иерархическим. Каналы (pipes) не сохранятся. Они удаляются, когда закрывается последняя ссылка на них. В отличие от доменных сокетов Unix, Windows закроет и удалит канал, когда процесс-владелец завершится.

Из-за правил экранирования в JavaScript неоходимо, чтобы пути были указаны с дополнительной обратной косой чертой.

**Ниже указан пример для создания именованного канала Windows с учетом правил экранирования JavaScript:**

```
  net.createServer().listen(
    path.join('\\\\?\\pipe', process.cwd(), 'myctl'));
```

---

## Class: **`net.BlockList`**

###### Введён в версии: v15.0.0, v14.18.0

Объект **`BlockList`** можно передавать в параметры некоторых сетевых API для указания правил отключения **входящего** (кто к нам подключается) или **исходящего** (к кому мы хотим подключиться) доступа к определенным IP-адресам, диапазонам IP-адресов или подсетям IP. Иными словами - API Node.js позволяет создать черный список IP адресов по тем или иным правилам. Правила будут рассмотрены ниже.

### **`blockList.addAddress(address[, type])`**

###### Введён в версии: v15.0.0, v14.18.0

- **`address:`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<net.SocketAddress>`]() - адрес в формате IPv4 или IPv6.
- **`type:`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - либо `ipv4` or `ipv6`. **Default:** `ipv4`.

Создаёт (добавляет) правило для блокировки одного указанного IP адреса.  
Способы задать правила для блокирования нескольких IP адресов будут указаны ниже.

**Пример написания (синтаксиса):**

```
  const blockList = new net.BlockList();

  blockList.addAddress('28.0.178.161', 'ipv4')
  blockList.addAddress('28.0.178.162', 'ipv4')
  blockList.addAddress('28.0.111.111') // default type = 'ipv4'
```

### **`blockList.addRange(start, end[, type])`**

###### Введён в версии: v15.0.0, v14.18.0

- **`start`:** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<net.SocketAddress>`]() - начальный адрес в формате IPv4 или IPv6 в диапазоне IP адресов.
- **`end`:** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<net.SocketAddress>`]() - конечный адрес в формате IPv4 или IPv6 в диапазоне IP адресов.
- **`type:`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - либо `ipv4` or `ipv6`. **Default:** `ipv4`.

Создаёт (добавляет) правило для блокировки диапазона IP-адресов от начала (`start`) (включительно) до конца (`end`) (включительно).

**Пример написания (синтаксиса):**

```
  const blockList = new net.BlockList();

  blockList.addRange('10.0.0.1', '10.0.0.10', 'ipv4')
  blockList.addRange('20.0.0.1', '20.0.0.10') // default type = 'ipv4'
```

### **`blockList.addSubnet(net, prefix[, type])`**

###### Введён в версии: v15.0.0, v14.18.0

- **`net:`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<net.SocketAddress>`]() - адрес сети в формате IPv4 или IPv6.
- **`prefix:`** [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) - Количество бит префикса CIDR. Для IPv4 это должно быть значение от 0 до 32. Для IPv6 это должно быть значение от 0 до 128.
- **`type:`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - либо `ipv4` or `ipv6`. **Default:** `ipv4`.

Создаёт (добавляет) правило для блокировки диапазона IP-адресов, указанных в качестве маски подсети.

> **Примечание переводчика:**  
> Рекоммендую ознакомиться с маленькой русскоязычной статьёй на Wikipedia - **["Сетевой адрес"](https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%82%D0%B5%D0%B2%D0%BE%D0%B9_%D0%B0%D0%B4%D1%80%D0%B5%D1%81)**. данная статья нужна чтобы на базом уровне понять, что такой **_"адрес сети"_**, а что такое **_"сетевой адрес"_**.

> **Рекоммендация переводчика:**  
> **CIDR** - от _англ. Classless Inter-Domain Routing_ - _бесклассовая междоменная адресация_, или просто - **бесклассовая адресация**.  
> Чтобы понять как работает **CIDR** советую ознакомиться с небольшой статьёй на Wikipedia на **[английском языке](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)** или **[русском языке](https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%81%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D1%8F_%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%B0%D1%86%D0%B8%D1%8F)**.

**Пример написания (синтаксиса):**

```
  const blockList = new net.BlockList();

  blockList.addSubnet('8592:757c:efae:4e45::', 64, 'ipv6')
  blockList.addSubnet('123.123.123.', 27') // default type = 'ipv4'
```

### **`blockList.check(address[, type])`**

###### Введён в версии: v15.0.0, v14.18.0

- **`address:`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<net.SocketAddress>`]() - адрес в формате IPv4 или IPv6.
- **`type:`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - либо `ipv4` or `ipv6`. **Default:** `ipv4`.
- **`Возвращает:`** [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type).

Возвращает `true`, если данный IP-адрес соответствует любому из правил, добавленных в черный список., т.е. проверяет, находится ли указанный IP адрес в `BlockList`.

**Пример написания (синтаксиса):**

```
const blockList = new net.BlockList();
blockList.addAddress('123.123.123.123');
blockList.addRange('10.0.0.1', '10.0.0.10');
blockList.addSubnet('8592:757c:efae:4e45::', 64, 'ipv6');

console.log(blockList.check('123.123.123.123'));  // выведет: true
console.log(blockList.check('10.0.0.3'));  // выведет: true
console.log(blockList.check('222.111.111.222'));  // выведет: false

// Нотация IPv6 для IPv4 адресов также работает:
// ::ffff:7b7b:7b7b (ipv6) = 123.123.123.123 (ipv4)
console.log(blockList.check('::ffff:7b7b:7b7b', 'ipv6')); // выведет: true
```

### **`blockList.rules`**

###### Введён в версии: v15.0.0, v14.18.0

Список активных BlockList-правил.

**Пример написания (синтаксиса):**

```
const blockList = new net.BlockList()

blockList.addAddress('123.123.123.123')
blockList.addRange('10.0.0.1', '10.0.0.10')
blockList.addSubnet('8592:757c:efae:4e45::', 64, 'ipv6')

console.log(blockList.rules)

//  Выведет в консоль массив строк (string):
//
//  [
//    'Subnet: IPv6 8592:757c:efae:4e45::/64',
//    'Range: IPv4 10.0.0.1-10.0.0.10',
//    'Address: IPv4 123.123.123.123'
//  ]
```

---

## Class: **`net.SocketAddress`**

### **`new net.SocketAddress([options])`**

###### Введён в версии: v15.0.0, v14.18.0

- **`options:`** [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - **`address:`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - сетевой адрес IPv4 или IPv6 в строковом формате (string). По умолчанию: `'127.0.0.1'`, если `family:` `ipv4` и `::`, если `family:` `'ipv6'`.
  - **`family:`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - либо `'ipv4'` or `'ipv6'`. **Default:** `'ipv4'`.
  - **`flowlabel:`** [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) - метка потока IPv6. Используется, только если `family:` `'ipv6'`.
  - **`port:`** [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) - номер IP-порта.

Объект `options` выглядит так:

```
{ address: '127.0.0.1', family: 'ipv4', port: 3000 }
```

Можно получить весь объект `options` или одно из его свойств.

### **`socketaddress.address`**

###### Введён в версии: v15.0.0, v14.18.0

Тип [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

Позволяет получить значение поля `address` объекта `options`.

### **`socketaddress.family`**

###### Введён в версии: v15.0.0, v14.18.0

Тип [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

Позволяет получить значение поля `family` объекта `options`.

### **`socketaddress.flowlabel`**

###### Введён в версии: v15.0.0, v14.18.0

Тип [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Позволяет получить значение поля `flowlabel` объекта `options`.

### **`socketaddress.port`**

###### Введён в версии: v15.0.0, v14.18.0

Тип [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Позволяет получить значение поля `port` объекта `options`.

**Пример испольщования :** **`net.SocketAddress`**

```
const net = require('net')

const server = net
  .createServer((socket) => {
    socket.write('Привет от Сервера!)')
  })
  .listen(2000, () => {
    console.log(`Server listening...`)
  })

// Код ниже сработает при подключении клиента к серверу

server.on('connection', (socket) => {

  // получаем объект options и сохраняем его в переменную address
  const address = socket.address()

  // получим значение полей address и port объекта options
  console.log(`К сокету ${address.address}:${address.port} подключился новый пользователь.`) // К сокету 127.0.0.1:2000 подключился новый пользователь.
})
```

---

## Class: **`net.Server`**

###### Введён в версии: v0.1.90

Расширяет (extends) класс [`<EventEmitter>`](https://nodejs.org/api/events.html#class-eventemitter)

Класс **`net.Server`** используется для создания сервера TCP или IPC.

> **Рекоммендация переводчика:**  
> Если вы ещё не знакомы с паттерном **EventEmitter**, то рекоммендую прочитать статью на Medium: ['Паттерны: Event Emitter. Реализация на JavaScript'](https://medium.com/@an_parubets/pattern-event-emitter-js-9378aa082e86).  
> Документация Node.js модуля **[Events](https://nodejs.org/api/events.html)** хорошо раскрывает концецию EventEmitter и описывает встроенный класс EventEmitter, но для новичков документация может быть сложна для понимания. Не стесняйтесь параллельно с изучением документации Node.js пользоваться сторонними материалами.

### **`new net.Server([options][, connectionListener])`**

- **`options`** [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) - смотри [`net.createServer([options][, connectionListener])`]().
- **`connectionListener`** [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) - Автоматически устанавливается в качестве слушателя для события (event) [`'connection'`]().
- Возвращает (returns): [<net.Server>]()

> **Примечание переводчика:**  
> При описании событий (events) мы будем использовать выражения-синонимы **_"генерирация события"_**, **_"излучение или испускание сигнала"_**, **_"сигнализирование о событии"_**. Напимер, применительно к классу `net.Server`, когда мы будем говорить, что при закрытии сервера генерируется событие `'сlose'`, то будем иметь в виду, что при закрытии сервера по тем или иным причинам (плановое закрытие, разрыв соединения, ошибка программы и т.д.) будет вызван соответствующий 'слушатель', который "подписан" на событие `'close'`.  
> **Слушатель** - **это просто функция, кусок кода**, который будет вызван (запущен) при генерации события. Таким образом, когда мы пишем некий код (функцию) и подписывая его не событие `'close'` мы можем явно указать, как должно вести себя приложение (какой код должен сработать) при закрытии сервера. Таким образом, мы можем явно задать поведение приложения в зависимости от причины закрытия сервера, прописав соответствующую логику.

**`net.Server`** - это EventEmitter со следующими событиями:

### **Событие (event):** **`'close'`**

###### Введёно в версии: v0.5.0

Событие `'close'` генерируется при закрытии сервера. Это событие **не генерируется до тех пор**, пока не будут завершены все соединения, т.е. событие не будет сгенерировано, пока к серверу подключен хотя бы 1 (один) клиент.

### **Событие (event):** **`'connection'`**

###### Введён в версии: v0.1.90

- [`<net.Socket>`]() - объект к которому подключаются.

> **Примечание переводчика:**  
> Соединение (connection) фактически происходит между сокетами (socket). Сокеты - это не что-то физичесое, а это абстракция, необходимая для идентификации подключений. По сути, при установлении соединения открывается некий канал для обмена сообщений между клиентским сокетом и серверным сокетом. Для того чтобы различать одни каналы (соединения) от таких же каналов (идентифицировать каналы) используются 4 (четыре) параметра: адреса хоста и порта клиентского сокета, вдреса хоста и порта серверного сокета, которые являются уникальными для каждого соединения.

Событие `'connection'` гененируется при установлении нового соединения. `socket` является экземпляром `net.Socket`.

**Пример работы события `'connection'`:**

```
const net = require('net')

const server = net.createServer((socket) => {

  // Сначала при событии 'connection' сработает код внутри этого блока:
  console.log(`1. К сокету подключился новый пользователь!`)

  }).listen(2000, () => {})

// так же мы можем обработать событие 'connection' отдельно:
server.on('connection', (socket) => {
  const address = socket.address()
  console.log(`2. К сокету ${address.address}:${address.port} подключился новый пользователь.`)
})

// При подключении клиента в консоль выведется следующее:
// 1) К сокету подключился новый пользователь.
// 2) К сокету 127.0.0.1:2000 подключился новый пользователь.
```

### **Событие (event):** **`'error'`**

###### Введён в версии: v0.1.90

- [`<Error>`]()

Событие `'error'` гененируется при возникновении ошибки. В отличие от `net.Socket`, событие `close` **_не будет сгенерировано_** непосредственно после этого события, если только `server.close()` не будет вызван вручную. См. пример в обсуждении **[`server.listen()`]()**.

> **Примечание переводчика:**  
> Нужно различать классы `net.Server` (сервер) и `net.Socket` (сокет). Ошибки могут возникать как на уровне сервера, так и на уровне сокета внутри этого сервера. События `'error'` и `'close'` генерирются по разному в зависимости от экземпляра (instance) класса в котором они возникли. Например, событие `error` у класса `net.Socket` **автоматически вызовет событие** `'close'` у класса `net.Socket`.  
> Однако если мы отловим и обработаем ошибку на уровне класса `net.Socket`, то до уровня класса `net.Server` ошибка не дойдет, и у сервера не вызовятся события `'error'` и `'close'`. В то же время, если событие `'error'` произойдет на уровне экземпляра (instance) класса `net.Server`, то в отличии от класса `net.Socket`, событие `'close'` у класса `net.Server` **не будет вызано автоматически**.

**Пример использования события `'error'`:**

```
const net = require('net')

const server = net
  .createServer((socket) => {
    socket.on('error', (err) => {
      throw err;  // здесь можно обработать ошибки СОКЕТА!
    })
  })
  .on('error', (err) => {
    throw err; // здесь можно обработать ошибки СЕРВЕРА!
})

// Ещё можно обрабатывать ошибки СЕРВЕРА в отдельном блоке
server.on('error', (err) => {
  throw err;
})

server.listen(() => {
  console.log('Сервер слушает порт:', server.address())
})
```

### **Событие (event):** **`'listening'`**

###### Введён в версии: v0.1.90

Событие `'listening'` гененируется после того как сервер 'был связан' (bound) после вызова **[`server.listen()`]()**, т.е. событиие `'listening'` срабатывает после того как сервер начал прослушивать порт, и как следствие, сервер стал готовым принимать входящие соединения от клиентов.

**Пример работы события `'listening'`:**

```
const net = require('net')

const server = net
  .createServer((socket) => {})
  .listen(2000, () => {
    // мы можем обработать событие 'listening' в этом блоке
    console.log(`1. Server listening... (первый)`)
  })

// так же мы можем обработать событие 'listening' отдельно:
server.on('listening', () => {
  console.log(`2. Server listening... (второй)`)
})

// При чтении файла (кода) в консоль выведется следующее:
// 1. Server listening... (первый)
// 2. Server listening... (второй)
```

### **Событие (event):** **`'drop'`**

###### Введён в версии: v18.6.0

Событие `'drop'` генерируется когда количество подключений достигает порога параметра `server.maxConnections`. По достижении максимально разрешённого числа соединений, сервер начнёт отбрасывать (drop) все новые подключения и вместо этого будет генерировать событие `'drop'`. Если наш экземпляр сервера работает по протоколу TCP (_TCP-сервер_), то аргумент выглядит следующим образом (см. ниже), в противном случае аргумент не определён (**`undefined`**).

- **`data`** [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) - аргумент передается прослушивателю событий, т.е. аргумент будет доступен в функции, вызываемой при генерации события `'drop'`.
  - **`localAddress`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - сетевой адрес локального сокета, т.е. адрес серверного сокета.
  - **`localPort`** [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) - номер порта локального сокета, т.е. порт серверного сокета.
  - **`localFamily`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - имя семейства адресов для локального (серверного) сокета (версия IP-протокола - IPv4 или IPv6.).
  - **`remoteAddress`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - сетевой адрес удаленного сокета, т.е. номер порта клиентского сокета.
  - **`remotePort`** [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) - номер удаленного порта, т.е. номер порта клиентского сокета.
  - **`remoteFamily`** [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) - имя семейства адресов для удаленного (клиентского) сокета (версия IP-протокола - IPv4 или IPv6.)

**Пример работы события `'drop'`:**

Создадим файл **_server.js_**:

```
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
```

Создадим два файла **_client-1.js_** и **_client-2.js_** с одинаковым кодом:

```
const net = require('net')

const options = { host: '127.0.0.1', port: 2000 } // задаем адрес серверного сокета к которому хотим присоединиться

const client = new net.Socket() // создаём клиентский сокет

client.connect(options, () => {}) // подключаем клиентский сокет к серверному

```

> **Примечание переводчика:**  
> Указанные ниже сетевые данные сокета были получены переводчиком при запуске кода **на своём ноутбуке**. У Вас в консоль могут вывестись другие данные.  
> Обратите внимание в файле **_server.js_** на параметр `server.maxConnections = 1` - т.е. сервер может поддерживать **только одно соединение**, остальные попытки подключения к серверному сокету **будут отброшены**, что и вызовет генерацию события `'drop'` (_отбрасывание_)!  
> Обратите внимание, что **для удобства** при обработке события 'drop' мы выводим в консоль:
>
> ```
> console.log('3. ' + JSON.stringify(data))
> ```
>
> т.е. объект `data` представлен в формате json и мы привели его к строке (string) вызвав `JSON.stringify(data)`. Однако мы можем вывести в консоль просто объект `data`, но в этом случае нужно убрать из команды `console.log()` строку `'3. '` и выводить в консоль только объект `data`:
>
> ```
> console.log(data)
> ```
>
> без приведения его в строке. Объект data содержит сведения о сброшенном соединении!

Запустим последовательно файлы **_server.js_**, **_client-1.js_** и **_client-2.js_**. В консоль будут выведены следующие сообщения:

```
1. Сервер слушает сокет :::2000
2. К сокету :::2000 подключился клиент.
3. {
    "localAddress":"::ffff:127.0.0.1",
    "localPort":2000,
    "localFamily":"IPv6",
    "remoteAddress":"::ffff:127.0.0.1",
    "remotePort":53670,
    "remoteFamily":"IPv6"
  }
```

### **`server.address()`**

<details> <summary> История изменений API </summary>

| Версия  | Изменения                                                  |
| ------- | ---------------------------------------------------------- |
| v18.4.0 | Свойство `'family'` теперь возвращает строку вместо числа. |
| v18.0.0 | Свойство `'family'` теперь возвращает число вместо строки. |
| v0.1.90 | Введена в версии: v0.1.90                                  |

</details>

- **Возвращает (return)** [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<null>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type)

Возвращает объект, который содержит связанный (bound) сетевой адрес сервера, имя семейства адресов (IPv4 или IPv6) и номер порта. Node.js обращается к операционнй системе и получает из неё информацю об IP-сокете, который прослушивает сервер.  
`server.address()` можно использовать, чтобы узнать, какой порт был назначен, в случаях когда IP-адресс назначается операционной системой.

> **Примечание переводчика:**  
> Есть ситуации, когда мы не задам IP-адрес явно, а его назначает операционная система.  
> `server.address()` будет особенно полезен, когда мы хотим получить IP-адрес такого сокета.
> Применительно к IPC, мы можем получить имя именнованного канала Windows или доменного сокета Unix.

```
{ port: 3000, family : 'IPv4', address: '127.0.0.1' }
```

Для сервера, прослушивающего канал (pipe) или сокет домена Unix, имя возвращается в виде строки (string).

```
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
```

В консоль выведется сообщение:

```
Сервер открыт на порту: { address: '::', family: 'IPv6', port: 54553 }
```

`server.address()` возвращает значение `null` до того, как было вызвано событие `'listening'` или после вызова метода `server.close()`.

### **`server.close([callback])`**

###### Введён в версии: v0.1.90

- **`callback`** [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) - Вызывается при закрытии сервера.
- Возвращает: `<net.Server>`

Запрещает серверу принимать новые соединения и сохраняет существующие соединения. Эта функция является асинхронной, сервер окончательно закрывается, когда все соединения завершены, и сервер генерирует событие `'close'`. Аргумент `callback` не является обязательным. `callback` будет вызван после возникновения события `'close'`.  
В случае, если `server.close([callback])` будет вызван до того, как будет создан сервер, то `server.close([callback])` будет вызываться с ошибкой в качестве единственного аргумента.

### **`server.getConnections(callback)`**

###### Введён в версии: v0.9.7

- **`callback`** [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) - Вызывается при закрытии сервера.
- Возвращает: `<net.Server>`

Позволяет асинхронно получить количество одновременных подключений на сервере. Работает, когда "сокеты были вставлены в вилки". Параметр `callback` должен принимать два аргумента `err` и `count`.

**Пример использования кода:**

```
server.getConnections((err, count) => console.log(count))
```

Колличество одновременных подключений, это по сути количество ваших подключений минус 1, т.е., если к нашему серверу подключились 2 клиента, то `server.getConnections((err, count) => console.log(count))` выведет в консоль "1" одовременное соединение. А если у нас 6 клиентов, то `server.getConnections((err, count) => console.log(count))` выведет в терминал "5" одовременных соединений.

### **`server.listen()`**

Запускает сервер, прослушивающий соединения. Экземпляр `net.Server` может быть TCP- или IPC-сервером в зависимости от того, что он прослушивает.
**Возможные варианты вызова:**

- `server.listen(handle[, backlog][, callback])`
- `server.listen(options[, callback])`
- `server.listen(path[, backlog][, callback])` - для IPC-серверов.
- `server.listen([port[, host[, backlog]]][, callback])` для TCP-серверов.

Эта функция является асинхронной. Когда сервер начнет прослушивание, будет сгенерировано событие 'listening'. Последний параметр `callback` будет добавлен в качестве прослушивателя для события 'listening'.

Все `listen()` методы могут принимать параметр `backlog`, чтобы указать максимальную длину очереди ожидающих соединений. Фактическая длина будет определяться операционной системой через настройки ядра, такие как `tcp_max_syn_backlog` и `somaxconn` в Linux. Значение этого параметра по умолчанию — 511 (не 512).

> **Примечание переводчика:**  
> Подробнее про то, что вообще такое **backlog** и зачем он нужен вы можете прочитать на **[stackoverflow](https://stackoverflow.com/questions/36594400/what-is-backlog-in-tcp-connections)**, или как вариант, есть **[анлоязычный блог](https://tangentsoft.net/wskfaq/advanced.html#backlog)**.

Для всех `net.Socket` установлено значение `SO_REUSEADDR` (подробности см. в [socket(7)](https://man7.org/linux/man-pages/man7/socket.7.html)).

Метод `server.listen()` может быть вызван повторно тогда и только тогда, когда произошла ошибка во время первого вызова `server.listen()` или была вызвана `server.close()`. В противном случае будет выдана ошибка `ERR_SERVER_ALREADY_LISTEN`.

Одной из наиболее распространенных ошибок, возникающих при прослушивании, является `EADDRINUSE`. Это происходит, когда другой сервер уже прослушивает запрошенный `порт`/`путь`/`дескриптор`. Один из способов справиться с этим - повторить попытку через определенное время:

```
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});
```

### **`server.listen(handle[, backlog][, callback])`**

###### Введён в версии: v0.5.10

- **`handle`** [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- **`backlog`** [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) - общий параметр для функции `server.listen()`
- **`callback`** [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- **Возвращает:** [`<net.Server>`]()

Запускает сервер, который прослушивает соединения с заданным `handle` (дескрипторе), который уже привязан к порту, доменному сокету Unix или именованному каналу Windows.

Объектом `handle` (дескриптора) может быть либо сервер, либо сокет (что угодно с базовым членом `_handle`), либо объект с членом `fd`, который является допустимым файловым дескриптором.

Прослушивание файлового дескриптора не поддерживается в Windows.

### **`server.listen(options[, callback])`**

<details> <summary> История изменений API </summary>

| Версия       | Изменения                             |
| ------------ | ------------------------------------- |
| **v15.6.0**  | Добавлена ​​поддержка `AbortSignal`.  |
| **v11.4.0**  | Добавлена поддержка опции `ipv6Only`. |
| **v0.11.14** | Введён в версии: v0.11.14             |

</details>

- **`options`** [`<Object>`]() - обяательный параметр. Поддерживает свойства:
  - **`port`** [`<number>`]()
  - **`host`** [`<string>`]()
  - **`path`** [`<string>`]() - будет игнорироваться, если указан **`порт`**. См. [Определение путей для соединений IPC](https://nodejs.org/dist/latest-v19.x/docs/api/net.html#identifying-paths-for-ipc-connections).
  - **`backlog`** [`<number>`]() - общий параметр для методов `server.listen()`.
  - **`exclusive`** [`<boolean>`]() - **по умолчанию**: `false`.
  - **`readableAll`** [`<boolean>`]() - для IPC-серверов делает канал доступным для чтения для всех пользователей. **По умолчанию:** `false`.
  - **`writableAll`** [`<boolean>`]() - для IPC-серверов делает канал доступным для записи для всех пользователей. **По умолчанию:** `false`.
  - **`ipv6Only`** [`<boolean>`]() - для TCP-серворов установка для **`ipv6Only`** значения **`true`** отключит поддержку двойного стека, т. е. привязка к хосту `::` не приведет к привязке `0.0.0.0`. **По умолчанию:** `false`.
  - **`signal`** [`<AbortSignal>`]() - cигнал `AbortSignal`, который можно использовать для закрытия прослушивающего сервера.
- **`callback`** [`Function>`]()
- **Возвращает:** `<net.Server>`

Если указан `port`, метод ведёт себя так же, как `server.listen([port[, host[, backlog]]][, callback])`. В противном случае, если указан `path`, он ведет себя так же, как `server.listen(path[, backlog][, callback])`. Если ни один из них не указан, будет выброшена ошибка.  
Если `exclusive: false` (по умолчанию), то рабочие кластеры будут использовать один и тот же базовый дескриптор, что позволит разделить обязанности по обработке соединений. Если `exclusive: true`, дескриптор не используется совместно, а попытка совместного использования порта приводит к ошибке. Ниже показан пример, который прослушивает эксклюзивный порт.

```
server.listen({
  host: 'localhost',
  port: 80,
  exclusive: true
});
```

Если `exclusive: true`, а базовый дескриптор является общим, возможно, что несколько рабочих запросят дескриптор с разными значением `backlog`. В этом случае будет использоваться первый `backlog`, переданный ведущему процессу.

Запуск IPC-сервера от имени root (адмнистратора) может привести к тому, что путь (path) к серверу станет недоступным для непривилегированных пользователей. Использование `readableAll` и `writableAll` сделает сервер доступным для всех пользователей.

Если опция `signal` включена, вызов `.abort()` на соответствующем `AbortController` аналогичен вызову `.close()` на сервере:

```
const controller = new AbortController();

server.listen({
  host: 'localhost',
  port: 80,
  signal: controller.signal
});

// Позже, когда вы захотите закрыть сервер.
controller.abort();
```

### **`server.listen(path[, backlog][, callback])`**

###### Введён в версии: v0.1.90

- **`path`** [`<string>`]() - путь, который сервер должен прослушивать. См. [Определение путей для соединений IPC](https://nodejs.org/dist/latest-v19.x/docs/api/net.html#identifying-paths-for-ipc-connections).
- **`backlog`** [`<number>`]() - общий параметр для метода **`server.listen()`**.
- **`callback`** [`<Function>`]()
- **Возвращает:** [<net.Server>]()

Запускает [IPC-сервер](https://nodejs.org/dist/latest-v19.x/docs/api/net.html#ipc-support), прослушивающий соединения по заданному пути.

### **`server.listen([port[, host[, backlog]]][, callback])`**

###### Введён в версии: v0.1.90

- **`port`** [`<number>`]()
- **`host`** [`<string>`]()
- **`backlog`** [`<number>`]() - общий параметр для методов **`server.listen()`**
- **`callback`** [`<Function>`]()
- **Возвращает:** [<net.Server>]()

Запускает TCP-сервер, прослушивающий соединения на заднном `port` и `host`.

Если `port` не указан или равен `0`, операционная система назначит произвольный неиспользуемый порт. Номер порта можно получить с помощью метода **`server.address().port`** после создания события ['listening']().

Если `host` опущен, сервер будет принимать соединения по [неуказанному адресу IPv6](https://en.wikipedia.org/wiki/IPv6_address#Unspecified_address) (`::`), когда IPv6 доступен. или по [неуказанному адресу IPv4](https://en.wikipedia.org/wiki/0.0.0.0) (`0.0.0.0`), если IPv6 недоступен.

В большинстве операционных систем прослушивание [неуказанного адреса IPv6](https://en.wikipedia.org/wiki/IPv6_address#Unspecified_address) (`::`) может привести к тому, что `net.Server` также будет прослушивать [неуказанный адрес IPv4](https://en.wikipedia.org/wiki/0.0.0.0) (`0.0.0.0`).

> **Примечание перводчика:**  
> **::/128** — Адрес со всеми нулевыми битами называется **неуказанным адресом** (соответствует 0.0.0.0/32 в IPv4).  
> Этот адрес никогда не должен назначаться интерфейсу и должен использоваться только в ПО до того, как приложение узнает исходный адрес своего хоста, подходящий для ожидающего соединения. Маршрутизаторы не должны пересылать пакеты с неопределенным адресом.

### **`server.listening`**

###### Введён в версии: v5.7.0

- [`<boolean>`]() - указывает, прослушивает ли сервер соединения или нет.

**Пример использования:**

```
const net = require('net')

let server = new net.Server().listen(2000, () => {
  console.log('Сервер прослушивается на порту 2000')
})

console.log('Serser.listening: ' + server.listening)
```

**В консоль выведется:**

```
Serser.listening: true
Server listening on port 2000
```

### **`server.maxConnections`**

###### Введён в версии: v0.2.0

- [`<integer>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Ограничивает максимальное число активных соединений для сервера. Когда количество подключений к серверу превысит порог `server.maxConnections`, то сервер начнёт отбрасывать новые соединения и устанвления соединения начнет генерировать событие `drop`.

Не рекомендуется использовать эту опцию после отправки сокета дочернему элементу с помощью функции `child_process.fork()`.

**Пример использования:**

```
const net = require('net')

const server = net
  .createServer((socket) => {
    // указываем максимальное количество соединений для сервера
    server.maxConnections = 5
  })
  .listen(2000)

// обработка события 'drop'
// data - сведения об отброшенном соединении в формате json
server.on('drop', (data) => console.log(data))
```

### **`server.ref()`**

###### Введён в версии: v0.9.1

- **Возвращает:** `<net.Server>`

В противоположность `unref()`, вызов `ref()` на ранее не обновленном сервере не позволит программе выйти, если это единственный оставшийся сервер (поведение по умолчанию). Если сервер уже вызывал `ref()`, то повторный вызов `ref()` не будет иметь никакого эффекта.

### **`server.unref()`**

###### Введён в версии: v0.9.1

- **Возвращает:** `<net.Server>`

Вызов `unref()` на сервере позволит программе завершить работу, если это единственный активный сервер в системе событий (event system). Если сервер уже вызывал `unref()`, то повторный вызов `unref()` не будет иметь никакого эффекта.
