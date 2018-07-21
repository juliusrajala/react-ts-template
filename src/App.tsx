import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainView from 'src/ui/views/MainView';
import styled from 'styled-components';
import Footer from './ui/components/Footer';

const ReactApp = () => {
  return ReactDOM.render(
    <App />,
    document.getElementById('react-root')
  );
}

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background-color: #f5f6fa;
`;

const App: React.SFC = () => (
  <AppContainer>
    <MainView />
    <Footer />
  </AppContainer>
)

ReactApp();
