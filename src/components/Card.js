import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        marginLeft:20,
        marginTop:20,
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    content: {
        textAlign:"start"
    }
});

 const Card1 = ({title})=> {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="http://placekitten.com/300/300"
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
