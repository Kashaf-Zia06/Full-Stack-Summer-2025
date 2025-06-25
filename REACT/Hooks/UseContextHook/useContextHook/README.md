📘 React Context API (useContext Hook)
✅ What is Context API?
The React Context API provides a way to pass data through the component tree without having to pass props down manually at every level.

It solves the problem of prop drilling, where data has to be passed through many layers of components unnecessarily.

🧠 When to Use Context?
Use Context when multiple components at different nesting levels need access to the same data.

Ideal for:

🌗 Theme switching

🔐 Authentication state

⚙️ User preferences

🌍 Language settings

⚙️ Steps to Use useContext
1️⃣ Create a Context
import { createContext } from "react";

export const MyContext = createContext();
Declare context outside of any component.

2️⃣ Provide the Context
Wrap your component tree (or the part that needs access) with a Provider and pass the shared value.


<MyContext.Provider value={/* shared value */}>
  <YourComponent />
</MyContext.Provider>

Example:

<MyContext.Provider value={{ theme, setTheme }}>
  <App />
</MyContext.Provider>


import { useContext } from "react";
import { MyContext } from "../App";

const MyComponent = () => {
  const contextValue = useContext(MyContext);

  return <div>{contextValue.theme}</div>;
};

📌 Important Notes
The value passed in <Provider value={...}> can be:
A primitive (e.g., string, number)
An object
A function (e.g., a state updater like setTheme)

If you're passing multiple things (e.g. theme, setTheme), wrap them in an object:
value={{ theme, setTheme }}
You can create a separate file (e.g. ThemeContext.js) to keep your context clean and reusable.

