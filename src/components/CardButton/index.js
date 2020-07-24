import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';

const CardButton = ({login}) => {
  return (
    <Container to={`/users/${login}`}>
      <h1 className="Card--name">{login}</h1>
    </Container>
  )
}

CardButton.propTypes = {
  login: PropTypes.string.isRequired,
};

export default CardButton;
