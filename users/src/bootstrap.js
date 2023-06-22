import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const mount = (element) => {
  const root = ReactDOM.createRoot(element);
  root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
}

if (process.env.NODE_ENV === "development") {
  const element = document.getElementById('dev-users-root');
  if (element) {
    mount(element);
  } else {
    console.log(`${element} not found`)
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { mount };
