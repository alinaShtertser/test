import React from 'react';

import './header.scss'

export default class Header extends React.Component {
  render() {
    return <header className="header">
      <a href="#" className="logo">
        <span className="icon icon_logo"></span>
      </a>
      <span className="icon icon_secret"></span>
    </header>;
  }
}
