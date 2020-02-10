import React from 'react';
import Wrapper from "./components/Wrapper";
import employeeDir from "./components/Employees";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <employeeDir />
      </Wrapper>
    </div>
  );
}

export default App;
