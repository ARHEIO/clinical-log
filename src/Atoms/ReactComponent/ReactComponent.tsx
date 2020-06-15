import React, { ReactElement } from 'react';
import './ReactComponent.scss';
import { IconButton } from '@material-ui/core';
import {
  ThumbUp, SentimentVeryDissatisfied, TagFaces, Hotel,
} from '@material-ui/icons';
import { Reacts } from '../../Services/PostApi/models';

const ReactComponent = (props: {reacts: Reacts}): ReactElement => {
  const { reacts } = props;
  const reactHandler = (): void => {
    // eslint-disable-next-line no-console
    console.log('Clicked the handler button');
  };

  return (
    <div className="reacts">
      <span className="react-entity">
        <ThumbUp color="secondary" />
        <p>
          {reacts.like}
        </p>
      </span>
      <span className="react-entity">
        <TagFaces color="secondary" />
        <p>
          {reacts.haha}
        </p>
      </span>
      <span className="react-entity">
        <Hotel color="secondary" />
        <p>
          {reacts.wow}
        </p>
      </span>
      <span className="react-entity">
        <SentimentVeryDissatisfied color="secondary" />
        <p>
          {reacts.sad}
        </p>
      </span>
      <IconButton color="primary" onClick={reactHandler}><ThumbUp /></IconButton>
    </div>
  );
};

export default ReactComponent;
