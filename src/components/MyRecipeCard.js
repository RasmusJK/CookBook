import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
    display:"flex",
        justifyContent:"space-around",

        maxWidth: 120,
        maxHeight:120,
        margin:"10px"

    },
    media: {
        height: 60,
    },
    content: {
        height:20,
        textAlign:"start",

    }
});

const MyRecipeCard = ({title,id, image})=> {
    const classes = useStyles();
    const history= useHistory()
    return (
        <Card className={classes.root}
              onClick={()=>{
                  history.push(`/recipe/${id}`)
              }
              }>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="placeholder"
                />
                <CardContent className={classes.content}>
                    <Typography style={{marginBottom:10}}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>


        </Card>
    );
}
export default MyRecipeCard;
