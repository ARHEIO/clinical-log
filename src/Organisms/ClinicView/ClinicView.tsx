/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, ReactElement } from 'react';
import './ClinicView.scss';
import { Button } from '@material-ui/core';
import Spinner from '../../Atoms/Spinner/Spinner';
import Card from '../../Atoms/Card/Card';
import Toolbar from '../../Molecules/Toolbar/Toolbar';
import MedicalLogCard from '../../Molecules/MedicalLogCard/MedicalLogCard';
import { Post } from '../../Services/PostApi/models';
import { getClinicalLog } from '../../Services/PostApi/api';

// A reminder that we don't need to check auth state here

const ClinicView = (): ReactElement => {
  const [clinicLogs, setClinicLogs] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getPosts = (): void => {
    getClinicalLog()
      .then((posts: Post[]) => setClinicLogs(posts))
      .catch(() => setError('Failed to load posts'));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return error ? (
    <Card>
      {error}
      {' '}
      <Button variant="outlined" color="secondary" onClick={getPosts}>Try Again</Button>
    </Card>
  )
    : (
      <div className="clinic-container">
        <h2>Authed Toolbar</h2>
        <Card><Toolbar location="clinic" /></Card>
        <h2>Clincal Logs</h2>
        { clinicLogs
          ? (
            <div className="post-container">
              {clinicLogs && clinicLogs.map((post: Post, index) => <MedicalLogCard key={`post_${index}`} post={post} />)}
            </div>
          )
          : <Spinner />}
      </div>
    );
};

export default ClinicView;
