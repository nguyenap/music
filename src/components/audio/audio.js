import React from 'react'
import { localData } from '../../common/until/dataLocal';

import "./audio.scss"
import { emitter, EventTypes } from '../../common/until/EventEmitter';

export default class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {},
      isplaying: false,
    }
  }
  componentWillMount() {
    this.getCurrentSong();
    emitter.addListener(EventTypes.PLAY_MUSIC, async () => {
      this.setState({ isplaying: false });
      await this.getCurrentSong();
      await this.playMusic();
    })
  }
  componentDidMount() {
    this.AU.addEventListener("ended", () => this.setSongState(false), false)
    this.AU.addEventListener("playing", () => this.setSongState(true), false)
    this.AU.addEventListener("pause", () => this.setSongState(false), false)
  }

  async getCurrentSong() {
    let currentSong = await localData.getCurrentSong();
    const seft = this;
    if (currentSong) {
      this.setState({
        song: JSON.parse(currentSong)
      },
        () => {
          this.AU.src = this.state.song.preview_url
          this.AU.load()
        }
      )
    }
  }

  playMusic() {
    let { song } = this.state;
    if (song.preview_url) {
      let { isplaying } = this.state;
      isplaying
        ? this.AU.pause()
        : this.AU.play()
    }
    else alert("sorry, this song has no preview versions!\n please search a songs then try again!")
  }

  setSongState(state) {
    this.setState({
      isplaying: state
    })
  }

  render() {
    let { song, isplaying } = this.state;
    let { artists } = song;
    console.log('isplaying', isplaying)
    return (
      <div className="audio-container">
        <div style={{ width: '30%' }}>
          <div className="song-name">{song ? song.name : ""}</div>
          <div className="artist">
            {artists && artists.map((artist, index) => (
              <span key={index}>{artist.name}
                {index < artists.length - 1
                  ? <span>{", "}</span>
                  : null
                }
              </span>
            ))
            }
          </div>
        </div>
        <div className="audio-button">
          <div className="button button-play"
            onClick={() => this.playMusic()}>
            {isplaying
              ? <span>&#10074;&#10074;</span>
              : <span>&#9654;</span>}
          </div>
        </div>

        <audio ref={ref => this.AU = ref}>
          <source src={song.preview_url} type="audio/ogg" />>
          </audio>
        <div className="volume">

        </div>
      </div>
    );
  };
};