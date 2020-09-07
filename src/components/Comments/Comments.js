import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    root: {
      width: '100%',
      maxWidth: '70ch',
      backgroundColor: theme.palette.background.paper,
      margin:'20px',
    },
    inline: {
      display: 'inline',
    },
  }));
const Comments = (props) => {
    const classes = useStyles();

   const { name, body} = props.comment;
    

    return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.img} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
            {body}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    );
};

export default Comments;