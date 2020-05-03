import React, { Component, } from 'react';
import CardConsultor from './CardConsultor';
import Carregamento from './Carregamento'
import Api from '../services/Api';
import '../css/ListaDeConsultores.css';

class ListaDeConsultores extends Component {
    state = {
        estaCarregando: true,
        consultores: []
    }

    componentDidMount() {
        Api.get('/consultores/consultarTodos')
            .then(resultado => {
                this.setState({
                    estaCarregando: false,
                    consultores: [...resultado.data]
                });
            }).catch(error => console.log(error));
    }
    render() {
        return (
            <div className="container">
                {this.state.estaCarregando ?
                    <Carregamento /> :
                    this.state.consultores.map((consultor) => {
                        return (
                            <div key={consultor._id} className="card-consultor">
                                <CardConsultor
                                    id={consultor._id}
                                    nome={consultor.nome}
                                    biografiaProfissional={consultor.biografiaProfissional}
                                    urlImagem={consultor.urlImagem}
                                />
                            </div>
                        )
                    })
                }
            </div>

        );
    };
}

export default ListaDeConsultores;