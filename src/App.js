import React from 'react';
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
// import employeeDir from "./components/Employees";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Table />
        {/* <employeeDir /> */}
      </Wrapper>
    </div>
  );
}

export default App;
