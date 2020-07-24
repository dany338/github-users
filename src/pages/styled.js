import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: max-content;
`;


export default Container;
