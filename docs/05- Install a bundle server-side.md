---
id: install-a-bundle-server-side
title: Install a bundle server-side
sidebar_label: Install a bundle server-side
---

To install a bundle on Node.js:

```js
const runtime = require('system-runtime');

// install and start the system
runtime.install('example02.json');
```

>**Version compatibility**
>
>Remember that the example works works only server-side.