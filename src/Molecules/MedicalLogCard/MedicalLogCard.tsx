import React, { ReactElement } from 'react';
import './MedicalLogCard.scss';
import { Post } from '../../Services/PostApi/models';
import Card from '../../Atoms/Card/Card';
import IconContainer from '../../Atoms/IconContainer/IconContainer';
import TimeContainer from '../../Atoms/TimeContainer/TimeContainer';

const MedicalLogCard = ({ post }: {post: Post}): ReactElement => (
  <Card className="medical-log">
    <div className="medical-log-top">
      <div className="medical-log-top__name">
        <IconContainer username={post.name} />
        <p>{`${post.name.firstName} ${post.name.lastName}`}</p>
      </div>
      <div className="medical-log-top__date">
        <TimeContainer time={post.time} />
      </div>
    </div>
    <p className="medical-log__content">{post.content}</p>
  </Card>
);

export default MedicalLogCard;
