import React, { Component, } from 'react';
import CabecalhoPagina  from './CabecalhoPagina';
import ListaDeConsultores from './ListaDeConsultores';
import InputPesquisa from './InputPesquisa';
import Api from '../services/Api';
const style = {
    marginLeft: '8%'
}
class PaginaPesquisaConsultores extends Component {
    state = {
        especialidadeSelecionada: 0,
        consultores: [],
        estaCarregando: true
    }
    componentDidMount() {
        this.carregueConsultores();
    }

    carregueConsultores = () => {
        Api.get('/consultores/consultarTodos')
            .then(resultado => {
                this.setState({
                    estaCarregando: false,
                    consultores: [...resultado.data]
                });
            }).catch(error => console.log(error));
    }

    selecionarEspecialidade = (valor) => {
        debugger;
        if (!valor || !valor.codigo ||valor.codigo === 0) {
            this.carregueConsultores();
            return;
        }

        this.setState({
            especialidadeSelecionada: valor.codigo,
            consultores: this.state.consultores.filter((consultor) => {
                return consultor.especialidade === valor.codigo;
            })
        });
    } 

    render() {
        return (
            <div>
                <CabecalhoPagina nome="Início" />
                <div style={style}>
                    <br />
                    <InputPesquisa selecionarEspecialidade={this.selecionarEspecialidade}/>
                    <ListaDeConsultores
                        especialidade={this.state.especialidadeSelecionada}
                        consultores={this.state.consultores}
                    />
                </div>
            </div>
        );
    }
}
export default PaginaPesquisaConsultores;