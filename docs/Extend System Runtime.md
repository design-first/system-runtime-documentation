---
id: extend-system-runtime
title: Extend System Runtime
sidebar_label: Extend System Runtime
---

There are many ways to add new functionalities to System Runtime. To do so you can:
* update its source code,
* add addons or
* add extensions.

## Update System Runtime source code

### Installation

To update System Runtime, you will need to [clone the repository](https://github.com/design-first/system-runtime):

```shell
git clone https://github.com/design-first/system-runtime.git
```

Once you have cloned the repository, install the dependencies:

```shell
npm i
```

### Development mode

Start System Runtime in development mode:

```shell
npm run dev
```

All the modifications to the source code of System Runtime will build System Runtime core module.

### Update source code

System Runtime has got a **customizable core system**. You can update all its components, models or behaviors to follow your needs. To do so:

* open a version of [System Designer](http://designfirst.io/systemdesigner/),
* import System Runtime core system on the [/src/system](https://github.com/design-first/system-runtime/tree/master/src/system) directory,
* edit the system,
* export it,
* save it in the same place.

Because you have changed the source code, System Runtime will be automatically rebuild in development mode.

### Build

Once you have finished all your modification, you can build System Runtime:

```shell
npm run build
```

It will:
*  build System Runtime core module for the server library and
*  build System Runtime client library on the **/dist** directory

## Add addons

You can also update System Runtime core system by **composing other systems with it**. In that case, other systems are called **addons**.

To compose a system with System Runtime core systems, just copy and paste a system into the [/src/addons directory](https://github.com/design-first/system-runtime/tree/master/addons) and build System Runtime.

## Add extensions

You can extend System Runtime core system by composing other systems at runtime. In that case, these systems are called **extensions**.

To add an extension, just install it at runtime.

### Install an extension client-side

Just add a link tag in your HTML to install and start your extension:

```html
<!-- install your extension -->
<link rel="system" type="application/json" href="storage.json">
```

### Install an extension server-side

Just call **install** API to install and start your extension:

```js
// install your extensions 
runtime.install('storage.json');
```

## Conclusion

We saw in that article:

* how to **build System Runtime**,
* how to **update System Runtime source code**,
* how to **add addons** and
* how to **add extensions**.

In the last article, we will [go deeper in the use of System Runtime](go-deeper.html).