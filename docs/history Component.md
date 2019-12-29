---
id: history-component
title: history Component
sidebar_label: history Component
---

## back()

- **Description:** Go back to the history of modifications made to the system.
- **Schema:** _History
- **Inherit:** _Component

```js
runtime.require('history').back();
```

## dump( )

- **Description:** Export all the modifications made to the system.
- **Schema:** _History
- **Inherit:** _Component

```js
const dump = runtime.require('history').dump();
```

## forward()

- **Description:** Go forward to the history of modifications made to the system.
- **Schema:** _History
- **Inherit:** _Component

```js
runtime.require('history').back();
```

## from( id )

- **Description:** Start the index to go back/forward in the history at the correct value. If index is `-1`, we start from the last modification made to the system.
- **Schema:** _History
- **Inherit:** _Component

```js
runtime.require('history').from(-1);
```

## load( dump )

- **Description:** Load an historization and apply the modifications to the current system.
- **Schema:** _History
- **Inherit:** _Component

```js
const dump = runtime.require('history').dump();
runtime.require('history').load(dump);
```

## start( )

- **Description:** Start the historization of modifications made to the system.
- **Schema:** _History
- **Inherit:** _Component

```js
runtime.require('history').start();
```

## stop( )

- **Description:** Stop the historization of modifications made to the system.
- **Schema:** _History
- **Inherit:** _Component

```js
runtime.require('history').start();
```