import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';


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
        fontSize:'0.8rem',
        textDecoration:'none'
    },
    gridItem:{
        margin:'3em'
    },
    icon:{
        height:'4em',
        width:'4emm',
        [theme.breakpoints.down('xs')]:{
            height:'2.5em',
            width:'2.5em'
        }
    },
    socialContainer:{
        position:'absolute',
        marginTop:'-6em',
        right:'1.5em',
        [theme.breakpoints.down('xs')]:{
            right:'0.6em'
        }
    }
}))


export default function Footer(props){
    const classes = useStyles();
    return <footer className={classes.footer}>
    <Hidden mdDown>
    <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
                <Grid item component={Link} onClick={()=>{props.setValue(0);props.setSelectedIndex(0)}} to="/" className={classes.link}>Home</Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
            <Grid item component={Link} onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} to="/services" className={classes.link}>Services</Grid>
            <Grid item component={Link} onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} to="/customsoftware" className={classes.link}>Custom Software Development</Grid>
            <Grid item component={Link} onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} to="/mobileapps"  className={classes.link}>Mobile App Development</Grid>
            <Grid item component={Link} onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} to="/websites" className={classes.link}>Website Development</Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item component={Link} onClick={()=>{props.setValue(2);props.setSelectedIndex(2)}} to="/revolution" className={classes.link}>The Revolution</Grid>
                <Grid item component={Link} onClick={()=>{props.setValue(2);props.setSelectedIndex(2)}} to="/revolution" className={classes.link}>Vision</Grid>
                <Grid item component={Link} onClick={()=>{props.setValue(2);props.setSelectedIndex(2)}} to="/revolution" className={classes.link}>Technology</Grid>
                <Grid item component={Link} onClick={()=>{props.setValue(2);props.setSelectedIndex(2)}} to="/revolution" className={classes.link}>Process</Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item component={Link} onClick={()=>{props.setValue(3);props.setSelectedIndex(3)}} to="/about" className={classes.link}>About us</Grid>
                <Grid item component={Link} onClick={()=>{props.setValue(3);props.setSelectedIndex(3)}} to="/about" className={classes.link}>History</Grid>
                <Grid component={Link} onClick={()=>{props.setValue(3);props.setSelectedIndex(3)}} to="/about" item className={classes.link}>Team</Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item component={Link} onClick={()=>{props.setValue(4);props.setSelectedIndex(4)}} to="/contact" className={classes.link}>Contact us</Grid>
            </Grid>
        </Grid>
    </Grid>
    </Hidden>
    <img alt="Black adornment" src={footerAdornment} className={classes.adornment}></img>
    <Grid container spacing={2} justify="flex-end" className={classes.socialContainer}>
        <Grid item component={"a"} href="https://facebook.com" rel="noopener noreferrer" target="_blank"><img alt="Facebook logo" src={Facebook} className={classes.icon}></img></Grid>
        <Grid item component={"a"} href="https://twitter.com" rel="noopener noreferrer" target="_blank"><img alt="Twitter logo" src={Twitter} className={classes.icon}></img></Grid>
        <Grid item component={"a"} href="https://instagram.com" rel="noopener noreferrer" target="_blank"><img alt="Instagram logo" src={Instagram} className={classes.icon}></img></Grid>
    </Grid>
    </footer>
}