import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const mount = (element, { initialPathname, routingType = "memory" }) => {
  const root = ReactDOM.createRoot(element);
  root.render(
    // <React.StrictMode>
    <App routingType={routingType} initialPathname={initialPathname} />
    // </React.StrictMode>
  );
  return () => queueMicrotask(() => root.unmount());
}

// if (process.env.NODE_ENV === "development") {
//   const element = document.getElementById('dev-users-root');
//   if (element) {
//     mount(element, { routingType: "browser" });
//   }
// }

export { mount };
