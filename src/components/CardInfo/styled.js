import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .Card--info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid #ccc;
  }

  .Card--name {
    text-transform: capitalize;
    color: #444;
    font-size: 2rem;
    font-weight: 700;
  }

  .Card--image {
    height: 52px;
    width: 52px;
    display: block;
    margin: auto;
    margin-right: 10px;
    border-radius: 50%;
  }

  img {
    border-style: none;
  }

  .Card--details {
    font-size: 1.3rem;
    color: #db8e80;
  }
`;

export default Container;
