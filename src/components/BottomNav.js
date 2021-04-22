import React from "react";
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
            color: 'white',
            height: 48,

            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
        },
    }));
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return(
        <div className={classes.root}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >

                <Link to="/"> <BottomNavigationAction label="Home" icon={<HomeIcon />} /> </Link>
                <Link to="/liked"> <BottomNavigationAction label="Liked" icon={<FavoriteIcon />} /> </Link>
                <Link to="/myRecipes">  <BottomNavigationAction label="My recipes" icon={<LocationOnIcon />} /> </Link>

            </BottomNavigation>

    </div>);
}
export default BottomNav;
