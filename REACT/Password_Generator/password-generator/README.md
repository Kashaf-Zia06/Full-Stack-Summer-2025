                                    
                                    🔐 Password Generator (React + TailwindCSS)

This project is a dynamic password generator built with React and styled using TailwindCSS. It uses React Hooks such as useState, useCallback, useEffect, and useRef to manage the state, optimize performance, and enhance user experience.



🚀 Features
🔢 Set custom password length using a slider (6–50).

🔣 Toggle inclusion of numbers and special characters.

🔁 Auto-generate a new password on every input change.

📋 Copy the generated password to clipboard with one click.

💡 Fully reactive and responsive interface using TailwindCSS.

🧠 Optimized with useCallback and useEffect to avoid unnecessary re-renders.



*********************************************************************************


🛠️ Tech Stack
Technology	    Role
React	        UI & State Management
TailwindCSS  	Styling
useState	    Manages password settings
useEffect	    Triggers re-generation logic
useCallback	    Optimizes performance
useRef	        Copies password to clipboard

*********************************************************************************


🔄 Flow Diagram

    Start -->|User changes input| UpdateState
    UpdateState --> useEffect
    useEffect --> passwordGenerator
    passwordGenerator --> setPassword
    setPassword --> UI_Update
    UI_Update -->|User clicks copy| copyToClipboard

*********************************************************************************

🔧 React Hooks Used
1. **useState**
Used to store and update component states like:

Password length (length)

Toggle options (noAllow for numbers, isChar for special characters)

Final password (password)

➡️ When any of these change, the component re-renders automatically to reflect the updates.

2. **useEffect**
Runs side effects after rendering.
Here, it’s used to:

Automatically regenerate the password whenever user input changes (like length or toggle states).

➡️ Keeps the password updated in real time without needing an explicit button.

3. **useCallback**
Returns a memoized (cached) version of a function.

Here, it’s used to:

Prevent re-creating passwordGenerator() and copyToClipboard() functions on every render.

Improves performance and prevents unnecessary re-runs inside useEffect.

➡️ Especially useful when functions are passed as dependencies.

4. **useRef**
Provides a reference to a DOM element without causing re-renders.

Used to:

Access the password input field directly

Copy its value to the clipboard when the user clicks “Copy”

➡️ Helps perform direct DOM actions (like .select() and .execCommand("copy")).

