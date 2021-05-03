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
        marginLeft:20,
        marginTop:20,
        marginRight:20,
        maxWidth: 345,
        flexGrow:1,
        justifyContent:"space-around",

    },
    media: {
        height: 140,
    },
    content: {
        textAlign:"start",

    }
});

 const Card1 = ({title,id,image})=> {
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
                    <Typography  gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>


 </Card>
    );
}
export default Card1;
