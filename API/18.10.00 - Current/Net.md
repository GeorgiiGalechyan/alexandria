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

> Объект `options` выглядит так:
>
> ```
> { address: '127.0.0.1', family: 'ipv4', port: 3000 }
> ```
>
> Можно получить весь объект `options` или одно из его свойств.

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

---
