import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

// browserrouter: endereco. cada rota fica acessivel a partir do segundo endereco do path
const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Routes />
      </BrowserRouter>
        <GlobalStyle />
  </>
);

export default App;
