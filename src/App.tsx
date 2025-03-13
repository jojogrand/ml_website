import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Logo from './components/Logo';
import Content from './components/Content';
import BackgroundAnimation from './components/BackgroundAnimation';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <BackgroundAnimation />
        <ContentWrapper>
          <Logo />
          <Content />
        </ContentWrapper>
      </AppContainer>
    </>
  );
};

export default App;
