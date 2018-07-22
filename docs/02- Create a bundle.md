---
id: create-a-bundle
title: Create a bundle
sidebar_label: Create a bundle
---

To bundle a system, you need to call the **bundle** method of **runtime** component:

```js
const system = runtime.system('example02');

system.on('start', () => console.log('Hello world !'));

system.start();

// bundle the system
// all the code will be exported
console.log(runtime.bundle());
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.