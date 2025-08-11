import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import SolutionsSection from './components/SolutionsSection';
import AboutSection from './components/AboutSection';
import CareersSection from './components/CareersSection';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #0b1220;
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <NavBar />
        <Hero />
                       <SolutionsSection />
        <AboutSection />
        <CareersSection />
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
