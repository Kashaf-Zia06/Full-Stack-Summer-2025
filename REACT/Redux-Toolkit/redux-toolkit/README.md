# 🧠 Redux Toolkit Counter App

## 📌 What is Redux Toolkit?

Redux Toolkit (RTK) is the official, **recommended way** to write Redux logic.

### 🔧 Why Redux Toolkit?
Traditional Redux setup often includes:
- Manually writing action creators
- Managing reducers with switch statements
- Creating store configuration from scratch

RTK simplifies all of this by:
✅ Eliminating boilerplate code  
✅ Offering powerful utilities like `createSlice`, `configureStore`, and `createAsyncThunk`  
✅ Making Redux code easier to understand and maintain

---

## 🔄 How Redux Toolkit Works — A Simple Flow

UI (React Component)
↓ Dispatch
Redux Store (Central State)
↓ Updated State
Component re-renders


### 🔁 Core Concepts of RTK

#### ✅ `configureStore`
- Sets up the Redux store
- Automatically applies Redux middleware like Redux Thunk

#### ✅ `createSlice`
- Combines `actions` and `reducers` in a single object
- Simplifies the logic and namespacing of Redux logic

#### ✅ `useSelector`
- Extracts data from the Redux store state

#### ✅ `useDispatch`
- Sends actions to the store to update the state

---

## 📦 About This Project

This is a **basic counter app** built using React and Redux Toolkit.  

                ----------------------

# 🚀 Redux Toolkit Counter App

This is a simple counter application built using **React** and **Redux Toolkit**. It demonstrates how to use slices, actions, and store integration in a clean and maintainable way.

---

## 🧠 Features

- Increment and decrement counter
- Reset counter to 0
- Increment by a custom user-entered amount
- Fully managed using Redux Toolkit

---

## 🛠 Technologies Used

- React (Functional Components)
- Redux Toolkit
- React Redux (`useSelector`, `useDispatch`)
- Local State Management using `useState`

---

🧵 Summary Flowchart:
----------------------------------
User clicks button/input value
        ↓
useDispatch triggers Redux action
        ↓
Reducer in slice updates the state
        ↓
New state stored in Redux store
        ↓
useSelector reads updated state
        ↓
Component re-renders with new value


