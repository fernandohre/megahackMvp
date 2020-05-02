import React, { Component, } from 'react';
import CardConsultor from './CardConsultor';
import Carregamento from './Carregamento'
import Api from '../services/Api';
class ListaDeConsultores extends Component {
    state = {
        estaCarregando: true,
        consultores: []
    }

    componentDidMount() {
        Api.get('/consultores/consultar')
            .then(resultado => {
                this.setState({
                    estaCarregando: false,
                    consultores: [...resultado]
                });
                console.log(resultado);
            }).catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                {/* {this.state.estaCarregando ?
                    <Carregamento /> :
                    this.state.consultores.map((consultor) => {
                        return (
                            <div key={consultor._id}>
                                <CardConsultor
                                    nome={consultor[_id].nome}
                                    biografiaProfissional={consultor[_id].biografiaProfissional}
                                    urlImagem={consultor[_id].urlImagem}
                                />
                            </div>
                        )
                    }) */}
                }
            </div>
        );
    };
}

export default ListaDeConsultores;