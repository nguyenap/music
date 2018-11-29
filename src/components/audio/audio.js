import React from 'react'
import { localData } from '../../common/until/dataLocal';

import "./audio.scss"
import { emitter, EventTypes } from '../../common/until/EventEmitter';

export default class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      song:{}
    }
  }
  componentWillMount(){
    this.getCurrentSong();
    emitter.addListener(EventTypes.PLAY_MUSIC, ()=>{
      this.getCurrentSong();
      this.playMusic();
    })
  }
  getCurrentSong(){
    localData.getCurrentSong
    .then(res => {
      if(res){
        this.setState({
          song:res
        })
      }
    })
    .catch(e => console.log(e))
  }
  playMusic(){
    let {song} = this.state;
    
  }

  render() {
    let {song}= this.state;
    return(
      <div className="audio-container">
              <div className="song-name">{song?song.name:""}</div>
            <div className="audio-button">
              <button className="button button-play" onClick={()=>this.playMusic()}>Play</button>
            </div>
            <div className="volume">

            </div>
      </div>
    );
  };
};