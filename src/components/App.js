import styled from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';
import Chat from './Chat';

function App() {
  return (
    <Wrapper>
      <GlobalStyles/>
      <Chat />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-main);
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
