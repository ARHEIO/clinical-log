import React, { ReactElement } from 'react';
import './Spinner.scss';

const Spinner: React.FC = (): ReactElement => (
  <div className="survivor loading-spinner-container">
    <div className="loading-spinner">
      <svg className="loading-spinner-rear"><circle cx="50%" cy="50%" r="18px" /></svg>
      <svg className="loading-spinner-front"><circle cx="50%" cy="50%" r="18px" /></svg>
    </div>
  </div>
);

export default Spinner;
