---
id: structure-your-code
title: Structure your code
sidebar_label: Structure your code
---

When you code in System Runtime, you will need to follow these steps :

- step 1: create your system,
- step 2: create your model,
- step 3: create your components,
- step 4: add your components behaviors,
- step 5: code your system's logic in the start method of your system and
- step 6: run the system.

>**Can I code in a different way ?**
>
>It is just a best practice, you can do it your own way, but by following these steps, you will be able to separate the definition of your model, the behaviors of your model and your code.

```js
// STEP 1
const system = runtime.system('mySystem');

// STEP 2
const metamodel = runtime.require('metamodel');

metamodel.schema('Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'nickname': 'property',
  'father': 'link',
  'shout': 'method'
});

metamodel.create();

// STEP 3
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

// STEP 4
Jedi.on('shout', (message) => message + '!!');

// STEP 5
system.on('start', () => {
  const luke = this.require('luke');

  if (luke.father().nickname() === 'Darth Vader') {
    console.log(luke.shout('NOOOOOO'));
  }
});

// STEP 6
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.