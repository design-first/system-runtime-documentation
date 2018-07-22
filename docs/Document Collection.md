---
id: document-collection
title: Document Collection
sidebar_label: Document Collection
---

## count( )

- **Description:** Count the number of document in a collection.

```js
runtime.require('db').collections().Person.count();
```

## find( query )

- **Description:** Find a document into the collection.

```js
runtime.require('db').collections().Person.find({
  'firstName': 'Laure'
});
```

You can use query selectors:

```js
runtime.require('db').collections().Person.find({
  'firstName': {
    '$eg': 'Laure
  }
});
```

You can also sort the result:

```js
runtime.require('db').collections().Person.find().sort({
  'name': 1
});
```

## insert( document )

- **Description:** Insert an new document into the collection.

```js
runtime.require('db').collections().Person.insert({
  'firstName': 'Laure',
  'age': 50
});
```

## update( query, document, option )

- **Description:** Update documents into a collection.

```js
runtime.require('db').collections().Person.update(
  {'name': 'Jean'},
  {'age': 30}, 
  {'upsert': true}
);
```

## remove( query )

- **Description:** Remove a document from the collection.

```js
runtime.require('db').collections().Person.remove(
  {'name': 'Jean'}
);
```