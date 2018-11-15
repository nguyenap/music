import React, { Component } from 'react';
import Root from './routes';
import Drawer from './components/drawer/drawer';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Drawer />
          <div className="content">
             <Root />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
