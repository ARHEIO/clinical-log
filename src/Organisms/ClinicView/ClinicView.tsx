import React, { useEffect, useState, ReactElement } from 'react';
import './ClinicView.scss';
import Spinner from '../../Atoms/Spinner/Spinner';
import Card from '../../Atoms/Card/Card';
import Toolbar from '../../Molecules/Toolbar/Toolbar';
import { Post } from '../../Services/PostApi/models';
import { getClinicalLog } from '../../Services/PostApi/api';

// A reminder that we don't need to check auth state here

const ClinicView = (): ReactElement => {
  const [clinicLogs, setClinicLogs] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getClinicalLog()
      .then((posts: Post[]) => setClinicLogs(posts))
      .catch(() => setError('Failed to load posts'));
  }, []);

  return error ? (<Card>{error}</Card>)
    : (
      <div className="killer-container">
        <Card><Toolbar location="clinic" /></Card>
        <h2>Clinical View</h2>
        { clinicLogs
          ? (
            <div className="post-container">
              {clinicLogs && clinicLogs.map((post: Post) => <Card><p>{post.content}</p></Card>)}
            </div>
          )
          : <Spinner />}
      </div>
    );
};

export default ClinicView;
