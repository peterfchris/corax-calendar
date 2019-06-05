import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import router from './router'

function App() {
  return (
    <div>
      <HashRouter>
        {router}
      </HashRouter>
    </div>
  );
}

export default App;

// May need to come back and add NavBar