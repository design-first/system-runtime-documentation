---
id: object-document-mapper-in-action
title: Object-Document Mapper in action
sidebar_label: Object-Document Mapper in action
---

```js
// create the system
const system = runtime.system('example16');

const metamodel = runtime.require('metamodel');

// create the model
metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property'
});

metamodel.create();

// add some code
system.on('start', () => {

  // get Person class
  const Person = this.require('Person');

  // create a person
  const eikichi = new Person({
    'firstName': 'Eikichi',
    'lastName': 'Onizuka'
  });

  // get System Runtime NoSQL Database
  const db = this.require('db');

  console.log('the lastName of eikichi is: ' + eikichi.lastName());

  // change eikichi lastName with component API
  eikichi.lastName('betterName');

  console.log('the lastName of eikichi is now: ' + eikichi.lastName());

  // change eikichi lastName by updating System Runtime NoSQL Database
  db.collections().Person.update({
    lastName: 'betterName'
  }, {
      lastName: 'superName'
    });

  console.log('the lastName of eikichi is now: ' + eikichi.lastName());
});

// run the system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.