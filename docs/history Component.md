---
id: history-component
title: history Component
sidebar_label: history Component
---

## back() : number

- **Description:** Go back to the history of modifications made to the system. It returns the index of the current history stack.
- **Schema:** _History
- **Inherit:** _Component

```js
const currentIndex = runtime.require('history').back();
```

## clear()

- **Description:** Clear the history.
- **Schema:** _History
- **Inherit:** _Component

```js
runtime.require('history').clear();
```

## dump( ) : string

- **Description:** Export all the modifications made to the system.
- **Schema:** _History
- **Inherit:** _Component

```js
const dump = runtime.require('history').dump();
```

## get( index ) : object

- **Description:** Get one item of the history stack.
- **Schema:** _History
- **Inherit:** _Component

```js
const item = runtime.require('history').get(-1);
```

## forward() : number

- **Description:** Go forward to the history of modifications made to the system. It returns the index of the current history stack.
- **Schema:** _History
- **Inherit:** _Component

```js
const currentIndex = runtime.require('history').back();
```

## from( index )

- **Description:** Start the index to go back/forward in the history at the correct value. If index is `-1`, we start from the last modification made to the system.
- **Schema:** _History
- **Inherit:** _Component

```js
runtime.require('history').from(-1);
```

## load( dump ) : boolean

- **Description:** Load an historization and apply the modifications to the current system. It returns true if the dump has been loaded without error.
- **Schema:** _History
- **Inherit:** _Component

```js
const dump = runtime.require('history').dump();
const success = runtime.require('history').load(dump);
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