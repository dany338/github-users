import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Style Components */
import { Container } from './styled';
/* Components */
import CardButton from '../components/CardButton';
/* Services */
import * as GithubUsersServices from '../services';

const Home = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const load = useCallback(async () => {
    const users = await GithubUsersServices.apiGithubUsers.getUsers();
    if (Array.isArray(users)) {
      setData(users);
    }
  }, []);

  useEffect(() => {
    if(data.length === 0 && !loading) {
      load();
      setLoading(true);
    }
  }, [data, load, loading]);

  return (
    <Container>
      {!loading ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#f42f6391" highlightColor="#444">
            <Skeleton height={34} />
          </SkeletonTheme>
        </div>
      ) : (
        <>
          {data.map((user) => <CardButton key={user.id} {...user} /> )}
        </>
      )}
    </Container>
  )
};

export default Home;
