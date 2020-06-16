import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import './Toolbar.scss';
import Card from '../../Atoms/Card/Card';

type Location = 'newsfeed' | 'clinic';

const Toolbar = (props: {location: Location}): ReactElement => {
  const { location } = props;
  return (
    <Card>
      <nav className="navigation-toolbar">
        <Button variant="contained" color="primary" href="#/newsfeed" disabled={location === 'newsfeed'}>Newsfeed</Button>
        <Button variant="contained" color="primary" href="#/clinic" disabled={location === 'clinic'}>Clinical Log</Button>
      </nav>
    </Card>
  );
};
export default Toolbar;
