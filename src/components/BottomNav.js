import React from "react";
import { BottomNavigationAction, BottomNavigation  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';

const BottomNav =()=>{

    const useStyles = makeStyles(()=>({
        root: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
    }));
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return(
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >

                <Link to="/"> <BottomNavigationAction label="Home" icon={<RestoreIcon />} /> </Link>
                <Link to="/liked"> <BottomNavigationAction label="Liked" icon={<FavoriteIcon />} /> </Link>
                <Link to="/myRecipes">  <BottomNavigationAction label="My recipes" icon={<LocationOnIcon />} /> </Link>

            </BottomNavigation>

    </div>);
}
export default BottomNav;
