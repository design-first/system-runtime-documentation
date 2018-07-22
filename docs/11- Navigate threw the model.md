---
id: navigate-threw-the-model
title: Navigate threw the model
sidebar_label: Navigate threw the model
---

```js
// create the system
const system = runtime.system('example11');

const metamodel = runtime.require('metamodel');

metamodel.schema('Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'father': 'link',
  'son': 'link'
});

// create the model
metamodel.create();

// create components
const Jedi = runtime.require('Jedi');

new Jedi({
  '_id': 'luke',
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

new Jedi({
  '_id': 'anakin',
  'firstName': 'Anakin',
  'lastName': 'Skywalker',
  'son': 'luke'
});

new Jedi({
  '_id': 'leia',
  'firstName': 'Leia Amidala',
  'lastName': 'Skywalker',
  'father': 'anakin'
});

system.on('start', () => {
  // get the component
  const leia = this.require('leia');

  // navigate threw the links between components
  console.log(leia.father().son().firstName());
});

// start the system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.