---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

In this little tutorial we will create a little system that will show an overview of what you can do with System Runtime.

## What is a system ?

With System Runtime you create in fact **a system** and not an application. But what is a system ?

A system:
- is defined by a **model**,
- is composed by **components** and
- reacts to events with **behaviors**.

![Image Alt](../../img/fa7f5de-6565096-UuhkIYCaRY6IpUFVFY7Q_system.png)

## Install System Runtime

To install System Runtime server-side, you juste need to use npm:

```shell
npm install system-runtime --save
```

>Learn more about Node.js
>
>System Runtime is available as a [node package](https://www.npmjs.com/package/system-runtime). To learn mode about node, go to its [webpage](https://nodejs.org).

## Create a system

Create a file in which you will write the code (example: *system.js*).
Then we can require System Runtime and use its APIs:

```js
const runtime = require('system-runtime');
```

The first thing you have to do is to create a *system* that represents your application:

```js
const system = runtime.system('mySystem');
```

## Create a model

We will create a *Jedi* class:

![Image Alt](../../img/0GW9Z1mJT0q8ZTeAAvPs_Jedi.png)

To do so, get *metamodel* component to create your model:

```js
const metamodel = runtime.require('metamodel');
```

Define your model:

```js
metamodel.schema('Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'nickname': 'property',
  'shout': 'method',
  'father': 'link'
});
```

Now we have define the model, we can create it:

```js
metamodel.create();
```

## Create components

Once the model is created, you can require the classes of your model:

```js
const Jedi = runtime.require('Jedi');
```

Now let's start creating some components:

```js
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
```

To create a component, we have just to **require** the class and create some instances of the class. The parameter of the instance will be an object that contains all the properties of the class you have defined.

As you see we have used a **_id** property that is not defined in the model. This property exists in fact for all components and this purpose is to set a unique id. In our case, we use this unique id to make the link between these two components in *father* property.

> If you do not set the unique id of the component, it will be automatically generated.

## Add behaviors to your components

In System Runtime, implementing a method is called *adding a behavior*. So now we will add a behavior to the *shout* method of *Jedi* class:

```js
Jedi.on('shout', message => message + '!!');
```

Adding a behavior is like adding an event to an object. In fact It is the case: you add a behavior to the *Jedi* class when the *shout* method is called.

## Code your system's logic

Once the model, components, and behaviors of your components have been defined, you can now start to code your system's logic.

```js
system.on('start', () => {
  const luke = this.require('luke');

  if (luke.father().nickname() === 'Darth Vader') {
    console.log(luke.shout('NOOOOOO'));
  }
});
```

As you see, this code is located in a behavior of the *start* method of your system.

To use a component, just **require** it with its unique id. Use **father()** to get the *father* property of the component. The same for **nickname()**.

>You can invoke all the *properties*, *links*, *collections*, *methods* or *events* that your have defined for the current model.

## Start the system

To start the system, just call the *start* method of your system:

```js
system.start();
```

Now execute your file and see the result:

```shell
node system.js
```

## Bundle the system

To bundle the system, just call the *bundle* method:

```js
console.log( runtime.bundle() );
```

Now execute your file:

```json
{"_id":"r1f6761e91912e85","name":"mySystem","description":"","version":"0.0.1","master":true,"schemas":{"n1d69a151891dabe":{"_name":"Jedi","firstName":"property","lastName":"property","nickname":"property","father":"link","shout":"method","_id":"n1d69a151891dabe","_inherit":["_Component"]}},"models":{},"types":{},"behaviors":{"w10c7d1e4301e137":{"_id":"w10c7d1e4301e137","component":"Jedi","state":"shout","action":"(message) => message + '!!'","useCoreAPI":false,"core":false},"g140591769d11852":{"_id":"g140591769d11852","component":"r1f6761e91912e85","state":"start","action":"() => {\n  const luke = this.require('luke');\n\n  if (luke.father().nickname() === 'Darth Vader') {\n    console.log(luke.shout('NOOOOOO'));\n  }\n}","useCoreAPI":false,"core":false}},"components":{"Jedi":{"anakin":{"_id":"anakin","firstName":"Anakin","lastName":"Skywalker","nickname":"Darth Vader","father":""},"luke":{"_id":"luke","firstName":"Luke","lastName":"Skywalker","father":"anakin","nickname":""}}}}
```

As you see, all your code has been bundled in a JSON object.

>**See the full script**
>
>Full script can be found [here](quick-start-example).

## Install a bundle server-side

Copy the JSON you get from the bundle and copy it in a file (*system.json* for example).
Create a new file (*import.js* for example) and start the bundle like this:

```js
const runtime = require('system-runtime');

// install and start the bundle
runtime.install('system.json');
```

Now execute your file:

```shell
node import.js
```

System Runtime will install the bundle. The *start* method of the system will be called when the bundle will be installed.

## Install a bundle client-side

Copy the JSON you get from the bundle and copy it in a file (*system.json* for example).
Then add this *link* tag in your HTML to install the bundle:

```html
<link rel="system" type="application/json" href="system.json">
```

Then add this *script* tag in your HTML to install *System Runtime*:

```html
<script src="https://cdn.jsdelivr.net/npm/system-runtime/dist/system-runtime.min.js"></script>
```

System Runtime will install the bundle on the load of the page. The *start* method of the system will be called when the bundle will be installed.

Run the page and look at the console of your browser:

![Image Alt](../../img/Ge9QsuHQTm6WpoZPMfiw_console-result.png)

## Use System Runtime NoSQL APIs

Now type in the console:

```js
runtime.require('db').collections().Jedi.count();
```

System Runtime stores all the component you create in its database. So the result of this script will be **2** because we have created 2 *Jedi* components.

>**About System Runtime NoSQL Database APIs**
>
>The APIs to query the database are mongoDB-like, so it is very easy to learn them.

## Conclusion

Now that you have finished the quick start, you can go on learning System Runtime: let's [design your model](design-your-model.html).