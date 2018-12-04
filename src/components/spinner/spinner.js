import React from 'react'
import spinner from '../../asset/spinner.png'

import './spinner.scss'

export default class Spinner extends React.Component {
  constructor() {
    super();
    this.state={
      duration: 1010
    }
  }
  changeSpeed(offset=0){
    let {duration}= this.state;
    console.log('duration', duration);
    if((offset <0 && duration>=50) || offset>0){
      this.setState({
        duration: duration+offset
      })
    }
  }

  render() {
    return(
      <div className="spinner">
        <img src={spinner} style={{ animationDuration: (this.state.duration+"ms")}} className="spinner-img" alt="spinner"/>
        <div className="button-container">
          <div className={"btn up"} onClick={()=>this.changeSpeed(-100)}>
            +
          </div>
          
          <div className={"btn down"} onClick={()=>this.changeSpeed(+100)}>
            -
          </div>
        </div>
      </div>
    );
  };
};