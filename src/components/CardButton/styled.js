import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  width: 12rem auto;
  background: #fff;
  background-color: ${props => props.theme.backgroundButton} !important;
  color: #e4c439;
  padding: 1rem;
  border-radius: 10px;
  border-top: 0.5px solid #ce8e7b;
  border-bottom: 0.5px solid #ce8e7b;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.backgroundButtonHover} !important;
    transform: scale(1.05);
  }

  .Card--name {
    text-transform: capitalize;
    color: #444;
    font-size: 2rem;
    font-weight: 700;
  }
`;

export default Container;
