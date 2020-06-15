import React from 'react';
// switch: serve pra alternar quando existe mais de uma rota. sem o switch, mostra as duas rotas ao mesmo tempo, ou mais

import { Switch, Route } from 'react-router-dom';

// importa as páginas para as quais quero criar as rotas
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// constante ao invés de função - React.FC (function command)
// no path raiz precisa colocar exact ou todas as rotas se voltarão pra ele
const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
