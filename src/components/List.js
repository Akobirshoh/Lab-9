import React from 'react';
import { Grid, Paper, makeStyles,Avatar,Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    flexGrow: 1
  },
  paper: {
    height: 220,
    width: 340,
    backgroundColor: '#ebebeb'
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
}));

    



export default function List({ userAvatar, firstName, lastName,location}) {
    const classes = useStyles();
  
    return (
      <Grid container spacing={2}>
        <Grid item className={classes.root} xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid key={1} item>
              <Paper className={classes.paper} elevation={2}>
                <Grid container justify="center">
                  <Avatar
                    alt="User"
                    className={classes.avatarImage}
                    src={userAvatar}
                  />
                  <Typography variant="p">
                    Name: {firstName} {lastName}
                  </Typography>
                  <Typography variant='p'>
                    Location: {location}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }