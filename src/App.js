import React from 'react';
import Wrapper from "./components/Wrapper";
import Directory from "./components/Directory";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Directory />
      </Wrapper>
    </div>
  );
}

export default App;
