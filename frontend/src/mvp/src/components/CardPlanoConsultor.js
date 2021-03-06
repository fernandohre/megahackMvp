import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    height: 230
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardPlanoConsultor = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.titulo}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.classificacaoPlano}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          {props.descricaoPlano}
        </Typography>
      </CardContent>
      <CardActions style={{float: 'right'}}>
        <Button size="small">Assinar</Button>
      </CardActions>
    </Card>
  );
}
export default CardPlanoConsultor;