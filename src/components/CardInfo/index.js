import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';

const CardInfo = ({ avatar_url, login, name, location}) => {

  return (
    <Container>
      <img
        className="Card--image"
        src={avatar_url}
        alt={login}
      />
      <div className="Card--info">
        <h1 className="Card--name">{name}</h1>
        <span className="Card--details">{location}</span>
      </div>
    </Container>
  )
}

CardInfo.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default CardInfo;
