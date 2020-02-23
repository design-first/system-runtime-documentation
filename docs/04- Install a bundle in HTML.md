---
id: install-a-bundle-in-html
title: Install a bundle in HTML
sidebar_label: Install a bundle in HTML
---

System Runtime can install a bundle with a simple *link* tag. The start method of the system will be called when the bundle will be imported.

```html
<link rel="system" type="application/json" href="system/example02.json">
```

>**What is the default behavior of this installation ?**
>
>By default the loading is *asynchronous*.

If you have a bundle that depends from this bundle:

- add **async="false"** attribute in order to make the loading *synchronous*:

```html
<link rel="system" async="false" type="application/json" href="system/example02.json">
````

- or your code have to be in the *action* of the **ready** event of **runtime**:

```js
runtime.on('ready', () => {
  // your code
});
```

>**Version compatibility**
>
>Remember that the example works only client-side.