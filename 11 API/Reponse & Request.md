# Request and Response in JavaScript

## What is a Request?

A **Request** is a message sent from the client (browser/app) to the server asking for data or performing an action.

### Example

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1");
```

In this example, the browser sends a request to the server to get user data.

**Flow:**

```text
Client (Browser) → Server
```

---

## What is a Response?

A **Response** is the data returned by the server after processing the request.

### Example

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    console.log(response);
  });
```

### Output

```javascript
Response {
  status: 200,
  ok: true,
  ...
}
```

**Flow:**

```text
Server → Client (Browser)
```

---

## Real-Life Example

Imagine you order food online.

### Request

You place an order:

> I want a pizza.

This is called a **Request**.

### Response

The restaurant delivers the pizza.

This is called a **Response**.

---

## Fetch API Example

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### Flow Diagram

```text
Browser
   |
   | Request
   ↓
Server
   |
   | Response
   ↓
Browser
```

---

## Response Properties

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    console.log(response.status);
    console.log(response.ok);
  });
```

### Common Response Properties

| Property          | Description                                |
| ----------------- | ------------------------------------------ |
| `response.status` | HTTP status code                           |
| `response.ok`     | Returns `true` if request is successful    |
| `response.json()` | Converts response into a JavaScript object |
| `response.text()` | Converts response into plain text          |

---

## Common HTTP Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| `200`       | Success               |
| `201`       | Created               |
| `400`       | Bad Request           |
| `401`       | Unauthorized          |
| `404`       | Not Found             |
| `500`       | Internal Server Error |

---

## Interview Answer

### Request

A request is data sent by the client to the server asking for information or requesting an action.

### Response

A response is data returned by the server to the client after processing the request.

---

## Quick Summary

* Request = Client → Server
* Response = Server → Client
* `fetch()` sends a request.
* The server returns a response.
* `response.json()` converts JSON data into a JavaScript object.
* Status codes indicate whether the request was successful or failed.
