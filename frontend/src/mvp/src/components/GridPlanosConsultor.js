import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardPlanoConsultor from './CardPlanoConsultor';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: '22%'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const GridPlanosConsultor = (props) => {
    const classes = useStyles();
    console.log(props);
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {

                    props.planos.map((plano, indice) => {
                        return (
                            <div key={indice.toString()}>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <CardPlanoConsultor
                                            titulo={plano.especialidade}
                                            classificacaoPlano={plano.titulo}
                                            descricaoPlano={plano.descricao}
                                        />
                                    </Paper>
                                </Grid>
                            </div>
                        );
                    })
                }
            </Grid>
        </div>
    );
}
export default GridPlanosConsultor;