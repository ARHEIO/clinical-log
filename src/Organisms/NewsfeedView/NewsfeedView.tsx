import React, { useEffect, useState, ReactElement } from 'react';
import './NewsfeedView.scss';
import Spinner from '../../Atoms/Spinner/Spinner';


const NewsfeedView = (): ReactElement => {
  const [publicPosts, setPublicPosts] = useState<any | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setPublicPosts({});
    }, 1000);
  }, []);

  return (
    <div className="killer-container">
      <h2>Newsfeed</h2>
      { publicPosts
        ? <div>This is the newfeed view</div>
        : <Spinner />}
    </div>
  );
};

export default NewsfeedView;
