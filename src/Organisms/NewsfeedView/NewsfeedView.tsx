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
import PostForm from '../../Molecules/PostForm/PostForm';
import { AuthContext } from '../../Store/Store';
import { getPublicPosts } from '../../Services/PostApi/api';
import { PublicPost, Name, Reacts } from '../../Services/PostApi/models';

const NewsfeedView = (): ReactElement => {
  const [publicPosts, setPublicPosts] = useState<PublicPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [authState] = useContext(AuthContext);

  const getPosts = (): void => {
    getPublicPosts()
      .then((posts: PublicPost[]) => setPublicPosts(posts))
      .catch(() => setError('Failed to load posts'));
  };

  const publishNewPost = (postContent: any): void => {
    const userDetails: Name = {
      firstName: 'Chris', lastName: 'Redfield',
    };
    const emptyReacts: Reacts = {
      like: 0, haha: 0, wow: 0, sad: 0,
    };
    const newPost: PublicPost = {
      content: postContent.postContent,
      isVenting: postContent.isVenting,
      name: userDetails,
      time: new Date().toISOString(),
      reacts: emptyReacts,
    };

    // eslint-disable-next-line no-unused-expressions
    publicPosts && setPublicPosts([newPost, ...publicPosts]);
  };

  useEffect(() => {
    if (!publicPosts) {
      getPosts();
    }
  }, [publicPosts]);

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
            <Toolbar location="newsfeed" />
            <h2>Something to say?</h2>
            <PostForm onSubmitParent={publishNewPost} isPublic />
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
