import React from 'react';
import {
  IconLogo,
  IconSearch,
  IconHome,
  IconLibrary
}
  from '../../common/icons/icons';
import ButtonIcon from '../button/button-icon'

import './drawer.scss'
import ButtonCircle from '../button/button-circle';

export default class Drawer extends React.Component {
  contructor() {

  }

  render() {
    const { history } = this.props;
    console.log('props', this.props)
    return (
      <div className="container">
        <div className="nav-expand">
          <div className="logo">
            <IconLogo className="logo-icon" />
            <div className="logo-text">Sportify</div>
          </div>
          <div>
            <ButtonIcon
              icon={<IconSearch className="icon" />}
              title="Search"
              path='/search'
            />
            <ButtonIcon
              icon={<IconHome className="icon" />}
              title="Home"
              className="icon"
              path='/home'
            />
            <ButtonIcon
              icon={<IconLibrary className="icon" />}
              title="Library"
              className="icon"
              path='/library'
            />
          </div>

        </div>
        <div className="login">
          <ButtonCircle
            title="sign up"
            classNameContainer="button"
            classNameTitle="tile"
          />
          <ButtonCircle
            title="log in"
            classNameContainer="button"
            classNameTitle="tile"
          />
          <div className="cookies-privacy">
            <span>Cookies</span>

            <span>Privacy</span>
          </div>
        </div>

      </div>
    );
  };
};