import React from "react";
import './App.css';
import { Router } from './routing';

function App({ routingType, initialPath }) {
  return (
    <Router routingType={routingType} initialPath={initialPath} />
  );
}

export default App;
