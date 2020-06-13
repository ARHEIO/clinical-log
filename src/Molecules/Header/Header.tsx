import React, { ReactElement } from 'react';
import './Header.scss';

const Header = (): ReactElement => (
  <header className="app-header">
    <div className="app-header_top-bar" />
    <div className="app-header_bottom-bar">
      <h1>South Yarra Health and Wellbeing Clinic</h1>
    </div>
  </header>
);

export default Header;
