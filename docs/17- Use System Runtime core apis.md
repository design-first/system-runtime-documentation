---
id: use-system-runtime-core-apis
title: Use System Runtime core apis
sidebar_label: Use System Runtime core apis
---

To use System Runtime core apis, just add *true* value on last parameter on the **on** method:

```js
// create a system
const system = runtime.system('example17');

// add your code in the start method of the system
system.on('start', () => {
    
  // use System Runtime core apis with $db variable for example
  // search for the current instance of System Runtime in the database
  const result = $db._Runtime.find({
    _id: 'runtime'
  });

  // log the System Runtime instance as it is stored in the database
  console.log(result[0]);
    
}, true); // add 'true' value on last parameter to use System Runtime core APIs

// run your system
system.start();
```

>**Version compatibility**
>
>Remember that the example works both on server and browser.