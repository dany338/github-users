import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Style Components */
import { ContainerInfo } from './styled';
/* Components */
import CardInfo from '../components/CardInfo';
/* Services */
import * as GithubUsersServices from '../services';

const Info = ({ match }) => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const load = useCallback(async () => {
    if(typeof match.params.login !== 'undefined') {
      const user = await GithubUsersServices.apiGithubUsers.getUserByUsername(match.params.login);
      if (typeof data === 'object') {
        setData(user);
      }
    }
  }, [data, match.params.login]);

  useEffect(() => {
    if(!loading) {
      load();
      setLoading(true);
    }
  }, [load, loading]);

  return (
    <ContainerInfo>
      {!loading ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#f42f6391" highlightColor="#444">
            <Skeleton height={34} />
          </SkeletonTheme>
        </div>
      ) : (data &&
        <CardInfo {...data} />
      )}
    </ContainerInfo>
  )
};

Info.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

Info.defaultProps = {
  match: {},
};

export default withRouter(Info);
