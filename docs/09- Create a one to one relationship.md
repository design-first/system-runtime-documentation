---
id: create-a-one-to-one-relationship
title: Create a one to one relationship
sidebar_label: Create a one to one relationship
---

```js
// create the system
const system = runtime.system('example09');

// create the model
const metamodel = runtime.require('metamodel');

metamodel.schema('Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'father': 'link' // define a link
});

metamodel.create();

// create components
const Jedi = runtime.require('Jedi');

new Jedi({
  '_id': 'anakin',
  'firstName': 'Anakin',
  'lastName': 'Skywalker'
});

new Jedi({
  '_id': 'luke',
  'firstName': 'Luke',
  'lastName': 'Skywalker',
  'father': 'anakin' // add the reference to the object
});

system.on('start', () => {
  // get component
  const luke = this.require('luke');

  // you can also add the reference by APIs
  // const anakin = this.require('anakin');
  // luke.father(anakin);

  console.log(luke.father().firstName());
});

// run the system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.