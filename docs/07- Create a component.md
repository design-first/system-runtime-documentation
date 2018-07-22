---
id: create-a-component
title: Create a component
sidebar_label: Create a component
---

To create a component class, we need to create a **schema** that defines the model of your class (properties, links, collections, methods, events of the class).

```js
// create the system
const system = runtime.system('example07');

// define a class
const metamodel = runtime.require('metamodel');

metamodel.schema('Person', {
  'firstName': 'property'
});

metamodel.create();

const Person = runtime.require('Person');

// create a component
new Person({
  '_id': 'luke',
  firstName: 'luke'
});

system.on('start', () => {
  // get the component
  const luke = this.require('luke');
  
  // show the name of the component
  console.log(luke.firstName());
});

// run the system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.