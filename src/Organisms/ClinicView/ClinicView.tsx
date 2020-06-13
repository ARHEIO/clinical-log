import React, { useEffect, useState, ReactElement } from 'react';
import './ClinicView.scss';
import Spinner from '../../Atoms/Spinner/Spinner';


const ClinicView = (): ReactElement => {
  const [clinicLogs, setClinicLogs] = useState<any | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setClinicLogs({});
    }, 1000);
  }, []);

  return (
    <div className="killer-container">
      <h2>Clinical View</h2>
      { clinicLogs
        ? <div>This is the clinic view</div>
        : <Spinner />}
    </div>
  );
};

export default ClinicView;
