import React, { ReactElement } from 'react';
import './IconContainer.scss';
import { Name } from '../../Services/PostApi/models';

const IconContainer = ({ imgSrc, username }: {imgSrc?: string; username: Name}): ReactElement => (
  <div className="icon-container">
    {imgSrc
      ? <img src={imgSrc} alt={`Icon for ${username.firstName} ${username.lastName}`} />
      : <p>{`${username.firstName[0]}${username.lastName[0]} `}</p>}
  </div>
);

export default IconContainer;
