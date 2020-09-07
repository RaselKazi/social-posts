import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    margin:'20px',
  },
  CardHeader:{
    borderBottom: '1px solid #ddd',
  },
  avatar: {
    backgroundColor: red[500],
  },
  MoreBtn: {
    marginLeft: 'auto',
    textDecoration:'none',
  },
  title: {
    marginRight: 'auto',
  },
}));


const Posts = (props) => {
    const classes = useStyles();
    const { id, title, body, img} = props.post;
    return (
      <Card className={classes.root}>
        <CardHeader className={classes.CardHeader}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={props.img}></img>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
        { props.showBtn && <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
            <Link className={classes.MoreBtn} to={"/comment/"+id}>
              <Button  size="small" color="primary">
              Learn More
              </Button>
            </Link>
        </CardActions>}
      </Card>
    );
};

export default Posts;