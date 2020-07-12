import React from 'react';
import styled from 'styled-components';
import GameContainer from './components/GameContainer';

const Container = styled.div``;

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin: 2rem;
`;

function App() {
  return (
    <Container>
      <Title>Mastermind</Title>
      <GameContainer />
    </Container>
  );
}

export default App;
