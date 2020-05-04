/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

const especialidades = [
    { codigo: 1, descricao: 'Fundos Imobiliários', },
    { codigo: 2, descricao: 'Renda Fixa', },
    { codigo: 3, descricao: 'Ações bolsa de valores', },
    { codigo: 3, descricao: 'Debêntures', },
    { codigo: 4, descricao: 'Letras de Câmbio' },
    { codigo: 5, descricao: 'Moedas Digitais' },
    { codigo: 6, descricao: 'Titulos Públicos' },
    { codigo: 7, descricao: 'Debêntures' }
];

const InputPesquisa = (props) => {
    const classes = useStyles();
    const manipularEventoChange = (e, value) => {
        console.log(value);
        props.selecionarEspecialidade(value);
    }
    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: '90.4%' }}
            options={especialidades}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option.descricao}
            renderOption={(option) => (
                <React.Fragment>
                    <span>{option.codigo}</span>
                    {option.descricao} ({option.codigo})
                </React.Fragment>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Escolha a especialidade do Consultor"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
            onChange={manipularEventoChange}
        />
    );
}
export default InputPesquisa;

