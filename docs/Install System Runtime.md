---
id: install-system-runtime
title: How to install System Runtime
sidebar_label: How to install System Runtime
---

System Runtime is a client and server JavaScript library, so you can install it either with [npm](https://www.npmjs.com) or with a CDN.

## Installation with NPM

```shell
npm install system-runtime --save
```

To use it server-side:

```js
// without babel/webpack
const runtime = require('system-runtime');

// with babel/webpack
import runtime from 'system-runtime';
```

Then you can use System Runtime in your script:

## Installation with a CDN

Add this *script* tag in your HTML to install System Runtime:

```html
<script src="https://cdn.jsdelivr.net/npm/system-runtime@4.0.0/dist/system-runtime.min.js"></script>
```

Then you can use System Runtime in your script:

```js
runtime.version();
```

Now that you have installed System Runtime, let's [design your model](design-your-model.html).