---
id: a-basic-hello-world
title: A basic "hello world"
sidebar_label: A basic "hello world"
---

```js
// create a system
let system = runtime.system('example01');

// add your code in the start method of the system
system.on('start', () => console.log('Hello world !'));

// start your system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.