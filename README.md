> **Build your ideal development stack.**

Dev Stack is a modern, responsive React application that lets developers explore popular technologies and build their own personalized technology stack. The interface is inspired by the supplied Figma design and focuses on a clean, colorful developer experience.

## ✨ About the Project

The project was built with **React + TypeScript** and uses local JSON data to display technology information dynamically. Users can browse technologies, add them to their personal stack, remove individual items, or clear the entire stack.

The UI is fully responsive, adapting from a three-column desktop layout to tablet and mobile screens.

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| ⚛️ **React.js** | Building reusable UI components |
| 🔷 **TypeScript** | Type-safe JavaScript development |
| ⚡ **Vite** | Fast development and production builds |
| 🎨 **Tailwind CSS** | Responsive styling and layout |
| 🌼 **DaisyUI** | Reusable Tailwind UI components |
| 🔔 **React-Toastify** | User feedback and notifications |
| 📄 **JSON** | Local technology data source |

## 🌟 3 Main Features

### 1. 🧩 Build Your Own Stack
Explore technology cards and add your favorite technologies to **Your Stack**. Duplicate technologies are automatically prevented.

### 2. 📱 Fully Responsive Design
The application works smoothly across desktop, tablet, and mobile screen sizes, including a mobile-friendly navigation menu and responsive technology grid.

### 3. 🔔 Interactive User Feedback
React-Toastify provides instant feedback when a technology is added, duplicated, removed, or when the entire stack is cleared.

## 📚 My key Learnings and important takeways:

### 1. What is JSX, and why is it used in React?

**JSX** is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX because it makes UI code easier to read and helps us describe what the page should look like.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. **State** is data managed inside a component that can change over time and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update changing data. In this project, it is used to keep track of the technologies selected in **Your Stack** and to control the mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. We used it in the technology data hook to fetch the local JSON file when the application loads and then store the fetched technologies in state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React know which items were added, removed, or changed so it can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing different UI depending on a condition. In this project, the stack displays an empty message when no technologies have been selected:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty. Add technologies to get started.</p>
) : (
  stack.map((technology) => (
    <StackItem key={technology.id} technology={technology} />
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**. To send something back, the parent can pass a **function as a prop**, and the child calls that function when an action happens.


## I Built it as a React learning project focused on **components, props, state, hooks, data fetching, responsive UI, and reusable component design**.
