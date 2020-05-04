import React, { Component, } from 'react';
import AvatarConsultor from './AvatarConsultor';
import Api from '../services/Api';
import Carregamento from './Carregamento';
import CabecalhoPagina from './CabecalhoPagina';
import '../css/PaginaConsultor.css';
import WebChat from './WebChat';
import GridPlanosConsultor from './GridPlanosConsultor';

class PaginaConsultor extends Component {
    constructor({ match }) {
        super();
        this.state = {
            id: match.params.id,
            estaCarregando: true,
            consultor: {}
        }
    }

    componentDidMount() {
        Api.get('/consultores/consultar', {
            headers: {
                id: this.state.id
            }
        }).then(resultado => {
            this.setState({
                estaCarregando: false,
                consultor: resultado.data
            });
        })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <CabecalhoPagina nome={this.state.consultor.nome} />
                {
                    this.state.estaCarregando ?
                        <Carregamento /> :
                        <div>
                            <div className="pagina-consultor-avatar">
                                <AvatarConsultor urlImagem={this.state.consultor.urlImagem} />
                            </div>
                        </div>
                }
                {
                    this.state.estaCarregando ?
                        <Carregamento /> :
                        <GridPlanosConsultor
                            planos={this.state.consultor.planos}
                        />
                }
                <div className="botao-flutuante">
                    <WebChat nome={this.state.consultor.nome} />
                </div>
            </div>
        )
    }
}
export default PaginaConsultor;

