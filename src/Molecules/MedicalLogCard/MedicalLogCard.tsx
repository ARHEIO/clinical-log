import React, { ReactElement } from 'react';
import './MedicalLogCard.scss';
import { Post } from '../../Services/PostApi/models';
import Card from '../../Atoms/Card/Card';
import IconContainer from '../../Atoms/IconContainer/IconContainer';
import TimeContainer from '../../Atoms/TimeContainer/TimeContainer';

// Todo, wrap @mentions in tags to make them show up as blue

const MedicalLogCard = ({ post }: {post: Post}): ReactElement => (
  <Card className="public-post">
    <div className="public-post-top">
      <div className="public-post-top__name">
        <IconContainer username={post.name} />
        <p>{`${post.name.firstName} ${post.name.lastName}`}</p>
      </div>
      <div className="public-post-top__date">
        <TimeContainer time={post.time} relative={false} />
      </div>
    </div>
    <p className="public-post__content">{post.content}</p>
  </Card>
);

export default MedicalLogCard;
