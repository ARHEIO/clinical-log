import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import './Toolbar.scss';

type Location = 'newsfeed' | 'clinic';

const Toolbar = (props: {location: Location}): ReactElement => {
  const { location } = props;
  return (
    <nav className="navigation-toolbar">
      <Button variant="contained" color="primary" href="#/newsfeed" disabled={location === 'newsfeed'}>Newsfeed</Button>
      <Button variant="contained" color="primary" href="#/clinic" disabled={location === 'clinic'}>Clinical Log</Button>
    </nav>
  );
};
export default Toolbar;
