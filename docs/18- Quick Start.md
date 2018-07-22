---
id: quick-start-example
title: Quick Start example
sidebar_label: Quick Start example
---

```js
const system = runtime.system('mySystem');
const metamodel = runtime.require('metamodel');

// create the Jedi schema
metamodel.schema( 'Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'nickname': 'property',
  'father': 'link',
  'shout': 'method'
});

metamodel.create();

// Create some Jedis
const Jedi = runtime.require('Jedi');

new Jedi({
  '_id': 'anakin',
  'firstName': 'Anakin',
  'lastName': 'Skywalker',
  'nickname': 'Darth Vader'
});

new Jedi({
  '_id': 'luke',
  'firstName': 'Luke',
  'lastName': 'Skywalker',
  'father': 'anakin'
});

// add Jedi behaviors
Jedi.on('shout', message => message + '!!');

// code your system's logic
system.on('start', () => {
  const luke = this.require('luke');

  if (luke.father().nickname() === 'Darth Vader') {
    console.log(luke.shout('NOOOOOO'));
  }
});

// run 
system.start();

// bundle the current system
console.log(runtime.bundle());
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.