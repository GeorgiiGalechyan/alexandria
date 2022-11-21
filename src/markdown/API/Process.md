<details> <summary> Оглавление </summary>

- [Process]()
  - [Process events]()
    - [Event: 'beforeExit']()
    - [Event: 'disconnect']()
    - [Event: 'exit']()
    - [Event: 'message']()
    - [Event: 'multipleResolves']()
    - [Event: 'rejectionHandled']()
    - [Event: 'uncaughtException']()
      - [Warning: Using 'uncaughtException' correctly]()
    - [Event: 'uncaughtExceptionMonitor']()
    - [Event: 'unhandledRejection']()
    - [Event: 'warning']()
    - [Event: 'worker']()
      - [Emitting custom warnings]()
      - [Node.js warning names]()
    - [Signal events]()
  - [process.abort()]()
  - [process.allowedNodeEnvironmentFlags]()
  - [process.arch]()
  - [process.argv]()
  - [process.argv0]()
  - [process.channel]()
    - [process.channel.ref()]()
    - [process.channel.unref()]()
  - [process.chdir(directory)]()
  - [process.config]()
  - [process.connected]()
  - [process.cpuUsage([previousValue])]()
  - [process.cwd()]()
  - [process.debugPort]()
  - [process.disconnect()]()
  - [process.dlopen(module, filename[, flags])]()
  - [process.emitWarning(warning[, options])]()
  - [process.emitWarning(warning[, type[, code]][, ctor])]()
    - [Avoiding duplicate warnings]()
  - [process.env]()
  - [process.execArgv]()
  - [process.execPath]()
  - [process.exit([code])]()
  - [process.exitCode]()
  - [process.getActiveResourcesInfo()]()
  - [process.getegid()]()
  - [process.geteuid()]()
  - [process.getgid()]()
  - [process.getgroups()]()
  - [process.getuid()]()
  - [process.hasUncaughtExceptionCaptureCallback()]()
  - [process.hrtime([time])]()
  - [process.hrtime.bigint()]()
  - [process.initgroups(user, extraGroup)]()
  - [process.kill(pid[, signal])]()
  - [process.mainModule]()
  - [process.memoryUsage()]()
  - [process.memoryUsage.rss()]()
  - [process.nextTick(callback[, ...args])]()
    - [When to use queueMicrotask() vs. process.nextTick()]()
  - [process.noDeprecation]()
  - [process.pid]()
  - [process.platform]()
  - [process.ppid]()
  - [process.release]()
  - [process.report]()
    - [process.report.compact]()
    - [process.report.directory]()
    - [process.report.filename]()
    - [process.report.getReport([err])]()
    - [process.report.reportOnFatalError]()
    - [process.report.reportOnSignal]()
    - [process.report.reportOnUncaughtException]()
    - [process.report.signal]()
    - [process.report.writeReport([filename][, err])]()
  - [process.resourceUsage()]()
  - [process.send(message[, sendHandle[, options]][, callback])]()
  - [process.setegid(id)]()
  - [process.seteuid(id)]()
  - [process.setgid(id)]()
  - [process.setgroups(groups)]()
  - [process.setuid(id)]()
  - [process.setSourceMapsEnabled(val)]()
  - [process.setUncaughtExceptionCaptureCallback(fn)]()
  - [process.stderr]()
    - [process.stderr.fd]()
  - [process.stdin]()
    - [process.stdin.fd]()
  - [process.stdout]()
    - [process.stdout.fd]()
  - [A note on process I/O]()
  - [process.throwDeprecation]()
  - [process.title]()
  - [process.traceDeprecation]()
  - [process.umask()]()
  - [process.umask(mask)]()
  - [process.uptime()]()
  - [process.version]()
  - [process.versions]()
  - [Exit codes]()

</details>

# Process

## Process events

### Event: 'beforeExit'

### Event: 'disconnect'

### Event: 'exit'

### Event: 'message'

### Event: 'multipleResolves'

### Event: 'rejectionHandled'

### Event: 'uncaughtException'

#### Warning: Using 'uncaughtException' correctly

### Event: 'uncaughtExceptionMonitor'

### Event: 'unhandledRejection'

### Event: 'warning'

### Event: 'worker'

#### Emitting custom warnings

#### Node.js warning names

### Signal events

## process.abort()

## process.allowedNodeEnvironmentFlags

## process.arch

## process.argv

## process.argv0

## process.channel

### process.channel.ref()

### process.channel.unref()

## process.chdir(directory)

## process.config

## process.connected

## process.cpuUsage([previousValue])

## process.cwd()

## process.debugPort

## process.disconnect()

## process.dlopen(module, filename[, flags])

## process.emitWarning(warning[, options])

## process.emitWarning(warning[, type[, code]][, ctor])

### Avoiding duplicate warnings

## process.env

## process.execArgv

## process.execPath

## process.exit([code])

## process.exitCode

## process.getActiveResourcesInfo()

## process.getegid()

## process.geteuid()

## process.getgid()

## process.getgroups()

## process.getuid()

## process.hasUncaughtExceptionCaptureCallback()

## process.hrtime([time])

## process.hrtime.bigint()

## process.initgroups(user, extraGroup)

## process.kill(pid[, signal])

## process.mainModule

## process.memoryUsage()

## process.memoryUsage.rss()

## process.nextTick(callback[, ...args])

### When to use queueMicrotask() vs. process.nextTick()

## process.noDeprecation

## process.pid

## process.platform

## process.ppid

## process.release

## process.report

### process.report.compact

### process.report.directory

### process.report.filename

### process.report.getReport([err])

### process.report.reportOnFatalError

### process.report.reportOnSignal

### process.report.reportOnUncaughtException

### process.report.signal

### process.report.writeReport([filename][, err])

## process.resourceUsage()

## process.send(message[, sendHandle[, options]][, callback])

## process.setegid(id)

## process.seteuid(id)

## process.setgid(id)

## process.setgroups(groups)

## process.setuid(id)

## process.setSourceMapsEnabled(val)

## process.setUncaughtExceptionCaptureCallback(fn)

## process.stderr

### process.stderr.fd

## process.stdin

### process.stdin.fd

## process.stdout

### process.stdout.fd

## A note on process I/O

## process.throwDeprecation

## process.title

## process.traceDeprecation

## process.umask()

## process.umask(mask)

## process.uptime()

## process.version

## process.versions

## Exit codes
