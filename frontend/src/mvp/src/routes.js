import React from 'react';
import  {BrowserRouter, Route} from 'react-router-dom';
import PaginaConsultor from './components/PaginaConsultor';
import ListaDeConsultores from './components/ListaDeConsultores';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={ListaDeConsultores} />
            <Route path="/detalhesConsultor/:id" component={PaginaConsultor} />
        </BrowserRouter>
    );
}