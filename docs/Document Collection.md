---
id: document-collection
title: Document Collection
sidebar_label: Document Collection
---

## count( )

- **Description:** Returns the number of document in a collection.

```js
const nbDocuments = runtime.require('db').collections().Person.count();
```

## find( query )

- **Description:** Find a document into the collection. Ii returns an array of the id of the found document.

```js
const arrDocuments = runtime.require('db').collections().Person.find({
  'firstName': 'Laure'
});
```

You can use query selectors:

```js
const arrDocuments = runtime.require('db').collections().Person.find({
  'firstName': {
    '$eq': 'Laure'
  }
});
```

You can also sort the result:

```js
const arrDocuments = runtime.require('db').collections().Person.find().sort({
  'name': 1
});
```

## insert( document )

- **Description:** Insert an new document into the collection. It returns an array of the id of the created documents.

```js
const arrDocumentId = runtime.require('db').collections().Person.insert({
  'firstName': 'Laure',
  'age': 50
});
```

## update( query, document, option )

- **Description:** Update documents into a collection. It returns an array of the id of the updated documents.

```js
const arrDocumentId = runtime.require('db').collections().Person.update(
  {'name': 'Jean'},
  {'age': 30}, 
  {'upsert': true}
);
```

## remove( query )

- **Description:** Remove a document from the collection. It returns an array of the id of the removed documents.

```js
const arrDocumentId = runtime.require('db').collections().Person.remove(
  {'name': 'Jean'}
);
```