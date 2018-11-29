import React from 'react'

import './track.scss'
import { localData } from '../../common/until/dataLocal';

export default class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  passMsToMin(times){
    let minutes = Math.floor(times/60000)
    let seconds = ((times%60000)/1000).toFixed(0);
    return minutes+":"+(seconds<10?"0":"")+seconds;
  }

  chooseSong(){
    let {song, onClick}=  this.props;
    localData.setCurrentSong(JSON.stringify(song));
    onClick();
  }
  render() {
    const { song} = this.props;
    let {name, artists, duration_ms } = song?song:null;
    let duration = this.passMsToMin(duration_ms)
    return (
      <div className="track-container" onClick={()=>this.chooseSong()}>
        <div className="icon-play">
          <span className="music-note symboy">♪</span>
          <span className="play isPlaying symboy">&#9654;</span>
          <span className="pause symboy">&#9612;</span>
        </div>
        <div>
          <span className="song-name">
            {name}
          </span>
          <div className="artist">
            {artists && artists.map((artist, index) => (
              <span>{artist.name}
                {index < artists.length-1
                  ?<span>{", "}</span>
                  :null
                }
              </span>
            ))
            }
          </div>
        </div>
        <div className="duration">
            {duration}
        </div>
      </div>
    );
  };
};