import React from 'react'
import { 
  Route, 
  Switch 
} from 'react-router-dom'
import Home from './routes/home/home';
import Search from './routes/search';
import Library from './routes/library';

export default class Root extends React.Component {
  contructor() {

  }
  render() {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
        </Switch>
    );
  };
};