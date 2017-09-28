import React from 'react';
import classNames from 'classnames';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { red, purple, deepPurple, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from 'material-ui/colors';

const styles = theme => {
  const raisedTheme = (color, background) => ({
    color,
    background: background[500],
    '&:hover': {
      background: background[700]
    }
  });

  const flatTheme = (color, background = color) => ({
    color: color[500],
    '&:hover': {
      background: background[50]
    }
  });

  const { white, black } = theme.palette.common;

  return ({
    root: {},

    raisedRed: raisedTheme(white, red),
    raisedPurple: raisedTheme(white, purple),
    raisedDeepPurple: raisedTheme(white, deepPurple),
    raisedBlue: raisedTheme(white, blue),
    raisedLightBlue: raisedTheme(black, lightBlue),
    raisedCyan: raisedTheme(black, cyan),
    raisedTeal: raisedTheme(white, teal),
    raisedGreen: raisedTheme(black, green),
    raisedLightGreen: raisedTheme(black, lightGreen),
    raisedLime: raisedTheme(black, lime),
    raisedYellow: raisedTheme(black, yellow),
    raisedAmber: raisedTheme(black, amber),
    raisedOrange: raisedTheme(black, orange),
    raisedDeepOrange: raisedTheme(white, deepOrange),
    raisedBrown: raisedTheme(white, brown),
    raisedGrey: raisedTheme(black, grey),
    raisedBlueGrey: raisedTheme(white, blueGrey),

    flatRed: flatTheme(red),
    flatPurple: flatTheme(purple),
    flatDeepPurple: flatTheme(deepPurple),
    flatBlue: flatTheme(blue),
    flatLightBlue: flatTheme(lightBlue),
    flatCyan: flatTheme(cyan),
    flatTeal: flatTheme(teal),
    flatGreen: flatTheme(green),
    flatLightGreen: flatTheme(lightGreen),
    flatLime: flatTheme(lime),
    flatYellow: flatTheme(yellow),
    flatAmber: flatTheme(amber),
    flatOrange: flatTheme(orange),
    flatDeepOrange: flatTheme(deepOrange),
    flatBrown: flatTheme(brown),
    flatGrey: flatTheme(grey),
    flatBlueGrey: flatTheme(blueGrey),
  });
};

const VariantRaisedButton = ({ raised, classes, variant, className, text, ...other }) => {
  if (raised) {
    return (
      <Button
        raised={raised}
        className={classNames(
          classes.root,
          {
            [classes.raisedRed]: variant === 'red',
            [classes.raisedPurple]: variant === 'purple',
            [classes.raisedDeepPurple]: variant === 'deepPurple',
            [classes.raisedBlue]: variant === 'blue',
            [classes.raisedLightBlue]: variant === 'lightBlue',
            [classes.raisedCyan]: variant === 'cyan',
            [classes.raisedTeal]: variant === 'teal',
            [classes.raisedGreen]: variant === 'green',
            [classes.raisedLightGreen]: variant === 'lightGreen',
            [classes.raisedLime]: variant === 'lime',
            [classes.raisedYellow]: variant === 'yellow',
            [classes.raisedAmber]: variant === 'amber',
            [classes.raisedOrange]: variant === 'orange',
            [classes.raisedDeepOrange]: variant === 'deepOrange',
            [classes.raisedBrown]: variant === 'brown',
            [classes.raisedGrey]: variant === 'grey',
            [classes.raisedBlueGrey]: variant === 'blueGrey'
          },
          className,
        )}
        {...other}
      >
        {text}
      </Button>
    );
  } else {
    return (
      <Button
        className={classNames(
          classes.root,
          {
            [classes.flatRed]: variant === 'red',
            [classes.flatPurple]: variant === 'purple',
            [classes.flatDeepPurple]: variant === 'deepPurple',
            [classes.flatBlue]: variant === 'blue',
            [classes.flatLightBlue]: variant === 'lightBlue',
            [classes.flatCyan]: variant === 'cyan',
            [classes.flatTeal]: variant === 'teal',
            [classes.flatGreen]: variant === 'green',
            [classes.flatLightGreen]: variant === 'lightGreen',
            [classes.flatLime]: variant === 'lime',
            [classes.flatYellow]: variant === 'yellow',
            [classes.flatAmber]: variant === 'amber',
            [classes.flatOrange]: variant === 'orange',
            [classes.flatDeepOrange]: variant === 'deepOrange',
            [classes.flatBrown]: variant === 'brown',
            [classes.flatGrey]: variant === 'grey',
            [classes.flatBlueGrey]: variant === 'blueGrey'
          },
          className,
        )}
        {...other}
      >
        {text}
      </Button>
    );
  }
};

export default withStyles(styles)(VariantRaisedButton);
