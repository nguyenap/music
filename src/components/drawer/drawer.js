import React from 'react';
import { Link } from 'react-router-dom';

import {
  IconLogo,
  IconSearch,
  IconHome,
  IconLibrary,
  IconSearchGreen,
  IconHomeGreen
}
  from '../../common/icons/icons';
import ButtonIcon from '../button/button-icon'

import './drawer.scss'
import ButtonCircle from '../button/button-circle';
import { apiAuth } from '../../api/auth';
import { api } from '../../api/api';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonIsActive: "home"
    }
  }
  login() {
    console.log('location', this.props)
    window.location = window.location.href.includes('localhost')
      ? "http://localhost:8888/login"
      : "http://spotify-backend-demo.herokuapp.com/login"
  }
  setActiveButton(name) {
    this.setState({
      buttonIsActive: name
    })
  }

  render() {
    const { history } = this.props;
    console.log('props drawer', this.props);
    let { buttonIsActive } = this.state;
    return (
      <div className="container">
        <div className="nav-expand">
          <Link className="logo" to="/home">
            <IconLogo className="logo-icon" />
            <div className="logo-text">Sportify</div>
          </Link>
          <div>
            <ButtonIcon
              icon={
                buttonIsActive === "search" ?
                  <IconSearchGreen className="icon" />
                  : <IconSearch className="icon" />}
              title="Search"
              path='/search'
              onClick={() => this.setActiveButton("search")}
              isActived={buttonIsActive === "search"}
            />
            <ButtonIcon
              icon={
                buttonIsActive === "home"
                  ? <IconHomeGreen className="icon" />
                  : <IconHome className="icon" />}
              title="Home"
              className="icon"
              path='/home'
              onClick={() => this.setActiveButton("home")}
              isActived={buttonIsActive === "home"}
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
            onClick={() => console.log('sign up')}
          />
          <ButtonCircle
            title="log in"
            classNameContainer="button"
            onClick={() => this.login()}
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