import React, { Component } from 'react';
import Root from './routes';
import Drawer from './components/drawer/drawer';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import { setToken } from './api/api';
import history from './common/history'
import { localData } from './common/until/dataLocal';
import Audio from './components/audio/audio';
class App extends Component {

  constructor(){
    super();
    this.getTokenFromLocal();
  }

  getTokenFromLocal(){
    let token = localData.getAccessToken();
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
          <Audio/>
        </div>
      </Router>
    );
  }
}

export default App;
