import React, { ReactElement, ReactNode } from 'react';
import './Card.scss';

const Card = (props: { className?: string; children?: ReactNode }): ReactElement => {
  const { children, className } = props;

  return (
    <div className={`card-container ${className}`}>
      {children}
    </div>
  );
};

export default Card;
