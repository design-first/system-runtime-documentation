---
id: create-a-one-to-many-relationship
title: Create a one to many relationship
sidebar_label: Create a one to many relationship
---

```js
// create the system
const system = runtime.system('example10');

const metamodel = runtime.require('metamodel');

metamodel.schema('Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'children': 'collection' // define a collection
});

// create the model
metamodel.create();

// create components
const Jedi = runtime.require('Jedi');

new Jedi({
  '_id': 'leia',
  'firstName': 'Leia Amidala',
  'lastName': 'Skywalker'
});

new Jedi({
  '_id': 'luke',
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

new Jedi({
  '_id': 'padme',
  'firstName': 'Padme',
  'lastName': 'Amidala',
  'children': ['luke', 'leia'] // add some references to the object
});

// add some code
system.on('start', () => {
  // get component
  const padme = this.require('padme');

  // you can also add the references with APIs
  // const luke = this.require('luke');
  // const leia = this.require('leia');
  // padme.children([luke, leia]);

  console.log(padme.children(1).firstName());
});

// run the system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.