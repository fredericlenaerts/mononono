import React from 'react';
import styled from '@emotion/styled';
import { CallToAction } from '@mononono/blockz-ui-call-to-action';

const StyledApp = styled.div`
  background-color: bisque;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export function App() {
  return (
    <StyledApp>
      <CallToAction />
    </StyledApp>
  );
}

export default App;
