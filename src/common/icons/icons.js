import React from 'react';

import Logo from '../../asset/icons/logo.png';
import Search from '../../asset/icons/search.png';
import Home from '../../asset/icons/home.png';
import Library from '../../asset/icons/library.jpg';
import HomeWhite from '../../asset/icons/home-white.png';
import SearchWhite from '../../asset/icons/search-white.png';

export const IconLogo =({className})=>(
  <img src={Logo} className={className}/>
)
export const IconSearch = ({className}) => (
  <img src={Search} className={className} />
)
export const IconSearchWhite = ({className}) => (
  <img src={SearchWhite} className={className} />
)
export const IconHome = ({className}) => (
  <img src={Home} className={className} />
)
export const IconHomeWhite = ({className}) => (
  <img src={HomeWhite} className={className} />
)
export const IconLibrary = ({className}) => (
  <img src={Library} className={className} />
)