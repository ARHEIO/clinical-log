import React, { ReactElement, PropsWithChildren } from 'react';
import './Card.scss';

const Card: React.FC = (props: PropsWithChildren<any>): ReactElement => {
  const { children } = props;

  return (
    <div className="card-container">
      {children}
    </div>
  );
};

export default Card;
