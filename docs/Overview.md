---
id: overview
title: Overview
sidebar_label: Overview
---

## Design your system

```json
{
  "firstName": "property",
  "lastName": "property",
  "nickname": "property",
  "father": "link"
}                        
```

## Create your components

```js
// get your component class
const Person = runtime.require('Person');

// create a component
const anakin = new Person({
  'firstName': 'Anakin',
  'lastName': 'Skywalker'
});

// update nickname
anakin.nickname('Darth Vader');
```

## Try to update a component with a wrong type


```js
// this update is non compliant with the model
anakin.nickname(42);
```

## System Runtime will log this message


```shell
runtime: invalid type for property 'nickname': expected 'string' instead of 'number' on component '11d4012f0c18734'
```

## Navigate threw your components

```js
// add a reference
const luke = new Person({
  'firstName': 'Luke',
  'lastName': 'Skywalker',
  'father': anakin
});

// get the first name of luke father
luke.father().firstName();
```

## Manage your components

```js
runtime.require('db').collections().Person.find({
  'firstName': 'Luke'
});
```

## Bundle your system

```js
runtime.bundle();
```

## Install your bundle in HTML

```html
<link rel="system" type="application/json" href="system.json">
```