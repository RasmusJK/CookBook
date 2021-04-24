import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        height: 48,
        color:"black",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',


    },
    title: {
        flexGrow: 1,

        color: "inherit",
        marginBottom:10,
        marginLeft:60,


    },
    button: {
        alignItems:"flex-end"
    }
}));

const TopBar =({name})=> {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        {name}
                    </Typography>
                    <Button color="inherit "><SearchIcon/></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default TopBar;
