---
id: db-component
title: db Component
sidebar_label: db Component
---

## collections( ) : object

- **Description:** Get collections of documents managed by System Runtime NoSQL Database. Each collection provides a basic set of APIs to find, update, insert or delete documents.
- **Schema:** _Database
- **Inherit:** _Component

```js
const arrDocuments = runtime.require('db').collections().Person.find({
  'firstName': 'Laure'
});
```
