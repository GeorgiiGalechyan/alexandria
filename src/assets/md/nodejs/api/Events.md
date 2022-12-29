<details><summary>Оглавление</summary>

- [Events (События)](#events-события)
  - [Введение](#введение)
  - [Передача аргументов и `this` слушателям](#передача-аргументов-и-this-слушателям)
  - [Асинхронность против синхронности](#асинхронность-против-синхронности)
  - [Обработка событий только один раз](#обработка-событий-только-один-раз)
  - [События, связанные с ошибками (Error events)](#события-связанные-с-ошибками-error-events)
  - [Обработка отклонений (rejections ) промисов (promises)](#обработка-отклонений-rejections--промисов-promises)
  - [Class: EventEmitter](#class-eventemitter)
    - [Event: 'newListener'](#event-newlistener)
    - [Event: 'removeListener'](#event-removelistener)
    - [emitter.addListener(eventName, listener)](#emitteraddlistenereventname-listener)
    - [emitter.emit(eventName, ...args)](#emitteremiteventname-args)
    - [emitter.eventNames()](#emittereventnames)
    - [emitter.getMaxListeners()](#emittergetmaxlisteners)
    - [emitter.listenerCount(eventName)](#emitterlistenercounteventname)
    - [emitter.listeners(eventName)](#emitterlistenerseventname)
    - [emitter.off(eventName, listener)](#emitteroffeventname-listener)
    - [emitter.on(eventName, listener)](#emitteroneventname-listener)
    - [emitter.once(eventName, listener)](#emitteronceeventname-listener)
    - [emitter.prependListener(eventName, listener)](#emitterprependlistenereventname-listener)
    - [emitter.prependOnceListener(eventName, listener)](#emitterprependoncelistenereventname-listener)
    - [emitter.removeAllListeners([eventName])](#emitterremovealllistenerseventname)
    - [emitter.removeListener(eventName, listener)](#emitterremovelistenereventname-listener)
    - [emitter.setMaxListeners(n)](#emittersetmaxlistenersn)
    - [emitter.rawListeners(eventName)](#emitterrawlistenerseventname)
    - [emitter[Symbol.for('nodejs.rejection')](err, eventName, ...args)](#emittersymbolfornodejsrejectionerr-eventname-args)
  - [events.defaultMaxListeners](#eventsdefaultmaxlisteners)
  - [events.errorMonitor](#eventserrormonitor)
  - [events.getEventListeners(emitterOrTarget, eventName)](#eventsgeteventlistenersemitterortarget-eventname)
  - [events.once(emitter, name, options)](#eventsonceemitter-name-options)
    - [Ожидание нескольких событий, генерируемых при `process.nextTick()`](#ожидание-нескольких-событий-генерируемых-при-processnexttick)
  - [events.captureRejections](#eventscapturerejections)
  - [events.captureRejectionSymbol](#eventscapturerejectionsymbol)
  - [events.listenerCount(emitter, eventName)](#eventslistenercountemitter-eventname)
  - [events.on(emitter, eventName, options)](#eventsonemitter-eventname-options)
  - [events.setMaxListeners(n, ...eventTargets)](#eventssetmaxlistenersn-eventtargets)
  - [Class: events.EventEmitterAsyncResource extends EventEmitter](#class-eventseventemitterasyncresource-extends-eventemitter)
    - [new events.EventEmitterAsyncResource(options)](#new-eventseventemitterasyncresourceoptions)
    - [eventemitterasyncresource.asyncId](#eventemitterasyncresourceasyncid)
    - [eventemitterasyncresource.asyncResource](#eventemitterasyncresourceasyncresource)
    - [eventemitterasyncresource.emitDestroy()](#eventemitterasyncresourceemitdestroy)
    - [eventemitterasyncresource.triggerAsyncId](#eventemitterasyncresourcetriggerasyncid)
  - [EventTarget и Event API](#eventtarget-и-event-api)
    - [Node.js EventTarget vs. DOM EventTarget](#nodejs-eventtarget-vs-dom-eventtarget)
    - [NodeEventTarget vs. EventEmitter](#nodeeventtarget-vs-eventemitter)
    - [Event listener](#event-listener)
    - [EventTarget - обработка ошибок (error handling)](#eventtarget---обработка-ошибок-error-handling)
    - [Class: Event](#class-event)
      - [event.bubbles](#eventbubbles)
      - [event.cancelBubble()](#eventcancelbubble)
      - [event.cancelable](#eventcancelable)
      - [event.composed](#eventcomposed)
      - - [event.composedPath()](#eventcomposedpath)
      - [event.currentTarget](#eventcurrenttarget)
      - [event.defaultPrevented](#eventdefaultprevented)
      - [event.eventPhase](#eventeventphase)
      - [event.isTrusted](#eventistrusted)
      - [event.preventDefault()](#eventpreventdefault)
      - [event.returnValue](#eventreturnvalue)
      - [event.srcElement](#eventsrcelement)
      - [event.stopImmediatePropagation()](#eventstopimmediatepropagation)
      - [event.stopPropagation()](#eventstoppropagation)
      - [event.target](#eventtarget)
      - [event.timeStamp](#eventtimestamp)
      - [event.type](#eventtype)
    - [Class: EventTarget](#class-eventtarget)
      - [eventTarget.addEventListener(type, listener, options)](#eventtargetaddeventlistenertype-listener-options)
      - [eventTarget.dispatchEvent(event)](#eventtargetdispatcheventevent)
      - [eventTarget.removeEventListener(type, listener)](#eventtargetremoveeventlistenertype-listener)
    - [Class: CustomEvent](#class-customevent)
      - [event.detail](#eventdetail)
    - [Class: NodeEventTarget](#class-nodeeventtarget)
      - [nodeEventTarget.addListener(type, listener, options)](#nodeeventtargetaddlistenertype-listener-options)
      - [nodeEventTarget.eventNames()](#nodeeventtargeteventnames)
      - [nodeEventTarget.listenerCount(type)](#nodeeventtargetlistenercounttype)
      - [nodeEventTarget.off(type, listener)](#nodeeventtargetofftype-listener)
      - [nodeEventTarget.on(type, listener, options)](#nodeeventtargetontype-listener-options)
      - [nodeEventTarget.once(type, listener, options)](#nodeeventtargetoncetype-listener-options)
      - [nodeEventTarget.removeAllListeners([type])](#nodeeventtargetremovealllistenerstype)
      - [nodeEventTarget.removeListener(type, listener)](#nodeeventtargetremovelistenertype-listener)

</details>

# **Events (События)**

## **Введение**

> **Индекс стабильности:** 2 - Стабильный.

**Исходный код:** [lib/events.js](https://github.com/nodejs/node/blob/v19.1.0/lib/events.js)

## **Передача аргументов и _`this`_ слушателям**

## **Асинхронность против синхронности**

## **Обработка событий только один раз**

## **События, связанные с ошибками (Error events)**

## **Обработка отклонений (rejections ) промисов (promises)**

> **Примечание переводчика:**  
> **`Promise`** (промис) может находиться в трёх состояниях:  
> ожидание (pending): начальное состояние, не исполнен и не отклонён.  
> исполнено (fulfilled): операция завершена успешно.  
> отклонено (rejected): операция завершена с ошибкой.
> Подробнее о промисах можно прочитать в документации **[MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)** или учебнике **[LearnJS](https://learn.javascript.ru/promise-basics)**.

## **Class: EventEmitter**

### **Event: 'newListener'**

### **Event: 'removeListener'**

### **emitter.addListener(eventName, listener)**

### **emitter.emit(eventName, ...args)**

### **emitter.eventNames()**

### **emitter.getMaxListeners()**

### **emitter.listenerCount(eventName)**

### **emitter.listeners(eventName)**

### **emitter.off(eventName, listener)**

### **emitter.on(eventName, listener)**

### **emitter.once(eventName, listener)**

### **emitter.prependListener(eventName, listener)**

### **emitter.prependOnceListener(eventName, listener)**

### **emitter.removeAllListeners([eventName])**

### **emitter.removeListener(eventName, listener)**

### **emitter.setMaxListeners(n)**

### **emitter.rawListeners(eventName)**

### **emitter[Symbol.for('nodejs.rejection')](err, eventName, ...args)**

## **events.defaultMaxListeners**

## **events.errorMonitor**

## **events.getEventListeners(emitterOrTarget, eventName)**

## **events.once(emitter, name, options)**

### **Ожидание нескольких событий, генерируемых при `process.nextTick()`**

## **events.captureRejections**

## **events.captureRejectionSymbol**

## **events.listenerCount(emitter, eventName)**

## **events.on(emitter, eventName, options)**

## **events.setMaxListeners(n, ...eventTargets)**

## **Class: events.EventEmitterAsyncResource extends EventEmitter**

### **new events.EventEmitterAsyncResource(options)**

### **eventemitterasyncresource.asyncId**

### **eventemitterasyncresource.asyncResource**

### **eventemitterasyncresource.emitDestroy()**

### **eventemitterasyncresource.triggerAsyncId**

## **EventTarget и Event API**

### **Node.js EventTarget vs. DOM EventTarget**

### **NodeEventTarget vs. EventEmitter**

### **Event listener**

### **EventTarget - обработка ошибок (error handling)**

### **Class: Event**

#### **event.bubbles**

#### **event.cancelBubble()**

#### **event.cancelable**

#### **event.composed**

#### **event.composedPath()**

#### **event.currentTarget**

#### **event.defaultPrevented**

#### **event.eventPhase**

#### **event.isTrusted**

#### **event.preventDefault()**

#### **event.returnValue**

#### **event.srcElement**

#### **event.stopImmediatePropagation()**

#### **event.stopPropagation()**

#### **event.target**

#### **event.timeStamp**

#### **event.type**

### **Class: EventTarget**

#### **eventTarget.addEventListener(type, listener, options)**

#### **eventTarget.dispatchEvent(event)**

#### **eventTarget.removeEventListener(type, listener)**

### **Class: CustomEvent**

#### **event.detail**

### **Class: NodeEventTarget**

#### **nodeEventTarget.addListener(type, listener, options)**

#### **nodeEventTarget.eventNames()**

#### **nodeEventTarget.listenerCount(type)**

#### **nodeEventTarget.off(type, listener)**

#### **nodeEventTarget.on(type, listener, options)**

#### **nodeEventTarget.once(type, listener, options)**

#### **nodeEventTarget.removeAllListeners([type])**

#### **nodeEventTarget.removeListener(type, listener)**
