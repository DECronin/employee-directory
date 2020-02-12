import React from 'react';
import Wrapper from "./components/Wrapper";
import Directory from "./components/Directory";
import Header from "./components/Header";
import './App.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFilter, faSortNumericDown, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFilter, faSortNumericDown, faSortAlphaDown)

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
