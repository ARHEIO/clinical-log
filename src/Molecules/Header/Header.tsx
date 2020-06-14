import React, { ReactElement, useContext } from 'react';
import './Header.scss';
import Button from '@material-ui/core/Button';
import { AuthContext } from '../../Store/Store';

const Header = (): ReactElement => {
  const [authContext, setAuthContext] = useContext(AuthContext);

  const logInUser = (): void => {
    setAuthContext({ isAuthed: true });
  };

  return (
    <header className="app-header">
      <div className="app-header_top-bar" />
      <div className="app-header_bottom-bar">
        <div className="container">
          <h1>South Yarra Health and Wellbeing Clinic</h1>
          {authContext.isAuthed
            ? <p>Welcome Chris</p>
            : <Button className="log-in-button" variant="contained" color="primary" href="#/auth" onClick={logInUser}>LOGIN</Button>}
        </div>
      </div>
    </header>
  );
};

export default Header;
