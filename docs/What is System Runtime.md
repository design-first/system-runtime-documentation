---
id: what-is-system-runtime
title: What is System Runtime ?
sidebar_label: What is System Runtime ?
---

When you code, you do not create an application, you create in fact a [system](https://en.wikipedia.org/wiki/System).
System Runtime give you the APIs to create the model, components and behaviors of your system.

## What is a system ?

A system:

* is defined by a model,
* is composed by components and
* reacts to events with actions that we call behaviors..

![Image Alt](../img/ca71be5-system.png)

## Create a system

Use System Runtime APIs to create your system:

```js
// create a system
const system = runtime.system('mysystem');

// add code in the start method
system.on('start', () => console.log('Hello world !'));

// start the app
system.start();
```

Now you can bundle your system into a JSON object:

```js
// create a bundle
runtime.bundle();
```

It will return this JSON:

```json
{
  "_id": "154cd18d0210516",
  "name": "system",
  "description": "",
  "version": "0.0.1",
  "schemas": {},
  "models": {},
  "types": {},
  "behaviors": {
    "1ea9c1d5f811ae1": {
      "_id": "1ea9c1d5f811ae1",
      "component": "154cd18d0210516",
      "state": "start",
      "action": "() => console.log('Hello world !')",
      "useCoreAPI": false,
      "core": false
    }
  },
  "components": {}
}
```

## Install the bundle in HTML

Just add a link tag in your HTML to install and start your bundle:

```html
<!-- import your JSON -->
<link rel="system" type="application/json" href="system.json">

<!-- load System Runtime -->
<script src="https://cdn.jsdelivr.net/npm/system-runtime@3.0.2/dist/system-runtime
```

## Install the bundle in Node.js

Just call **install** and **start** methods to execute your bundle:

```js
// require System Runtime
const runtime = require('system-runtime');

// install and start your system
runtime.install('system.json');
```