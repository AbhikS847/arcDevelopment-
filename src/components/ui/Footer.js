import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme=>({
    footer:{
        backgroundColor:theme.palette.common.Blue,
        width:'100%',
        zIndex:1302,
        position:'relative'
    },
    adornment:{
        width:'25em',
        verticalAlign:'bottom',
        [theme.breakpoints.down('md')]:{
            width:'21em'
        },
        [theme.breakpoints.down('xs')]:{
            width:'15em'
        },
    },
    mainContainer:{
        position:'absolute'
    },
    link:{
        color:'white',
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:'0.8rem'
    }
}))


export default function Footer(){
    const classes = useStyles();
    return <footer className={classes.footer}>
    <Grid container justify="center" className={classes.mainContainer}>
        <Grid item>
            <Grid container direction="column">
                <Grid item className={classes.link}>Home</Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Grid container direction="column">
            <Grid item className={classes.link}>Services</Grid>
            <Grid item className={classes.link}>Custom Software Development</Grid>
            <Grid item className={classes.link}>Mobile App Development</Grid>
            <Grid item className={classes.link}>Website Development</Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Grid container direction="column">
                <Grid item className={classes.link}>The Revolution</Grid>
                <Grid item className={classes.link}>Vision</Grid>
                <Grid item className={classes.link}>Technology</Grid>
                <Grid item className={classes.link}>Process</Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Grid container direction="column">
                <Grid item className={classes.link}>About us</Grid>
                <Grid item className={classes.link}>History</Grid>
                <Grid item className={classes.link}>Team</Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Grid container direction="column">
                <Grid item className={classes.link}>Contact us</Grid>
            </Grid>
        </Grid>
    </Grid>
    <img alt="Black adornment" src={footerAdornment} className={classes.adornment}></img></footer>
}