---
id: component-class
title: Component Class
sidebar_label: Component Class
---

## destroy( )

- **Description:** Destroy the component.
- **Schema:** _Component

```js
component.destroy();
```

## id( )

- **Description:** Get the unique ID of a component.
- **Schema:** _Component

```js
component.id();
```

## off( event )

- **Description:** Remove a listener.
- **Schema:** _Component

```js
component.off('eventName');
```

## on( event, action, useCoreAPI, isCore )

- **Description:** Add an event.
- **Schema:** _Component

```js
component.on('eventName', () => {});
```

## require( id )

- **Description:** Get a component by its unique id.
- **Schema:** _Component

```js
component.require('db');
```