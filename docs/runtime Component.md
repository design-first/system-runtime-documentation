---
id: runtime-component
title: runtime Component
sidebar_label: runtime Component
---

## bundle( ) : string

- **Description:** Bundle the running system into a stringified JSON object and returns it.
- **Schema:** _Runtime
- **Inherit:** _Component

```js
const bundle = runtime.bundle();
```

## install( path , async ) : string

- **Description:** Install a system given a relative path and returns the id of the installed system. **async** parameter is optional.
- **Schema:** _Runtime
- **Inherit:** _Component

```js
const systemId = runtime.install('app.json');
```

>- on server, systems are installed synchronously (i.e. **async** parameter can not be set) and
>- on client, **async** parameter is set to true by default.

## message( msg )

- **Description:** Send a message to the system.
- **Schema:** _Runtime
- **Inherit:** _Component

```js
runtime.message({
  'event': 'an_event',
  'from': 'system_id',
  'data': ['val1', true, {'key':'val'}]
});
```

## start( id )

- **Description:** Start a system given an id.
- **Schema:** _Runtime
- **Inherit:** _Component

```js
runtime.start(systemId);
```

## stop( id )

- **Description:** Stop a system given an id.
- **Schema:** _Runtime
- **Inherit:** _Component

```js
runtime.stop(systemId);
```

## status( ): object

- **Description:** Show the status of all the installed systems. It returns an object of all the systems and their status.
- **Schema:** _Runtime
- **Inherit:** _Component

```js
const status = runtime.status();
```

## system( ): System

- **Description:** Get the current system.
- **Schema:** _Runtime
- **Inherit:** _Component

```js
const system = runtime.system();
```

## system( name ) : System

- **Description:** Create a system.
- **Schema:** _Runtime
- **Inherit:** _Component

```js
const newSystem = runtime.system('mySystem');
```

## uninstall( id )

- **Description:** Uninstall a system given an id.
- **Schema:** _Runtime
- **Inherit:** _Component

```js
runtime.uninstall(systemId);
```