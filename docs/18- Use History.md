---
id: use-history
title: Use System Runtime history apis
sidebar_label: Use System Runtime history apis
---

To use System Runtime history apis, you just have to require the *history* component. You will be able to go back / forward into the stack of modifications made to the system.

```js
// create the system
const system = runtime.system('example18');

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

  // get history component
  const history = this.require('history');

  // start historization of all modifications made to the system
  history.start();

  luke.firstName('lucky');

  // we will undo from the last modification made to the system
  history.from(-1);

  // undo last modification
  history.back();

  // show the name of the component, 'luke'
  console.log(luke.firstName());

  // redo last modification
  history.forward();

  // show the name of the component, 'lucky'
  console.log(luke.firstName());

  // stop historization of all modifications made to the system
  history.stop();
});

// run the system
system.start()
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.