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
import { apiAuth } from '../../api/auth';
import { api } from '../../api/api';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props)
  }
  login(){
    console.log('login');
    // api.getAccess();
    window.location.href="http://localhost:8888"
    // apiAuth.getAccessToken()
    //   .then(res=>
    //     console.log(res))
    //   .catch(e => console.log('e',e))
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
            {/* <ButtonIcon
              icon={<IconLibrary className="icon" />}
              title="Library"
              className="icon"
              path='/library'
            /> */}
          </div>

        </div>
        <div className="login">
          <ButtonCircle
            title="sign up"
            classNameContainer="button"
            onClick={()=>console.log('sign up')}
          />
          <ButtonCircle
            title="log in"
            classNameContainer="button"
            onClick={()=>this.login()}
          />
          <div className="cookies-privacy">
            <span>Cookies</span>
            <span>&#448;</span>
            <span>Privacy</span>
          </div>
        </div>

      </div>
    );
  };
};