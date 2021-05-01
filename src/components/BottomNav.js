import React,{useState} from "react";
import { BottomNavigationAction, BottomNavigation  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';

const BottomNav =()=>{

    const useStyles = makeStyles(()=>({
        root: {
            width: '100%',
            position: 'fixed',
            bottom: 0,

            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            height: 48,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            textDecoration:"none"
        },
    }));
    const classes = useStyles();
    const [value, setValue] =useState(0);

    return(
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >

                 <BottomNavigationAction   label="Home"  icon={<HomeIcon />} component={Link} to='/' style={{ color: 'inherit', textDecoration: 'inherit'}} />
               <BottomNavigationAction  label="Liked" icon={<FavoriteIcon />} component={Link} to='/liked' style={{ color: 'inherit', textDecoration: 'inherit'}} />
                <BottomNavigationAction  label="My recipes" icon={<LocationOnIcon />} component={Link} to='/myRecipes' style={{ color: 'inherit', textDecoration: 'inherit'}} />

            </BottomNavigation>

    );
}
//gives error
/*   <span onClick={()=>{history.push('/')}}> <BottomNavigationAction   label="Home"  icon={<HomeIcon />} /> </span>
                <span onClick={()=>{history.push('/liked')}}> <BottomNavigationAction  label="Liked" icon={<FavoriteIcon />} /> </span>
                <span onClick={()=>{history.push('/myRecipes')}}>  <BottomNavigationAction  label="My recipes" icon={<LocationOnIcon />} />  </span> */
export default BottomNav;
