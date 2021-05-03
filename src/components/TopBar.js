import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Drawer, IconButton} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom';
const useStyles = makeStyles(() => ({
    root: {
        textAlign:"center",
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
        marginRight:35

    },

    drawer: {
        height:"100%",
        width: "25vh",
        display:"flex",
        flexDirection:"column"

    }
}));

const TopBar =({name})=> {
    const user = localStorage.getItem('Username');
    const history = useHistory();
    const classes = useStyles();
    const  [open, setOpen]= useState(false);

   /* const [isLoggedIn, setIsLoggedIn] =useState(false);
    if (!user){
        setIsLoggedIn(false);
    } else {
        setIsLoggedIn(true);
    }*/
    const handleDrawer = () =>{
        setOpen(true);
    }

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton onClick={handleDrawer}  color="inherit" edge="start"  >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {name}
                    </Typography>

                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <div className={classes.drawer}>
                    <Typography style={{textAlign:"center"}}>{user}</Typography>

                    <Button onClick={()=>{history.push('/login')}}>Login</Button>

                    <Button onClick={()=>{history.push('/register')}}>Register</Button>

                    <Button onClick={()=>{
                        localStorage.clear();
                        console.log("logged out");
                        window.location.reload();
                    }}>Logout</Button>

                </div>

            </Drawer>

        </div>
    );
}
/*  tried conditional rendering got too many re-renders
{isLoggedIn ? (
    <Typography style={{marginLeft:15}}>{user}</Typography>
) : (
    <div>
        <Button onClick={()=>{history.push('/login')}}>Login</Button>
        <br/>
        <Button onClick={()=>{history.push('/register')}}>Register</Button>
    </div>
)} */
export default TopBar;
