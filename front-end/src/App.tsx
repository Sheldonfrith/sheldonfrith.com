import React from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Testing out material ui, and typescript
        </p>
        <Checkbox defaultChecked/>
      </header>
    </div>
  );
}

export default App;
