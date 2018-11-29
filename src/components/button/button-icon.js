import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './button-icon.scss'

export default class ButtonIcon extends React.Component {

  render() {
    const {
      icon, 
      title, 
      iconRight, 
      className, 
      titleStyle, 
      path,
      onClick
    } = this.props;
    return(
      <Link 
        to={path} 
        className={classNames('button-container', {className})}
        onClick={onClick}
      >
        <div style={{float:iconRight?"right":'left'}}>{icon}</div>
        <span className={'title'} style={titleStyle}>{title}</span>
      </Link>
    );
  };
};