import React from 'react';
import  {BrowserRouter, Route} from 'react-router-dom';
import PaginaConsultor from './components/PaginaConsultor';
import PaginaPesquisaConsultores from './components/PaginaPesquisaConsultores';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={PaginaPesquisaConsultores} />
            <Route path="/detalhesConsultor/:id" component={PaginaConsultor} />
        </BrowserRouter>
    );
}