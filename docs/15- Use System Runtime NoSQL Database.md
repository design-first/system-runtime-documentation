---
id: use-system-runtime-nosql-database
title: Use System Runtime NoSQL Database
sidebar_label: Use System Runtime NoSQL Database
---

```js
// create the system
const system = runtime.system('example15');

const metamodel = runtime.require('metamodel');

// define a Person
metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property'
});

metamodel.create();

// get Person class
const Person = runtime.require('Person');

// create a person
new Person({
  'firstName': 'Eikichi',
  'lastName': 'Onizuka'
});

system.on('start', () => {
  // get System Runtime database component
  const db = this.require('db');

  // find the person we have just created
  const result = db.collections().Person.find({
    'firstName': 'Eikichi'
  });

  console.log(result[0]);
});

// run the system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.