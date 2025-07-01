
# Express.js Middleware - Interview Questions and Answers

This document covers middleware in Express.js — from beginner-level questions to advanced, real-world interview topics. Suitable for preparing technical interviews or including in your GitHub documentation.

---

## 🟢 Beginner Level

### 1. **What is middleware in Express.js?**
**Answer:**  
Middleware is a function that has access to the request (`req`), response (`res`), and the `next()` function. It can modify the request/response, end the request, or pass control to the next middleware in the chain.

---

### 2. **Syntax of a middleware function?**
**Answer:**
```js
function middleware(req, res, next) {
  // Do something with req or res
  next(); // Pass control to next middleware
}
```

---

### 3. **What are the types of middleware in Express?**
**Answer:**
- Application-level middleware (`app.use`)
- Router-level middleware (`router.use`)
- Built-in middleware (like `express.json()`)
- Error-handling middleware
- Third-party middleware (like `cors`, `morgan`)

---

### 4. **How do you use a middleware globally?**
**Answer:**
```js
app.use(middlewareFunction);
```

---

### 5. **How do you use middleware for a specific route only?**
**Answer:**
```js
app.get('/admin', middlewareFunction, (req, res) => {
  res.send('Admin Page');
});
```

---

## 🟡 Intermediate Level

### 6. **What is the role of `next()` in middleware?**
**Answer:**  
`next()` passes control to the next middleware in the stack. If not called, the request will hang.

---

### 7. **What happens if `next()` is called multiple times?**
**Answer:**  
It can result in errors like "Cannot set headers after they are sent" or unexpected behavior.

---

### 8. **How do you create a middleware that logs every request?**
**Answer:**
```js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);
```

---

### 9. **How can you send data from middleware to other middlewares or routes?**
**Answer:**  
By attaching it to `req` object:
```js
req.user = { name: 'Kashaf' }; // Accessible in next middleware
```

---

### 10. **How do you handle errors in middleware?**
**Answer:**
By creating a middleware with 4 parameters:
```js
function errorHandler(err, req, res, next) {
  res.status(500).send('Something broke!');
}
app.use(errorHandler);
```

---

## 🔴 Advanced Level

### 11. **What is the difference between `app.use()` and `app.get()` when used with middleware?**
**Answer:**
- `app.use()` applies middleware for all HTTP methods.
- `app.get()` applies middleware only for GET requests.

---

### 12. **How is router-level middleware different from app-level middleware?**
**Answer:**
Router-level middleware applies to a specific router using `express.Router()` instead of the whole app.

```js
const router = express.Router();
router.use(authMiddleware);
```

---

### 13. **Can middleware be asynchronous?**
**Answer:**
Yes. You can use `async/await`, and Express will handle the promise if you return it:
```js
const asyncMiddleware = async (req, res, next) => {
  const data = await someAsyncTask();
  next();
};
```

---

### 14. **How do you restrict route access using middleware (authentication & role-based)?**
**Answer:**
```js
const auth = (req, res, next) => {
  req.user = { role: 'admin' };
  if (req.user) next();
  else res.status(401).send('Unauthorized');
};

const isAdmin = (req, res, next) => {
  if (req.user.role === 'admin') next();
  else res.status(403).send('Admins only');
};

app.get('/admin', auth, isAdmin, (req, res) => res.send('Welcome Admin'));
```

---

### 15. **Can you write a custom middleware to block requests from a specific IP?**
**Answer:**
```js
const blockIP = (req, res, next) => {
  const bannedIP = "123.456.789.000";
  if (req.ip === bannedIP) res.status(403).send("Access denied");
  else next();
};
```

---

### 16. **What is the order of middleware execution in Express?**
**Answer:**
Middleware executes in the order it is defined — top-down. That’s why `app.use()` and `app.get()` order matters.

---

### 17. **Can you chain multiple middlewares in a single route?**
**Answer:**
Yes. Example:
```js
app.get('/profile', authMiddleware, logMiddleware, (req, res) => {
  res.send('Profile');
});
```

---

### 18. **How can you conditionally skip middleware?**
**Answer:**
You can conditionally call `next()` based on logic:
```js
if (req.path === "/public") return next(); // Skip
```

---

### 19. **How to handle async errors in middleware?**
**Answer:**
Use try/catch inside async middleware and pass errors to `next()`:
```js
const asyncMiddleware = async (req, res, next) => {
  try {
    await someAsyncTask();
    next();
  } catch (err) {
    next(err);
  }
};
```

---

### 20. **What's the difference between middleware and a controller?**
**Answer:**
- **Middleware** is used for pre-processing requests (auth, logging, etc.)
- **Controller** is responsible for responding to the request (business logic)

---

## ✅ Bonus Tip

Always end middleware with either:
- `next()` to pass control
- `res.send()` / `res.json()` / `res.status()` to end the response

---

📚 **Recommended Practice:**  
- Build your own `logger`, `auth`, and `errorHandler` middleware  
- Use `express.Router()` to modularize routes with router-level middleware
