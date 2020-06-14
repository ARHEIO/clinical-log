import React, { useEffect, useState, ReactElement } from 'react';
import './ClinicView.scss';
import Spinner from '../../Atoms/Spinner/Spinner';
import Card from '../../Atoms/Card/Card';
import Toolbar from '../../Molecules/Toolbar/Toolbar';

// A reminder we don't need to check auth state here

const ClinicView = (): ReactElement => {
  const [clinicLogs, setClinicLogs] = useState<any | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setClinicLogs({});
    }, 1000);
  }, []);

  return (
    <div className="killer-container">
      <Card><Toolbar location="clinic" /></Card>
      <h2>Clinical View</h2>
      { clinicLogs
        ? (
          <div className="post-container">
            <Card><p>This is in a card</p></Card>
          </div>
        )
        : <Spinner />}
    </div>
  );
};

export default ClinicView;
