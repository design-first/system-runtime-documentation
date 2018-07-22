---
id: inheritance-between-components
title: Inheritance between components
sidebar_label: Inheritance between components
---

Inheritance is defined at **schema level**.

When a method is called:

- System Runtime will search if there is a behahior for the corresponding method (i.e. state) and instance,
- if not it will search a behahior for the corresponding method (i.e. state) and class name and
- if not it will search a behahior for the corresponding method (i.e. state) at parents class level.

```js
// create the system
const system = runtime.system('example12');

const metamodel = runtime.require('metamodel');

// define a Person
metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property',
  'getFullName': 'method'
});

// define a Teacher
metamodel.schema('Teacher', {
  '_inherit': ['Person'] // inherit from Person
});

metamodel.create();

// Implement 'getFullName' method for Person class
const Person = runtime.require('Person');

Person.on('getFullName', () => this.firstName() + ' ' + this.lastName());

// create a Teacher
const Teacher = runtime.require('Teacher');

new Teacher({
  '_id': 'eikichi',
  'firstName': 'Eikichi',
  'lastName': 'Onizuka'
});

system.on('start', () => {
  const eikichi = this.require('eikichi');

  // we can invoke 'getFullName' method on a Teacher instance
  console.log(eikichi.getFullName());
});

// run the system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.