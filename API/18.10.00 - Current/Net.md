<details> <summary> Содержание </summary>

- [Net](#Net)
  - [IPC support](#support-IPC)
    - [Identifying paths for IPC connections]()
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
    - [socket.remoteAddress]()
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

Встроенный модуль Net предоставляет набор API для **асинхронной** работы с сетью, для создания потоковых (stream-based) серверов TCP или IPC, а так же клиентов.
Для создания серверов см. [net.createServer()](), а для создания см. [net.createConnection()]().

## Поддержка IPC (_от англ_. inter-process communication) {#support-IPC}

IPC - обмен данными **между потоками** одного или разных **процессов**. IPC тк же называют **межпроцессным взаимодействием**.
Встроенный модуль "Net" поддерживает IPC с именованными каналами (named pipe) Windows и сокеты домена Unix в других операционных системах.

> **Примечание переводчика (требуется проверка):**  
> Скорее всего имеется в виду, что при использоовании Node.js подстраивается по операционные системы и эмулирует для работы с IPC именованные каналы как в Windows и доменные сокеты Unix.

### Идентификация путей для IPC-соединений

[net.connect()](), [net.createConnection()](), [server.listen()](), and [socket.connect()]() могут принимать аргумент (параметр) **path** для идентиикации (определения) конечных точек IPC.

> **Примечание переводчика (требуется проверка):**  
> Кончные точки IPC (endpoint) должны быь локальными. IPC связывает два потока одного локального процесса или два потока относящихся к разным процессам. Я мало знаком с IPC, и не знаю, можно ли связать 2 процесса, работающих на разных физических устройствах...

В Unix локальный сокет также называют доменным сокет Unix. Путь (path) сокета — это расположение в файловой системе, которое вы можете выбрать для хранения сокета, который обеспечивает связь между клиентом и [демоном](<https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BC%D0%BE%D0%BD_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0)>).  
Длина пути усекается до длины зависящей от ОС - `sizeof(sockaddr_un.sun_path) — 1`.Типичные значения — 107 байт в Linux и 103 байта в macOS.

> **Примечание переводчика:**  
> При указании пути (path), следует учитывать, что максимальная длина пути ограчничена в размере на уровне ОС. Максимальная длина пути измеряется в байтах. Причём в разных ОС максимальная длина пути различается. Поэтому стремитесь к совместимости!!! Учитывайте размер пути вашего сокета и операционную систему с которой будете работать.

При создании доменного сокета Unix через API Node.js, Node.js сам создаст сокет Unix и сам его отключит. Например, вызвав команду [net.createServer()]() node.js создат сокет домена Unix, а команда [server.close()]() разъединит его. Однако, имейте ввиду, что если пользователь создает сокет домена Unix за пределами этих абстракций, т.е. не через API node.js, то пользователь должен сам удалить его. То же самое происходит, когда API-интерфейс Node.js создает сокет домена Unix, но затем программа аварийно завершает работу. Короче говоря, **сокет домена Unix будет виден в файловой системе и будет существовать до тех пор, пока не будет отключен**.

> **Рекоммендация от переводчика:**  
> Перед тем как идти дальше, советую почитать про именованные каналы на Wikipedia (там не много) на [английском языке](https://en.wikipedia.org/wiki/Named_pipe) или на [русском языке](https://ru.wikipedia.org/wiki/%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB).

В Windows локальный домен реализован с использованием концепции **именованного канала**. Путь должен указывать на запись в корневой папке `\\?\pipe\` или `\\.\pipe\`. Допускаются любые символы, но последний может выполнять некоторую обработку имен каналов, например, разрешать `..` последовательности. Несмотря на то, как это может выглядеть, пространство имен pipe является плоским, т.е. не иерархическим. Каналы (pipes) не сохранятся. Они удаляются, когда закрывается последняя ссылка на них. В отличие от сокетов домена Unix, Windows закроет и удалит канал, когда процесс-владелец завершится.

JavaScript string escaping requires paths to be specified with extra backslash escaping such as:

Из-за правил экранирования в JavaScript неоходимо, чтобы пути были указаны с дополнительной обратной косой чертой, например:

    net.createServer().listen(
      path.join('\\\\?\\pipe', process.cwd(), 'myctl'));

---

#### socket.remoteAddress

Введён в версии: v0.5.10

- Возвращает: string

Возвращает удалённый IP-адрес в виде строки (string). Удалённй IP-адрес - это адрес клиента подключившегося к сокету.
Например, для ipv4 '127.0.0.1' или для ipv6 '2001:4860:a005::68'. Может возвращать undefind, если сокет уничтожен (например, если клиент отключился). Если клиент и сервер находятся на одном устройстве, то скорее всего адреса их хостов будут совпадать.
Значение можно выводить в консоль для отслеживания подключившихся клиентов или использовать в иных целях.

`Это тестовый текст. В git какие-то неполадки... вношу изменеия чтобы сделать коммит`git
