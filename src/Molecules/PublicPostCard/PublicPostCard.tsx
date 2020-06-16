import React, { ReactElement } from 'react';
import './PublicPostCard.scss';
import { PublicPost } from '../../Services/PostApi/models';
import Card from '../../Atoms/Card/Card';
import IconContainer from '../../Atoms/IconContainer/IconContainer';
import TimeContainer from '../../Atoms/TimeContainer/TimeContainer';
import ReactComponent from '../../Atoms/ReactComponent/ReactComponent';

// Todo, wrap @mentions in tags to make them show up as blue

const PublicPostCard = (props: {post: PublicPost; clickHandler: Function}): ReactElement => {
  const { post, clickHandler } = props;

  const ventString = 'I\'m just venting';

  const mapReactEvent = (eventType: string): void => {
    clickHandler({ eventType, id: post.id });
  };

  return (
    <Card className="public-post">
      <div className="public-post-top">
        <div className="public-post-top__name">
          <IconContainer username={post.name} />
          <p>{`${post.name.firstName} ${post.name.lastName}`}</p>
        </div>
        <div className="public-post-top__date">
          <TimeContainer time={post.time} relative />
          {post.isVenting && <p>{ventString}</p>}
        </div>
      </div>
      <p className="public-post__content">{post.content}</p>
      <ReactComponent reacts={post.reacts} reactHandler={mapReactEvent} />
    </Card>
  );
};

export default PublicPostCard;
