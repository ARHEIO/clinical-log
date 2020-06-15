import React, { ReactElement, ReactNode } from 'react';
import './Card.scss';

const Card = (props: { className?: string; children?: ReactNode }): ReactElement => {
  const { children, className } = props;
  const additionalClassnames = className ? ` ${className}` : '';
  return (
    <div className={`card-container${additionalClassnames}`}>
      {children}
    </div>
  );
};

export default Card;
