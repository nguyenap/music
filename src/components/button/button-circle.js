import React from 'react'
import classNames from 'classnames'
import './button-circle.scss'

export default class ButtonCircle extends React.Component {
  contructor() {
    
  }

  render() {
    const {title, classNameContainer, classNameTitle, onClick} = this.props;
    return( 
      <a ref="http://localhost:8888">
      <p className={ classNames('btn-circle-container', classNameContainer)} onClick={onClick} >
        <button className={'btn-circle-text'}>{title}</button>
      </p>
        
        </a>
    );
  };
};