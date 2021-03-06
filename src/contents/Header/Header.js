import React from 'react';
import {Fab, Grid, Typography} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Translation} from "react-i18next";

const heading = {
    //background: 'linear-gradient(360deg, #F1F5F8 30%, #1D1F26 100%)', //#182952
    //backgroundColor: '#F1F5F8',
    background: 'linear-gradient(360deg, #F1F5F8 0%, #1D1F26 0%)',
    height: 920,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center'
}


const info = {
    paddingTop: '10%',
}

const styles = theme => ({
    desktopSize: {
        [theme.breakpoints.up("md")]: {
            width:"350px",
            height:"auto",
        }
    },
    mobileSize: {
        [theme.breakpoints.down("sm")]: {
            width:300,
            height: 'auto',
            paddingTop: 50
        }
    },
    button: {
        color: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'teal'
    }
});


function Header(props) {
  const { classes } = props;
  return (
    <div style={heading}>
        <Typography component="div">
            <Grid container direction="column" justify="space-around" alignItems="center">
                <Grid container item direction="row" justify="space-around" alignItems="center" style={info}>
                    <Grid item container direction="column" lg={4} spacing={1}>
                        <Grid item>
                            <Typography component="em" variant="h6">
                                <Translation>
                                    {
                                        t => <>{t('Je suis Mamadou Niakaté')}</>
                                    }
                                </Translation>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography component="p" variant="h4">
                                <Translation>
                                    {
                                        t => <>{t('Étudiant en L3 Miage')}</>
                                    }
                                </Translation>
                            </Typography>
                         </Grid>
                        <Grid item>
                            <Typography component="p" variant="h4">
                                <Translation>
                                    {
                                        t => <>{t('Quality Assurance Engineer')}</>
                                    }
                                </Translation>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg={4}>
                        <img className={`${classes.desktopSize} ${classes.mobileSize}`} src={"/images/header4.png"} alt="Logo" />
                    </Grid>
                </Grid>
                <Grid container item justify="center">
                    <Fab color="secondary" aria-label="edit" onClick={props.executeScroll} className={classes.button}>
                        <ArrowDownwardIcon style={{fontSize: 50}} />
                    </Fab>
                </Grid>
            </Grid>
        </Typography>
    </div>      
  )
}

export default withStyles(styles)(Header);
