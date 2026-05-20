# Variables and Data Types in JavaScript

## Variables in JavaScript

Variables are used to store data or values in JavaScript.

JavaScript provides three ways to declare variables:

- `var`
- `let`
- `const`

### Difference Between var, let, and const

| Keyword | Can Update | Can Redeclare |
|----------|------------|----------------|
| `var` | Yes | Yes |
| `let` | Yes | No |
| `const` | No | No |

### Example

```javascript
let name = "Raj";
const age = 20;
var city = "Pune";
```

---

# Data Types in JavaScript

Data types define the type of value stored in a variable.

## Main Data Types

### 1. String
Stores text or characters.

```javascript
let name = "Raj";
```

---

### 2. Number
Stores integer and decimal numbers.

```javascript
let age = 20;
let price = 99.5;
```

---

### 3. Boolean
Stores only `true` or `false`.

```javascript
let isLogin = true;
```

---

### 4. Undefined
A variable declared without a value.

```javascript
let x;
```

---

### 5. Null
Represents an empty value.

```javascript
let data = null;
```

---

### 6. Object
Stores data in key-value pairs.

```javascript
let student = {
  name: "Raj",
  age: 20
};
```

---

### 7. Array
Stores multiple values in a single variable.

```javascript
let colors = ["red", "blue", "green"];
```

---

