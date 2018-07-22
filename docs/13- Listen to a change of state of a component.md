---
id: listen-to-a-change-of-state-of-a-component
title: Listen to a change of state of a component
sidebar_label: Listen to a change of state of a component
---

You can listen to a property change or a collection change (i.e. add/remove item).

```js
// create the system
const system = runtime.system('example13');

// create the model
const metamodel = runtime.require('metamodel');

metamodel.schema('Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'father': 'link'
});

metamodel.create();

const Jedi = runtime.require('Jedi');

// listen to the change of a state
Jedi.on('father', jedi => {
  console.log('the father of ' + this.firstName() + ' is ' + jedi.firstName());
});

// create components
new Jedi({
  '_id': 'anakin',
  'firstName': 'Anakin',
  'lastName': 'Skywalker'
});

new Jedi({
  '_id': 'luke',
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

system.on('start', () => {
  // get components
  const anakin = this.require('anakin');
  const luke = this.require('luke');

  // add a father to luke
  luke.father(anakin);
});

// run the system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.