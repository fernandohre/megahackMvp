import React from 'react';
import CardConsultor from './CardConsultor';
import Carregamento from './Carregamento'
import '../css/ListaDeConsultores.css';

const ListaDeConsultores = (props) => {


    return (
        <div className="container">
            <br />
            {props.estaCarregando ?
                <Carregamento /> :
                props.consultores.map((consultor) => {
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
}

export default ListaDeConsultores;