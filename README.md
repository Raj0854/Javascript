# Javascript

## 1. IIFE
# IIFE (Immediately Invoked Function Expression)

## What is an IIFE?

**IIFE** stands for **Immediately Invoked Function Expression**.

It is a function that is:

1. Defined
2. Executed immediately after its creation

---

## Syntax

```javascript
(function () {
  console.log("IIFE Executed");
})();
```

### Output

```
IIFE Executed
```

---

## How It Works

```javascript
(function () {
  console.log("Hello");
})();
```

- The function is wrapped inside `()`.
- The last `()` immediately calls the function.

---

## IIFE with Parameters

```javascript
(function (name) {
  console.log("Hello " + name);
})("Raj");
```

### Output

```
Hello Raj
```

---

## Arrow Function IIFE

```javascript
(() => {
  console.log("Arrow IIFE");
})();
```

### Output

```
Arrow IIFE
```

---


## Summary

- **IIFE** = Immediately Invoked Function Expression.
- It runs as soon as it is created.
- Helps avoid global scope pollution.
- Creates a private scope for variables.
- Common syntax:

```javascript
(function () {
  // code
})();
```
