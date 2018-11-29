import React from 'react'

import './search.scss'
import { apiSearch } from '../../api/search-api';
import Track from '../../components/track/track';
import ListType from '../../components/home/listTypes';
import { localData } from '../../common/until/dataLocal';
import { emitter, EventTypes } from '../../common/until/EventEmitter';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      albums: [],
      tabIsActive: 1
    }
  }

  handleChange(value) {
    console.log('value', value)
    if (value !== "") {
      let params = {
        q: value,
        type: 'track,album',
        market: 'VN',
        limit: '20',
        offset: '0',
      }
      apiSearch.search(params)
        .then(res => {
          console.log('res', res)
          if (!res.error) {
            this.setState({
              songs: res.tracks.items,
              albums: res.albums.items
            })
          }
          else {
            alert(res.error.message)
          }
        })
    }
  }

  changeTab(tabID) {
    this.setState({
      tabIsActive: tabID
    })
  }
  getDetailAlbum(album) {
    const { history } = this.props;
    const { id, href } = album;
    history.push({
      pathname: "/album",
      search: id,
      state: {
        album: album
      }
    })
  }
  play() {
    emitter.emit(EventTypes.PLAY_MUSIC);
  }
  render() {
    const { tabIsActive, songs, albums } = this.state;
    console.log('result', this.state)
    return (
      <div className="search-container">
        <SearchInput
          onChange={value => this.handleChange(value)}
        />
        {albums && songs && (albums.length>0 || songs.length >0)?
          (<>
            <div className="tabs-container">
              <div className={"tab" + (tabIsActive === 1 ? " active" : "")} onClick={() => this.changeTab(1)}>Songs</div>
              <div className={"tab" + (tabIsActive === 2 ? " active" : "")} onClick={() => this.changeTab(2)}>Albums</div>
            </div>
            <div className="search-content">
              {tabIsActive === 1 ?
                songs.map(song => (
                  <Track
                    name={song.name}
                    artists={song.artists}
                    duration_ms={song.duration_ms}
                    onClick={() => this.setCurrentTrack(song)}
                  />
                ))
                : albums.map(album => (
                  <ListType
                    className="item-album"
                    data={album}
                    onClick={() => this.play(album)}
                  />
                ))
              }
            </div>
          </>)
          :
          <div className="adding">
            <div className="title">Search Spotify</div>
            <div className="text">Find your favorite songs</div>
          </div>
        }

      </div>
    );
  };
};

class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('vemetment')
    const { onChange } = this.props;
    this.setState({ value: event.target.value })
    onChange(event.target.value);
  }

  render() {
    let { value } = this.state;
    return (
      <div className="search-input-container">
        <input
          // value={this.state.value}
          className="search-input"
          onChange={this.handleChange}
          placeholder="Start typing..."
        />
      </div>
    );
  }
}