import React, {
  useEffect, useState, ReactElement, useContext,
} from 'react';
import './NewsfeedView.scss';
import Spinner from '../../Atoms/Spinner/Spinner';
import Card from '../../Atoms/Card/Card';
import Toolbar from '../../Molecules/Toolbar/Toolbar';
import { AuthContext } from '../../Store/Store';
import { getPublicPosts } from '../../Services/PostApi/api';
import { PublicPost } from '../../Services/PostApi/models';

const NewsfeedView = (): ReactElement => {
  const [publicPosts, setPublicPosts] = useState<PublicPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [authState] = useContext(AuthContext);

  useEffect(() => {
    getPublicPosts()
      .then((posts: PublicPost[]) => setPublicPosts(posts))
      .catch(() => setError('Failed to load posts'));
  }, []);

  // TODO find a better way to handle errors than nested statements
  // TODO make global error panel
  return error ? (<Card>{error}</Card>)
    : (
      <div className="killer-container">
        { authState.isAuthed && <Card><Toolbar location="newsfeed" /></Card> }
        <h2>Newsfeed</h2>
        { publicPosts
          ? (
            <div className="post-container">
              {publicPosts && publicPosts.map((post: PublicPost) => <Card><p>{post.content}</p></Card>)}
            </div>
          )
          : <Spinner />}
      </div>
    );
};

export default NewsfeedView;
