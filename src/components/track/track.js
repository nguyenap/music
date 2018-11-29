import React from 'react'

import './track.scss'

export default class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, artists, duration_ms, onClick } = this.props;
    console.log('lenth', artists)
    return (
      <div className="track-container" onClick={onClick}>
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
        <span className="duration">

        </span>
      </div>
    );
  };
};