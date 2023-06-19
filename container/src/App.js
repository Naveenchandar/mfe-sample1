import React from "react";
// import logo from './logo.svg';
import './App.css';
import UsersApp from "./components/UsersApp";
import TodosApp from "./components/TodosApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Container</h1>
        <UsersApp />
        <hr />
        <TodosApp />
      </header>
    </div>
  );
}

export default App;
