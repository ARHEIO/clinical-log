import React, { ReactElement, SyntheticEvent } from 'react';
import './ReactComponent.scss';
import { IconButton } from '@material-ui/core';
import {
  ThumbUp, SentimentVeryDissatisfied, TagFaces, Hotel,
} from '@material-ui/icons';
import { Reacts } from '../../Services/PostApi/models';

const ReactComponent = (props: {reacts: Reacts; reactHandler: Function}): ReactElement => {
  const { reacts, reactHandler } = props;

  return (
    <div className="reacts">
      <IconButton
        className="react-entity"
        color="primary"
        id="like"
        onClick={(e: SyntheticEvent): void => {
          e.preventDefault();
          reactHandler('like');
        }}
      >
        <ThumbUp color="secondary" />
        <p>{reacts.like}</p>
      </IconButton>

      <IconButton
        className="react-entity"
        color="primary"
        id="haha"
        onClick={(e: SyntheticEvent): void => {
          e.preventDefault();
          reactHandler('haha');
        }}
      >
        <TagFaces color="secondary" />
        <p>{reacts.haha}</p>
      </IconButton>

      <IconButton
        className="react-entity"
        color="primary"
        id="wow"
        onClick={(e: SyntheticEvent): void => {
          e.preventDefault();
          reactHandler('wow');
        }}
      >
        <Hotel color="secondary" />
        <p>{reacts.wow}</p>
      </IconButton>

      <IconButton
        className="react-entity"
        color="primary"
        id="sad"
        onClick={(e: SyntheticEvent): void => {
          e.preventDefault();
          reactHandler('sad');
        }}
      >
        <SentimentVeryDissatisfied color="secondary" />
        <p>{reacts.sad}</p>
      </IconButton>
    </div>
  );
};

export default ReactComponent;
