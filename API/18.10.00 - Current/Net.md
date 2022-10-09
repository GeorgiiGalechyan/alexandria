<details> <summary>Содержание</summary>

- [Net]()
  - [IPC support]()
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

# Net

**Source Code:** [lib/net.js](https://github.com/nodejs/node/blob/v18.10.0/lib/net.js)

Встроенный модуль Net предоставляет набор асинхронных сетевых API для создания потоковых серверов TCP или IPC и клиентов.
Для создания сервера см. [net.createServer()](), а для создания см. [net.createConnection()]().

## Поддержка IPC (_от англ_. inter-process communication)

IPC - обмен данными **между потоками** одного или разных **процессов**. IPC тк же называют **межпроцессным взаимодействием**.
Встроенный модуль "Net" поддерживает IPC с именованными каналами (named pipe) Windows и сокеты домена Unix в других операционных системах.

> **Примечание переводчика (требуется проверка):**
> Скорее всего имеется в виду, что при использоовании Node.js на разных операционных системах, node.js может эмулировать на них именованные каналы как в Windows домены сокета Unix...

### Идентификация путей для IPC-соединений.

[net.connect()](), [net.createConnection()](), [server.listen()](), and [socket.connect()]() могут принимать аргумент (параметр) **path** для идентиикации (определения) конечных точек IPC.

> **Примечание переводчика (требуется проверка):**
> Кончные точки IPC (endpoint) должны быь локальными. IPC связывает два потока одного локального процесса или два потока относящихся к разным процессам. Я мало знаком с IPC, и не знаю, можно ли связать 2 процесса, работающих на разных физических устройствах...

В Unix локальный домен также известен как домен Unix. Путь — это путь к файловой системе. Он усекается до длины sizeof(sockaddr_un.sun_path) — 1, зависящей от ОС. Типичные значения — 107 байт в Linux и 103 байта в macOS. Если абстракция API Node.js создает сокет домена Unix, она также отключит сокет домена Unix. Например, net.createServer() может создать сокет домена Unix, а server.close() разъединит его. Но если пользователь создает сокет домена Unix за пределами этих абстракций, ему нужно будет удалить его. То же самое происходит, когда API-интерфейс Node.js создает сокет домена Unix, но затем программа аварийно завершает работу. Короче говоря, сокет домена Unix будет виден в файловой системе и будет существовать до тех пор, пока не будет отключен.

#### socket.remoteAddress

Введён в версии: v0.5.10

- Возвращает: string

Возвращает удалённый IP-адрес в виде строки (string). Удалённй IP-адрес - это адрес клиента подключившегося к сокету.
Например, для ipv4 '127.0.0.1' или для ipv6 '2001:4860:a005::68'. Может возвращать undefind, если сокет уничтожен (например, если клиент отключился). Если клиент и сервер находятся на одном устройстве, то скорее всего адреса их хостов будут совпадать.
Значение можно выводить в консоль для отслеживания подключившихся клиентов или использовать в иных целях.
