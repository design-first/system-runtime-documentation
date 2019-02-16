---
id: create-components
title: Create components
sidebar_label: Create components
---

Lets say we create a *Person* class:

```js
const metamodel = runtime.require('metamodel');

metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property',
  'getFullName': 'method'
});

metamodel.create();
```

To use it, we just need to **require** it by its name:

```js
const Person = runtime.require('Person');
```

If we look at the object returned by the require, we notice that:

* *Person* is a **standard JavaScript class** (it is a function),
* *Person* is a **named function** (i.e. its name is *Person*),
* *Person* is **immutable**: you can not change its properties or methods.

## Creating an instance

Now lets create a component:

```js
const jean = new Person({
  'firstName': 'Jean',
  'lastName': 'Valjean'
});
```

![Image Alt](../img/TorTeOkiS3mDURbe1Lqh_console2.png)

We see that:

* the component has for class *Person*,
* the component has all the properties and methods defined by the model,
* the component has also an **id** parameter that was not defined by the model. It is the only added field by System Runtime to your model in order to be able to be required and
* the component is **immutable**: you can not change its properties or methods.

So if the component is immutable, how can we change its properties ? We can do it because they are not really object properties, they are methods.

Let’s get some properties of the component:

![Image Alt](../img/1Sum1yr8TFSW11Em3CjS_console3.png)

Properties are methods in System Runtime. They behave the same as [jQuery](http://jquery.com) APIs:

* to get the value of a property, just call the method with the same name without parameter and
* to set the value of a property, call the method with the same name with a parameter.

![Image Alt](../img/KKaAuNsVTQ2KE4LzHLwh_console4.png)

Now we call the method *getFullName*:

![Image Alt](../img/DtIbInAORnK0B5bzlSeg_console5.png)

The result is *undefined* because we did not yet define its **behavior**.

## Implementing methods

We can use the **on** method on the *Person* class to add behaviors to a method.

```js
const Person = runtime.require('Person');

Person.on('getFullName', () => this.firstName() + ' ' + this.lastName());
```

When we call the method *getFullName*, we get the correct result.

![Image Alt](../img/DFQNMaFRzCrDcTUYpQK3_console6.png)

## Implementing events

Components can also have events, **they are defined at schema level**.

```js
const metamodel = runtime.require('metamodel');
 
metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property',
  'swim': 'method',
  'doSport': 'event'
});

// override definition of generated models
metamodel.model('Person', {
  'swim': {
    '=>': 'any'
  }
});

metamodel.create();
```

In our example, we launch an event in a method:

```js
const Person = runtime.require('Person');

Person.on('swim', () => this.doSport());
```

Then we listen to it:

```js
const jean = new Person({
  'firstName': 'jean', 
  'lastName': 'Valjean'
});

jean.on('doSport', () => console.log(this.firstName() + ' do some sport.'));

jean.swim();
```

## Listening to a change of state

In System Runtime, when you call a method, an event or update a property, you try to change in fact the state of a component and System Runtime will check if all is ok to valid the change of state of the component.

It means:

* for a property: the type of the value is valid with the model,
* for a link: the type of the link linked is valid with the model,
* for a collection: the type of the item is valid with the model,
* for a method: the number of parameters, their types and the result are valid with the model and
* for an event: the number of parameters and their numbers are valid with the model.

All is done internally by a **worflow engine**.

You can listen to a property change or a collection change (i.e. add/remove item).

Example, do something when *firstName* changed:

```js
Person.on('firstName', name => console.log('the new value of firstName is ' + name));
```

## Defining inheritance

In System Runtime, **inheritance is defined in schema**. You do not have to code.

Lets say we want to create a *Teacher* class that inherits from a *Person* class:

```js
const metamodel = runtime.require('metamodel');

// create Person class
metamodel.schema('Person', {
  'firstName': 'property',
  'lastName': 'property',
  'getFullName': 'method'
});

// create Teacher class
metamodel.schema('Teacher', {
  '_inherit': ['Person'] // inheritance
});

metamodel.create();

const Person = runtime.require('Person');

// add a behavior
Person.on('getFullName', () => this.firstName() + ' ' + this.lastName());

let Teacher = runtime.require('Teacher');

// create a teacher component
const eikichi = new Teacher({
  'firstName': 'Eikichi',
  'lastName': 'Onizuka'
});

eikichi.getFullName();
```

To create inheritance between classes, we have to:

  * add an **_inherit** property in schemas and 
  * specify the schemas we want to inherit.

Inheritance in System Runtime means:

* a child class has all the properties of its parents,
* a child class has all the methods of it parents and
* a child class has all the events of its parents.

>**System Runtime can manage multi-inheritance ?**
>
>As you have noticed, we talk about parents: System Runtime manages **multi-inheritance**. Inheritance follows the order you set on **_inherit**, so if parents have all a property with the same name, it is the last parent specified in **_inherit** array that wins.

When a method is called:

* System Runtime will search if there is a behahior for the corresponding method and instance,
* if not, System Runtime will search a behahior for the corresponding method and class name and
* if not, System Runtime will search a behahior for the corresponding method at parents class level.

>**Want to know more ?**
>
>System Runtime uses [C3 superclass linearization algorithm](https://en.wikipedia.org/wiki/C3_linearization) to get the order in which methods should be inherited.

## Defining relationships between components

Links between components are set at schema level.

  * For a **one to one relationship**, use *link* value:

```js
const metamodel = runtime.require('metamodel');

metamodel.schema('Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'father': 'link' // define a link
});

metamodel.create();

const Jedi = runtime.require('Jedi');

const anakin = new Jedi({
  'firstName': 'Anakin',
  'lastName': 'Skywalker'
});

const luke = new Jedi({
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

// add reference
luke.father(anakin);

// nagivate threw components
luke.father().firstName();
```

  * For a **one to many relationship**, use *collection* value. The collection will behave like an *array*. That collection can only accept components of class defined in the schema. 

```js
// create the model
const metamodel = runtime.require('metamodel');

metamodel.schema('Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'children': 'collection' // define a collection
});

metamodel.create();

const Jedi = runtime.require('Jedi');

const leia = new Jedi({
  'firstName': 'Leia Amidala',
  'lastName': 'Skywalker'
});

const luke = new Jedi({
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

const padme = new Jedi({
  'firstName': 'Padme',
  'lastName': 'Amidala'
});

// add the children
padme.children([luke, leia]);

// navigate threw components
padme.children(1).firstName();
```

## Conclusion

To sum up this little introduction to System Runtime components:

* System Runtime is **model centric**, all is driven by the model,
* System Runtime **classes are automatically created by the model**,
* System Runtime **components are stateful immutable objects**,
* for implementing methods, we need to add **behaviors** and
* System  Runtime accepts **multi-inheritance**, **one to one** and **one to many relationships** between components.

In the a next article, we will see [how System Runtime manages these components](manage-your-components.html).