import React from 'react';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { teal } from 'material-ui/colors';

const styles = theme => ({
  button: {
    color: theme.palette.common.white,
    background: teal[500],
    '&:hover': {
      background: teal[700]
    }
  }
});

const Buttons = ({ classes, onClick, text }) => (
  <Button raised className={classes.button} onClick={onClick}>
    {text}
  </Button>
);

export default withStyles(styles)(Buttons);
