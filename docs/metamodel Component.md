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

## model( name, définition ) : string

- **Description:** Override a model. It returns the id of the model.
- **Schema:** _Metamodel
- **Inherit:** _Component

```js
const modelId = runtime.require('metamodel').model('Person', {
  'name': 'string',
  'firstName': 'string'
});
```

## schema( name, definition ): string

- **Description:** Define a schema. It returns the id of the schema.
- **Schema:** _Metamodel
- **Inherit:** _Component

```js
const schemaId = runtime.require('metamodel').schema('Person', {
  'name'; 'property',
  'firstName': 'property'
});
```

## type( name, definition )

- **Description:** Define a type. It returns the id of the type.
- **Schema:** _Metamodel
- **Inherit:** _Component

```js
const typeId = runtime.require('metamodel').type('color', ['blue', 'white', 'red']);
```