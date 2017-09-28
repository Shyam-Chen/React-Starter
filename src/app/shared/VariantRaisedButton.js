import React from 'react';
import classNames from 'classnames';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { red, purple, deepPurple, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from 'material-ui/colors';

const styles = theme => {
  const createTheme = (color, background) => ({
    color,
    background: background[500],
    '&:hover': {
      background: background[700]
    }
  });

  const { white, black } = theme.palette.common;

  return ({
    root: {},
    red: createTheme(white, red),
    purple: createTheme(white, purple),
    deepPurple: createTheme(white, deepPurple),
    blue: createTheme(white, blue),
    lightBlue: createTheme(black, lightBlue),
    cyan: createTheme(black, cyan),
    teal: createTheme(white, teal),
    green: createTheme(black, green),
    lightGreen: createTheme(black, lightGreen),
    lime: createTheme(black, lime),
    yellow: createTheme(black, yellow),
    amber: createTheme(black, amber),
    orange: createTheme(black, orange),
    deepOrange: createTheme(white, deepOrange),
    brown: createTheme(white, brown),
    grey: createTheme(black, grey),
    blueGrey: createTheme(white, blueGrey)
  });
};

const VariantRaisedButton = ({ classes, variant, className, text, ...other }) => (
  <Button
    raised
    className={classNames(
      classes.root,
      {
        [classes.red]: variant === 'red',
        [classes.purple]: variant === 'purple',
        [classes.deepPurple]: variant === 'deepPurple',
        [classes.blue]: variant === 'blue',
        [classes.lightBlue]: variant === 'lightBlue',
        [classes.cyan]: variant === 'cyan',
        [classes.teal]: variant === 'teal',
        [classes.green]: variant === 'green',
        [classes.lightGreen]: variant === 'lightGreen',
        [classes.lime]: variant === 'lime',
        [classes.yellow]: variant === 'yellow',
        [classes.amber]: variant === 'amber',
        [classes.orange]: variant === 'orange',
        [classes.deepOrange]: variant === 'deepOrange',
        [classes.brown]: variant === 'brown',
        [classes.grey]: variant === 'grey',
        [classes.blueGrey]: variant === 'blueGrey'
      },
      className,
    )}
    {...other}
  >
    {text}
  </Button>
);

export default withStyles(styles)(VariantRaisedButton);
