# Callbacks in JavaScript

## What is a Callback?

A **callback** is a function that is passed as an argument to another function and is executed later.

In simple words:

> A callback is a function that is called after another function finishes its work.

---

## Example

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Raj", sayBye);
```

### Output

```
Hello Raj
Goodbye!
```

Explanation:
- `sayBye` is passed as a callback.
- After printing "Hello Raj", the callback function runs.

---

## Callback with Anonymous Function

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Raj", function () {
  console.log("Welcome to JavaScript");
});
```

### Output

```
Hello Raj
Welcome to JavaScript
```

---

## Callback in Asynchronous Code

```javascript
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

### Output (after 2 seconds)

```
Executed after 2 seconds
```

Explanation:
- `setTimeout()` receives a callback function.
- The callback executes after the specified delay.

---

## Why Use Callbacks?

- Execute code after a task completes.
- Handle asynchronous operations.
- Improve code reusability.
- Commonly used with timers, events, and API requests.

---

## Callback Hell

When many callbacks are nested inside each other, the code becomes difficult to read and maintain.

### Example

```javascript
firstTask(function () {
  secondTask(function () {
    thirdTask(function () {
      fourthTask(function () {
        console.log("All tasks completed");
      });
    });
  });
});
```

This is called **Callback Hell** or the **Pyramid of Doom**.

---

## Solution to Callback Hell

Use:
1. Promises
2. Async/Await

These make asynchronous code cleaner and easier to read.

---

## Summary

- A callback is a function passed to another function.
- It runs after the main function completes its task.
- Callbacks are commonly used in asynchronous programming.
- Too many nested callbacks can lead to Callback Hell.
- Promises and Async/Await are modern alternatives.