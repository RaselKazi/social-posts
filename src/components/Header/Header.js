import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(3),
    },
    title: {
      flexGrow: 1,

    },
    link:{
        color: 'inherit',
        textDecoration: 'none',

    },
  }));
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
            <Button color="inherit"><a className={classes.link}href="/home">Home</a></Button>
            <Button color="inherit"><a className={classes.link} href="">About</a></Button>
            <Button color="inherit"><a className={classes.link} href="/service">Service</a></Button>
            
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default Header;