import React, {
  useEffect, useState, ReactElement, useContext,
} from 'react';
import './NewsfeedView.scss';
import Spinner from '../../Atoms/Spinner/Spinner';
import Card from '../../Atoms/Card/Card';
import Toolbar from '../../Molecules/Toolbar/Toolbar';
import { AuthContext } from '../../Store/Store';

const NewsfeedView = (): ReactElement => {
  const [publicPosts, setPublicPosts] = useState<any | null>(null);
  const [authState] = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setPublicPosts({});
    }, 1000);
  }, []);

  return (
    <div className="killer-container">
      { authState.isAuthed && <Card><Toolbar location="newsfeed" /></Card> }
      <h2>Newsfeed</h2>
      { publicPosts
        ? (
          <div className="post-container">
            <Card><p>This is in a card</p></Card>
          </div>
        )
        : <Spinner />}
    </div>
  );
};

export default NewsfeedView;
