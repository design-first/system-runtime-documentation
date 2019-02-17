---
id: manage-your-components
title: Manage your components
sidebar_label: Manage your components
---

## A component is a NoSQL Document

**All objects are a component in Runtime**:

* a class is a component,
* an instance of a class is a component,
* a behavior is a component,
* all the core objects of System Runtime (*runtime*, *db*, *metamodel* and *admin*) are components.

All these components are stores in **System Runtime NoSQL DB**. In fact, System Runtime acts as an ODM (Object-Document Mapper) to manage your components as NoSQL Documents.

## Use System Runtime NoSQL Database

To use System Runtime NoSQL DB, just require **db** component:

```js
runtime.require('db');
```

All collections of System Runtime NoSQL DB are the schemas you have created.

```js
const metamodel = runtime.require('metamodel');

// create Person schema
metamodel.schema('Person');

metamodel.create();

// count the number of document in Person collection
runtime.require('db').collections().Person.count();
```

## Find a component

To find the a component with NoSQL DB, you have just to use **find** method on the related collection:

```js
const metamodel = runtime.require('metamodel');

// create a Person schema
metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property'
});

metamodel.create();

// create a Person component
const Person = runtime.require('Person');
const luke = new Person({
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

// find the related document
const documents = runtime.require('db').collections().Person.find({ 
  'lastName': 'Skywalker'
});
```

## Create a component

To create a component with NoSQL DB,  you have just to use **insert** method on the related collection:

```js
const metamodel = runtime.require('metamodel');

// create Person schema
metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property'
});

metamodel.create();

// create a Person document
runtime.require('db').collections().Person.insert({
  '_id': 'luke',
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

// a component has been created
// and you can require it
const luke = runtime.require('luke');

luke.firstName();
```

## Update a component

To update a component with NoSQL DB,  you have just to use **update** method on the related collection:

```js
const metamodel = runtime.require('metamodel');

// create Person schema
metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property'
});

metamodel.create();

// create a Person component
const Person = runtime.require('Person');

const luke = new Person({
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

// update the related document
runtime.require('db').collections().Person.update(
  {
    '_id': luke.id()
  }, 
  { 
    'lastName': 'Starkiller'
  }
);

// property of the component has changed
luke.lastName();
```

## Delete a component

To update a component with NoSQL DB,  you have just to use **remove** method on the related collection:

```js
const metamodel = runtime.require('metamodel');

// create Person schema
metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property'
});

metamodel.create();

// create a Person component
const Person = runtime.require('Person');

const luke = new Person({
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

// remove the related document
runtime.require('db').collections().Person.remove({
  '_id': luke.id()
});

// try to use the component
luke.lastName();
```

System Runtime generates this error:

```shell
runtime: trying to get the property 'lastName' on the destroyed component '1238d1105
```

## Conclusion

We saw on this article that:

* **everything is a component** in System Runtime,
* you use System Runtime NoSQL DB to find, create, update or delete a component.

In the next article we will talk about [systems](bundle-your-system.html).