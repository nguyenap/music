import React, { Component } from 'react';
import Root from './routes';
import Drawer from './components/drawer/drawer';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import { setToken } from './api/api';
import history from './common/history'
class App extends Component {

  constructor(){
    super();
    this.getTokenFromLocal();
  }

  getTokenFromLocal(){
    let token = localStorage.getItem('access_token');
    console.log('access-token', token)
    token && setToken(token);
  }
  render() {
    return (
      <Router history={history} >
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
