import React, { Component, } from 'react';
import AvatarConsultor from './AvatarConsultor';
import Api from '../services/Api';
import Carregamento from './Carregamento';
import CabecalhoPaginaConsultor from './CabecalhoPaginaConsultor';
import Fab from '@material-ui/core/Fab';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import '../css/BotaoFlutuante.css';
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
                <CabecalhoPaginaConsultor nome={this.state.consultor.nome} />
                {
                    this.state.estaCarregando ?
                        <Carregamento /> :
                        <AvatarConsultor urlImagem={this.state.consultor.urlImagem} />
                }
                <div className="botao-flutuante">
                    <Fab color="primary" aria-label="add">
                        <ChatBubbleOutlineIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}
export default PaginaConsultor;

