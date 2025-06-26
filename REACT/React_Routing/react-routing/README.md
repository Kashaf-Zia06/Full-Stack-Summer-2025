# 🚀 React Router v6 App

This is a beginner-to-intermediate level React app that demonstrates the usage of **React Router v6**, including nested routes, dynamic URL parameters, and route-based error handling.

---

## 📌 What This App Demonstrates

- 🧭 Basic routing (`/`, `/about`, `/contact`)
- 🗂️ Nested routing (`/about/courses`, `/about/departments`)
- 📌 Dynamic routes using parameters (`/student/:id`)
- ❌ Custom 404 page for unmatched routes

---

## 📁 Folder Highlights

- `components/` – Contains reusable components like `Navbar`, `Home`, `About`, etc.
- `App.js` – Initializes router and links all routes with components
- `main.jsx` – Entry point rendering the App

---

## 🔧 Technologies Used

- React
- React Router DOM v6
- JSX & Functional Components

---

## ⚙️ Basic Setup

Install dependencies and run:

```bash
npm install
npm start
```

---

## 🧩 Minimal Routing Example

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

<RouterProvider router={router} />
```

Use `<Outlet />` in parent components to render nested child components.

---

## 🧪 Bonus

Dynamic route: `/student/:id` → can access the `id` with `useParams()`.

404 fallback route: Add path `"*"` to catch unmatched routes.

---

## 🎯 Ideal For

- Understanding React Router basics
- Practicing nested & dynamic routes
- Preparing for interviews
