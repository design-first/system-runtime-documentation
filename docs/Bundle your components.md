---
id: bundle-your-components
title: Bundle your components
sidebar_label: Bundle your components
---

In System Runtime you can share the components you have created with other systems.

## System

When you create an application in System Runtime, you are in fact defining a **system**. A system is composed of:

* **models**: the definition of the structure of your components,
* **behaviors**: the description of how your components react when their states change and
* **components**: your components.

![Image Alt](../img/UuhkIYCaRY6IpUFVFY7Q_system.png)

All core components of System Runtime work in order to run your system and to check that all is compliant with the model you have defined:

![Image Alt](../img/5uyCwqSeSo9mXexqLLdw_archi.png)

* **System Runtime database** stores your system and the state of your component,
* **System Runtime metamodel** creates your model and
* **System Runtime workflow** checks that every actions of your components are compliant with your model.

A system can also be composed of another systems. In that case the parent system, that we called the **master system**, shares all the models, behaviors and components of all the other systems.

We will see now how System Runtime manages systems.

## Create a system

First you need to create a system. By default, there is no system in your application, so you have to create one in order to take advantage of System Runtime.

To create your system, call method **system** of *Runtime* instance:

```js
runtime.system('mysystem');
```

The method returns the *System* instance that is created. Now everything you code will be in this system.

## Structure your code

When you code in System Runtime, you have to follow these steps:

- step 1: **create your system**,
- step 2: **create your model**,
- step 3: **create your components**,
- step 4: **add your components behaviors**,
- step 5: **code your system's logic** in the start method of your system and
- step 6: **run the system**

By respecting these steps, you insure that System Runtime will be able to bundle your system with your start code.

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
Jedi.on('shout', message => message + '!!');

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

## Bundle a system

To bundle your system, you just need to call the method **bundle** of *Runtime* instance:

```js
runtime.bundle();
```

The result of the bundle will be a stringify JSON that represents your system:

```json
{
  "_id": "r1f6761e91912e85",
  "name": "mySystem",
  "description": "",
  "version": "0.0.1",
  "master": true,
  "schemas": {
    "n1d69a151891dabe": {
      "_name": "Jedi",
      "firstName": "property",
      "lastName": "property",
      "nickname": "property",
      "father": "link",
      "shout": "method",
      "_id": "n1d69a151891dabe",
      "_inherit": [
        "_Component"
      ]
    }
  },
  "models": {},
  "types": {},
  "behaviors": {
    "w10c7d1e4301e137": {
      "_id": "w10c7d1e4301e137",
      "component": "Jedi",
      "state": "shout",
      "action": "(message) => message + '!!'",
      "useCoreAPI": false,
      "core": false
    },
    "g140591769d11852": {
      "_id": "g140591769d11852",
      "component": "r1f6761e91912e85",
      "state": "start",
      "action": "() => {\n  const luke = this.require('luke');\n\n  if (luke.father().nickname() === 'Darth Vader') {\n    console.log(luke.shout('NOOOOOO'));\n  }\n}",
      "useCoreAPI": false,
      "core": false
    }
  },
  "components": {
    "Jedi": {
      "anakin": {
        "_id": "anakin",
        "firstName": "Anakin",
        "lastName": "Skywalker",
        "nickname": "Darth Vader",
        "father": ""
      },
      "luke": {
        "_id": "luke",
        "firstName": "Luke",
        "lastName": "Skywalker",
        "father": "anakin",
        "nickname": ""
      }
    }
  }
}
````

As you see, the result contains:

* **schemas** property that contains all the schemas of the bundled system,
* **models** property that contains all the models of the bundled system,
* **types** property that contains all the types of the bundled system,
* **components** property that contains all the components of the bundled system and
* **behaviors** property that contains all the behaviors of the bundled system.

## Install a bundle

Now that we have bundled our system, we want to install it. There are many ways to do it.

## Install a bundle server-side

To install a bundle server-side, just call the method **install** of *Runtime* instance and pass the name of your system as parameter.

```js
// install and start the system
runtime.install('mysystem.json');
```

>**System Runtime and OSGi**
>
>These APIs are [OSGI](https://www.osgi.org) compliant.

## Install a bundle client-side with JavaScript

To install a bundle client-side:

```js
runtime.install('mysystem.json');
```

## Install a bundle client-side with HTML

To do so, save the bundled system in a JSON file and then install it with a *link* tag. The *start* method of the system will be called when the system will be imported.

```html
<link rel="system" type="application/json" href="mysystem.json">
```

## Package a bundle

Packaging a bundle means to compose a system with System Runtime core systems. By doing that System Runtime library will include your system (i.e. your code will be include in *system-runtime.min.js* file).

You can package your system with System Runtime. To do so you need first to [clone the repository](https://github.com/design-first/system-runtime).

Save the bundled system in a JSON file and put it on the [addons directory of System Runtime](https://github.com/design-first/system-runtime/tree/master/addons).

Then build System Runtime with :

```shell
npm run build
```

The system will be automatically composed in *System Runtime core system* and System Runtime will execute the start function of the imported system when *ready*.

## Conclusion

We saw in that article:

* **System Runtime architecture is constructed around systems**,
* **your application is a system**, that can be a superset of other systems,
* you can **bundle a systems**,
* you can **install/compose systems** with another.

In a next article we will discuss on [how to extend System Runtime](extend-system-runtime.html).