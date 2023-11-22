---
layout: '../../layouts/BlogLayout.astro'
---

# Module Design Pattern vs Classes in JavaScript

## A few examples about the use and differences between Module Pattern and Classes in JavaScript.

![JavaScript class and Module Pattern examples side by side.](https://miro.medium.com/v2/resize:fit:720/format:webp/1*UhrszUZ_ImWyOHGpP7Y4rA.png)

### What is the best practice, Module Pattern or Classes, in modern JavaScript?

So the first thing I want to say is that I don’t have the answer for this question, to me everything depends on the problem you are trying to solve, and a few other things, like if your boss loves Functional Programming and hates Object Oriented Programming, just to give an example! But something I do have clear is that you need to know the differences in order to be able to use the one you need, and of course you need to understand them and been able to implement them yourself instead of just copying it from StackOverflow …

### So first let’s get some background on Classes

Classes are one of the main characteristics of Object Oriented Programming and are a crucial part of languages that support strongly that methodology.

So as we can read at the [Mozilla developer web site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

> Classes are a template for creating objects. They encapsulate data with code to work on that data.

However in JavaScript we didn’t had classes until fairly recently.

> Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

With this new features we gained the possibility of writing OOP using classes with encapsulated properties and methods as a template to create new objects that would share a common logic, saving like this a lot of time and resources.

```javascript
// JavaScript Class
class Person {
  // Private Properties
  #name
  #lastName
  constructor(name, lastName) {
    this.#name = name;
    this.#lastName = lastName;
  }
  // Public Properties
  getFullName() { return `${this.#name} ${this.#lastName}` }
}

const client = new Person('Hermione', 'G.');
console.log(client.getFullName()); // Hermione G.
console.log(client.#name) 
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.
```

So as we can see in this example a class works as a template that will be used to create objects later, which then will add information into the created template.

However private properties as we see here where only added into JavaScript in ES2022, right at the beginning of this year (on which this article was written)! and as we can see here in [Can I Use](https://caniuse.com/?search=javascript+private), there still exist compatibility issues with old browsers that are still on use.

Protecting the scope of the properties in a class is a major feature on languages that natively support classes, but JavaScript classes are not really classes!

> Classes are in fact “special functions”

So this raises a problem! As we can see in this TypeScript code.

```typescript
// TypeScript Class
class Person {
  private name: string;
  private lastName: string;
  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
  public fullName(): string { return `${this.name} ${this.lastName}`; }
}

const dev = new Person('Andrew', 'W.');
console.log(dev.fullName()); // Andrew W.
console.log(dev.name) 
// Property 'name' is private and only accessible
// within class 'Person'.
```

Here we can write more conventional private and public properties or methods, and while we are working on our TypeScript file if we try to access a private property we will get an error, this is one of the wonders of TypeScript.

But what happens when we compile this code into JavaScript?

```javascript
"use strict";
// TypeScript Class compiled into JavaScript
class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  fullName() { return `${this.name} ${this.lastName}`; }
}
const dev = new Person('Armando', 'Peña');
console.log(dev.fullName()); // Armando Peña
// Supposedly the 'name' property should be private
// according to the TypeScript file but, we can still access it.
console.log(dev.name); // Armando
```

Here we immediately lose the privacy scope of our private properties. And this can become an issue!

### Now the Module Design Pattern

Modules from the very basic are a fundamental part of any robust application, since it helps to maintain the code, clean, separated and organized. Improving scalability and maintenance.

Now in JavaScript we have several ways to manage Modules. The Module Pattern been one of them and it’s used to emulate the concept of classes but including public/private properties and methods, protecting certain parts from the global scope by the use of closures. With this pattern we obtain a clean solution to the problem and only a public Api is returned keeping everything else hidden and protected.

```javascript
// JavaScript Module Pattern
const Person = (function () {
  /**
   * Private Properties
   * Even if we declare this variables as var instead of let,
   * they still are not accessible.
   */
  let name;
  let lastName;
  return {
    /**
     * Public Properties
     * Everything inside the returned object will be accessible.
     */
    setName: function (_name, _lastName) {
      name = _name;
      lastName = _lastName;
    },
    fullName: function () { return `${name} ${lastName}` }
  }
})();

const client = Person;

client.setName('John', 'S.');
console.log(client.fullName()); // John S.
// The name property is not accessible.
console.log(client.name); // undefined
```

As we can see here everything works with an Immediately Invoked Function Expression (IIFE), remember that JavaScript classes are just functions, which declares a set of private properties (`name` and `lastName` in this example), now don’t get confused, even if those properties where declared with var instead of let, they would still be private! After that the function returns an object with methods that affect the private properties, but there is no way to affect or get the private properties directly, well at least that you intentionally make an effort to hack it, but that’s not the point! After that you can export the object like a module or use it however you want and you will be able to securely use actually private properties that don’t have compatibility issues.

Another way of looking into this pattern it’s called the Revealing Module Pattern.

```javascript
// JavaScript Revealing Module Pattern
const Person = (function () {
  // Private Properties
  let name;
  let lastName;

  function publicSetName(_name, _lastName) {
    name = _name;
    lastName = _lastName;
  }

  function publicGetName() { return `${name} ${lastName}` }

  /**
   * Reveal public pointers to 
   * private functions and properties
   */
  return {
    setName: publicSetName,
    getName: publicGetName
  }
})();

const client = Person;

client.setName('Harry', 'P.');
console.log(client.getName()); // Harry P.
// The name property is not accessible.
console.log(client.name); // undefined
```

The biggest difference between the two is that in this pattern everything we declare inside the IIFE is private and we only return a pointer to the properties or methods we want to expose (reveal) to the global scope.

Supporting private data is a really good advantage and also helps the developers that comes from a object oriented programming background to get a cleaner start.

### The catch

There are a few things to consider when trying this pattern.

For example:

Unit Tests to the private properties have an extra difficulty.

Finding and correcting bugs on the private parts can be challenging.

If using the Revealing Module Pattern a private function refers a public function, then the public function can not be patched, since the private function will continue to refer to the private version of the function and won't get affected by the patch!

Now that we have an understanding about how each methodology works we can decide for ourselves under what conditions it’s better to implement one or other approach.

I don’t consider myself an expert on Design Patterns, as a matter of facts this articles is part of an investigation I am currently doing in order to improve my understanding of the subject and become a better Software Engineer. So if you see anything you don’t agree with you are more than welcome to leave a comment so we can discuss about it.

If you want to know more about this subject I recommend.

Checking out this [Youtube channel](https://www.youtube.com/@DevSage).

And reading this [book](https://www.patterns.dev/posts/classic-design-patterns).

Neither of them pay me anything, I just think they have a really good take on the matter.

I also have a [Github repository](https://github.com/Armando284/design_patterns) on which I will be uploading all the code samples I do about Design Patterns in general. I will be using JavaScript, TypeScript and Go there mainly, so check it out if you are interested.

I hope this article is helpful to you and if you are interested on the subject I plan to continue writing about other different patterns on a weekly bases.