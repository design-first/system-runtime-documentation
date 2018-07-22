---
id: metamodel-component
title: metamodel Component
sidebar_label: metamodel Component
---

## create( )

- **Description:** Create a model.
- **Schema:** _Metamodel
- **Inherit:** _Component

```js
runtime.require('metamodel').create();
```

## model( name, définition )

- **Description:** Override a model.
- **Schema:** _Metamodel
- **Inherit:** _Component

```js
runtime.require('metamodel').model('Person', {
  'name': 'string',
  'firstName': 'string'
});
```

## schema( name, definition )

- **Description:** Define a schema.
- **Schema:** _Metamodel
- **Inherit:** _Component

```js
runtime.require('metamodel').schema('Person', {
  'name'; 'property',
  'firstName': 'property'
});
```

## type( name, definition )

- **Description:** Define a type.
- **Schema:** _Metamodel
- **Inherit:** _Component

```js
runtime.require('metamodel').type('color', ['blue', 'white', 'red']);
```