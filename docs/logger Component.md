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

// will show in the console:
// > runtime: this is a debug message
```

## error( message )

- **Description:** Log an error.
- **Schema:** _Logger
- **Inherit:** _Component

```js
runtime.require('logger').error('this is an error message');

// will show in the console:
// > runtime: this is an error message
```

## info( message )

- **Description:** Log an information.
- **Schema:** _Logger
- **Inherit:** _Component

```js
runtime.require('logger').info('this is an info message');

// will show in the console:
// > runtime: this is an info message
```

## level( levelName )

- **Description:** Set the level of log. Possible values are: **debug**, **info**, **warn** and **debug** .By default the level is set to **warn**.
- **Schema:** _Logger
- **Inherit:** _Component

```js
runtime.require('logger').level('info');

// now all `info`, `warn` and `error` logs will be shown.
```

## warn( message )

- **Description:**  Log a warning.
- **Schema:** _Logger
- **Inherit:** _Component

```js
runtime.require('logger').warn('this is a warning message');

// will show in the console:
// > runtime: this is a warning message
```