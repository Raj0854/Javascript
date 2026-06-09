# Synchronous and Asynchronous Programming in JavaScript

## 1. Synchronous Programming

Synchronous code runs **line by line**.

- One task completes before the next task starts.
- JavaScript waits for the current operation to finish.
- It is also called **blocking code**.

### Example

```javascript
console.log("Start");
console.log("Learning JavaScript");
console.log("End");
```

### Output

```
Start
Learning JavaScript
End
```

---

## 2. Asynchronous Programming

Asynchronous code allows JavaScript to **start a task and continue executing other code without waiting**.

- Non-blocking execution.
- Improves performance and user experience.
- Used for API calls, timers, file operations, and database requests.

### Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Task Completed");
}, 2000);

console.log("End");
```

### Output

```
Start
End
Task Completed
```

Explanation:
- `setTimeout()` starts a timer.
- JavaScript does not wait for 2 seconds.
- It continues executing the next line.

---

## Why Asynchronous Programming is Needed

Imagine a website fetching data from a server.

Without async:
- The page freezes until data arrives.

With async:
- Users can continue using the page while data loads.

---



```


## Difference Between Sync and Async

| Synchronous | Asynchronous |
|------------|-------------|
| Executes line by line | Does not wait for task completion |
| Blocking code | Non-blocking code |
| Slower for long tasks | Better for long tasks |
| Easy to understand | More flexible and efficient |
| Tasks run one after another | Multiple tasks can progress together |

---

## Summary

- **Synchronous Programming**: Tasks execute one after another and wait for completion.
- **Asynchronous Programming**: Tasks can run in the background while other code continues.
- 