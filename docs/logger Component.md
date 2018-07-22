---
id: logger-component
title: logger Component
sidebar_label: logger Component
---

## debug( message )

- **Description:** Log an information.
- **Schema:** _Logger
- **Inherit:** _Component

```js
runtime.require('logger').debug('this is a debug message');
```

## error( message )

- **Description:** Override a model.
- **Schema:** _Logger
- **Inherit:** _Component

```js
runtime.require('logger').error('this is an error message');
```

## info( message )

- **Description:** Log an information.
- **Schema:** _Logger
- **Inherit:** _Component

```js
runtime.require('logger').info('this is an info message');
```

## level( levelName )

- **Description:** Set the level of log.
- **Schema:** _Logger
- **Inherit:** _Component

```js
runtime.require('logger').level('info');
```

## warn( message )

- **Description:**  Log a warning.
- **Schema:** _Logger
- **Inherit:** _Component

```js
runtime.require('logger').warn('this is a warning message');
```