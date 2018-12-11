import React from 'react';
import ListType from '../../components/home/listTypes';
import './home.scss';
import { albumsApi, apiAlbum } from '../../api/albums-api';
import { _token } from '../../api/api';
import { apiPlayList } from '../../api/playlists-api';
import Genres from './categories/genres';
import Featured from './categories/featured';

const header = ['feature',  'genres & moods'];


const tabs = [
  {
    id: 0,
    name: 'feature',
    components: <Featured/>,
    path: '/feature'
  },
  // {
  //   id: 1,
  //   name: 'podcasts',
  //   components: "podcasts",
  //   path: '/feature'
  // },
  {
    id: 1,
    name: 'genres & moods',
    components: <Genres/>,
    path: '/feature'
  },
  // {
  //   id: 3,
  //   name: 'discover',
  //   components: "Feature",
  //   path: '/feature'
  // }
];
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      activeTabID: 0,
    }
  }
  componentDidMount() {
    apiAlbum.getSeveralAlbums()
      .then(resp => {
        resp.albums && resp.albums.length > 0 ?
          this.setState({
            albums: resp.albums
          })
          : null
      })
  }


  changeTab(id){
    this.setState({
      activeTabID: id,
    })
  }
  renderContent(){
    let {activeTabID} = this.state;
    return tabs[activeTabID].components;
  }

  render() {
    const { history } = this.props;
    const { albums, activeTabID } = this.state;
    // console.log('state', this.state);
    return (
      <div className="home">
        <div className="header">
          {tabs.map(item =>
            <a className= {"header-text " +(activeTabID===item.id? "active":"") } onClick={()=>this.changeTab(item.id)}>
              {item.name}
            </a>
          )}
        </div>
        <div className="home-content">
          {this.renderContent()}
        </div>

      </div>
    );
  };
};