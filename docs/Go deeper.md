---
id: go-deeper
title: Go deeper
sidebar_label: Go deeper
---

## Use System Runtime core APIs

If you need more control to System Runtime core components, you can call directly System Runtime core APIs in your code (via Dependency Injection on System Runtime behaviors).

To do do, set the last parameter of **on** component method to *true*.

You will have access to:

- System Runtime component module with **$component**:

```js
component.on('eventName',  () => {
  const runtime = $component.get('runtime');
}, true);
```

- System Runtime database module with **$db**:

```js
component.on('eventName', () => {
  const result = $db.Person.find({'name': 'laure'}); 
}, true);
````

- System Runtime metamodel module with **$metamodel**:

```js
component.on('eventName', () => {
  const result = $metamodel.getParents('Teacher');
}, true);
```

- System Runtime workflow module with **$workflow**:

```js
component.on('eventName', () => {
  $workflow.process({
    component: 'luke',
    state: 'fullName',
    data: []
  });
}, true);
````

- System Runtime behavior module with **$behavior**:

```js
component.on('eventName', () => {
  const actions = $behavior.getActions('eventName','componentId');
}, true);
```

- System Runtime state module with **$state**:

```js
component.on('eventName', () => {
  const state = $state.get('componentId');
}, true);
```

>**With great power comes great responsibility**
>
>By using System Runtime core apis, you will be able to control the way System Runtime manages your system. You will be able to bypass some contraints and the compliance to your model can be incomplete.