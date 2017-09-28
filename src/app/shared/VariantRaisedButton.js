import React from 'react';
import classNames from 'classnames';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { red, purple, deepPurple, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from 'material-ui/colors';

const styles = theme => ({
  root: {},
  red: {
    color: theme.palette.common.white,
    background: red[500],
    '&:hover': {
      background: red[700]
    }
  },
  purple: {
    color: theme.palette.common.white,
    background: purple[500],
    '&:hover': {
      background: purple[700]
    }
  },
  deepPurple: {
    color: theme.palette.common.white,
    background: deepPurple[500],
    '&:hover': {
      background: deepPurple[700]
    }
  },
  blue: {
    color: theme.palette.common.white,
    background: blue[500],
    '&:hover': {
      background: blue[700]
    }
  },
  lightBlue: {
    color: theme.palette.common.black,
    background: lightBlue[500],
    '&:hover': {
      background: lightBlue[700]
    }
  },
  cyan: {
    color: theme.palette.common.black,
    background: cyan[500],
    '&:hover': {
      background: cyan[700]
    }
  },
  teal: {
    color: theme.palette.common.white,
    background: teal[500],
    '&:hover': {
      background: teal[700]
    }
  },
  green: {
    color: theme.palette.common.black,
    background: green[500],
    '&:hover': {
      background: green[700]
    }
  },
  lightGreen: {
    color: theme.palette.common.black,
    background: lightGreen[500],
    '&:hover': {
      background: lightGreen[700]
    }
  },
  lime: {
    color: theme.palette.common.black,
    background: lime[500],
    '&:hover': {
      background: lime[700]
    }
  },
  yellow: {
    color: theme.palette.common.black,
    background: yellow[500],
    '&:hover': {
      background: yellow[700]
    }
  },
  amber: {
    color: theme.palette.common.black,
    background: amber[500],
    '&:hover': {
      background: amber[700]
    }
  },
  orange: {
    color: theme.palette.common.black,
    background: orange[500],
    '&:hover': {
      background: orange[700]
    }
  },
  deepOrange: {
    color: theme.palette.common.white,
    background: deepOrange[500],
    '&:hover': {
      background: deepOrange[700]
    }
  },
  brown: {
    color: theme.palette.common.white,
    background: brown[500],
    '&:hover': {
      background: brown[700]
    }
  },
  grey: {
    color: theme.palette.common.black,
    background: grey[500],
    '&:hover': {
      background: grey[700]
    }
  },
  blueGrey: {
    color: theme.palette.common.white,
    background: blueGrey[500],
    '&:hover': {
      background: blueGrey[700]
    }
  }
});

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
