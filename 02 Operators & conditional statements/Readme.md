# Operators and Conditional Statements in JavaScript

# Operators in JavaScript

Operators are symbols used to perform operations on variables and values.

---

## Types of Operators

### 1. Arithmetic Operators
Used for mathematical calculations.

| Operator | Meaning | Example |
|----------|----------|----------|
| `+` | Addition | `a + b` |
| `-` | Subtraction | `a - b` |
| `*` | Multiplication | `a * b` |
| `/` | Division | `a / b` |
| `%` | Modulus | `a % b` |
| `**` | Exponentiation | `a**b`|

### Example

```javascript
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

---

## 2. Assignment Operators
Used to assign values to variables.

| Operator | Meaning | Example |
|----------|----------|----------|
| `=` | Assigns value | `x = 5` |
| `+=` | Adds and assigns | `x += 2` |
| `-=` | Subtracts and assigns | `x -= 2` |
| `*=` | Multiplies and assigns | `x *= 2` |
| `/=` | Divides and assigns | `x /= 2` |
| `%=` | Modulus and assigns | `x %= 2` |
| `**=` | Power and assigns | `x **= 2` |
### Example

```javascript
let x = 10;

x += 5;

console.log(x);
```

---

## 3. Comparison Operators
Used to compare values.

| Operator | Meaning | Example |
|----------|----------|----------|
| `==` | Equal value | `a == b` |
| `===` | Equal value and type | `a === b` |
| `!=` | Not equal | `a != b` |
| `!==` | Not equal value or type | `a !== b` |
| `>` | Greater than | `a > b` |
| `<` | Less than | `a < b` |
| `>=` | Greater than or equal | `a >= b` |
| `<=` | Less than or equal | `a <= b` |

### Example

```javascript
let a = 10;
let b = 20;

console.log(a < b);
```

---

## 4. Logical Operators
Used to combine conditions.
| Operator | Meaning | Example |
|----------|----------|----------|
| `&&` OR `AND` | True if both conditions are true | `a > 5 && b < 10` |
| `OR `| True if one condition is true | `a > 5 OR b < 10` |
| `!` OR `NOT`| Reverses condition result | `!(a > 5)` |


### Example

```javascript
let age = 20;

console.log(age > 18 && age < 30);
```



---
---

# 5. Unary Operators

Unary operators work on a single operand.

| Operator | Meaning | Example |
|----------|----------|----------|
| `++` | Increment by 1 | `++x` |
| `--` | Decrement by 1 | `--x` |
| `typeof` | Returns data type | `typeof x` |

---

# 6. Ternary Operator

Used as short form of `if...else`.

### Syntax

```javascript
condition ? trueValue : falseValue;
```

### Example

```javascript
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";
```

---





# Conditional Statements in JavaScript

Conditional statements are used to make decisions based on conditions.

---

## 1. if Statement
Executes code if condition is true.

### Example

```javascript
let age = 18;

if(age >= 18) {
    console.log("Eligible to vote");
}
```

---

## 2. if...else Statement
Executes one block if condition is true and another if false.

### Example

```javascript
let age = 16;

if(age >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
```

---

## 3. else if Statement
Used to check multiple conditions.

### Example

```javascript
let marks = 75;

if(marks >= 90) {
    console.log("Grade A");
}
else if(marks >= 60) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}
```

---

## 4. switch Statement
Used to select one option from multiple choices.

### Example

```javascript
let day = 2;

switch(day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}
```

---

# Important Points

- Operators help perform calculations and comparisons.
- Conditional statements help programs make decisions.
- `if`, `else`, and `switch` are commonly used in JavaScript.
- Logical operators are useful for combining multiple conditions.
