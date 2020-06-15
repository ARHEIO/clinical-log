import React, { ReactElement } from 'react';
import './PublicPostCard.scss';
import { PublicPost } from '../../Services/PostApi/models';
import Card from '../../Atoms/Card/Card';
import IconContainer from '../../Atoms/IconContainer/IconContainer';
import TimeContainer from '../../Atoms/TimeContainer/TimeContainer';
import ReactComponent from '../../Atoms/ReactComponent/ReactComponent';

// Todo, wrap @mentions in tags to make them show up as blue

const PublicPostCard = (props: {post: PublicPost}): ReactElement => {
  const { post } = props;

  const ventString = 'I\'m just venting';

  return (
    <Card className="public-post">
      <div className="public-post-top">
        <div className="public-post-top__name">
          <IconContainer username={post.name} />
          <p>{`${post.name.firstName} ${post.name.lastName}`}</p>
        </div>
        <div className="public-post-top__date">
          <TimeContainer date={post.time} relative />
          {post.isVenting && <p>{ventString}</p>}
        </div>
      </div>
      <p className="public-post__content">{post.content}</p>
      <ReactComponent reacts={post.reacts} />
    </Card>
  );
};

export default PublicPostCard;
