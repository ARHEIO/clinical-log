/* eslint-disable react/no-array-index-key */
import React, {
  useEffect, useState, ReactElement, useContext,
} from 'react';
import './NewsfeedView.scss';
import { Button } from '@material-ui/core';
import Spinner from '../../Atoms/Spinner/Spinner';
import Card from '../../Atoms/Card/Card';
import PublicPostCard from '../../Molecules/PublicPostCard/PublicPostCard';
import Toolbar from '../../Molecules/Toolbar/Toolbar';
import { AuthContext } from '../../Store/Store';
import { getPublicPosts } from '../../Services/PostApi/api';
import { PublicPost } from '../../Services/PostApi/models';

const NewsfeedView = (): ReactElement => {
  const [publicPosts, setPublicPosts] = useState<PublicPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [authState] = useContext(AuthContext);

  const getPosts = (): void => {
    getPublicPosts()
      .then((posts: PublicPost[]) => setPublicPosts(posts))
      .catch(() => setError('Failed to load posts'));
  };

  useEffect(() => {
    getPosts();
  }, []);

  // TODO find a better way to handle errors than nested statements
  // TODO make global error panel
  return error
    ? (
      <Card>
        {error}
        {' '}
        <Button variant="outlined" color="secondary" onClick={getPosts}>Try Again</Button>
      </Card>
    )
    : (
      <div className="newsfeed-container">
        { authState.isAuthed && (
          <>
            <h2>Authed Toolbar</h2>
            <Card><Toolbar location="newsfeed" /></Card>
          </>
        )}
        <h2>Newsfeed</h2>
        { publicPosts
          ? (
            <div className="post-container">
              {publicPosts && publicPosts.map((post: PublicPost, index) => <PublicPostCard key={`post_${index}`} post={post} />)}
            </div>
          )
          : <Spinner />}
      </div>
    );
};

export default NewsfeedView;
