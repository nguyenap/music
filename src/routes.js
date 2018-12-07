import React from 'react'
import { 
  Route, 
  Switch 
} from 'react-router-dom'
import Home from './routes/home/home';
import Search from './routes/search/search';
import Library from './routes/library';
import Login from './routes/login'
import { _token } from './api/api';
import AlbumDetail from './routes/album-detail/album-detail';
import PlayList from './routes/playlist/playlist';
import CatagoryDetail from './routes/catagory-detail/catagory-detail';

export default class Root extends React.Component {
  constructor() {
    super();
    console.log('access', _token)
  }
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/library" component={Library} />
          <Route path="/album" component={AlbumDetail}/>
          <Route path="/playlist" component={PlayList}/>
          <Route path="/catagory-detail" component={CatagoryDetail}/>
        </Switch>
    );
  };
};