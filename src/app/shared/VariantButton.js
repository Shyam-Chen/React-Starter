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

  return {
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
    flatBlueGrey: flatTheme(blueGrey)
  };
};

const VariantButton = ({ raised, classes, variant, className, text, ...other }) => (
  <Button
    raised={raised}
    className={classNames(
      classes.root,
      {
        [raised ? classes.raisedRed : classes.flatRed]: variant === 'red',
        [raised ? classes.raisedPurple : classes.flatPurple]: variant === 'purple',
        [raised ? classes.raisedDeepPurple : classes.flatDeepPurple]: variant === 'deepPurple',
        [raised ? classes.raisedBlue : classes.flatBlue]: variant === 'blue',
        [raised ? classes.raisedLightBlue : classes.flatLightBlue]: variant === 'lightBlue',
        [raised ? classes.raisedCyan : classes.flatCyan]: variant === 'cyan',
        [raised ? classes.raisedTeal : classes.flatTeal]: variant === 'teal',
        [raised ? classes.raisedGreen : classes.flatGreen]: variant === 'green',
        [raised ? classes.raisedLightGreen : classes.flatLightGreen]: variant === 'lightGreen',
        [raised ? classes.raisedLime : classes.flatLime]: variant === 'lime',
        [raised ? classes.raisedYellow : classes.flatYellow]: variant === 'yellow',
        [raised ? classes.raisedAmber : classes.flatAmber]: variant === 'amber',
        [raised ? classes.raisedOrange : classes.flatOrange]: variant === 'orange',
        [raised ? classes.raisedDeepOrange : classes.flatDeepOrange]: variant === 'deepOrange',
        [raised ? classes.raisedBrown : classes.flatBrown]: variant === 'brown',
        [raised ? classes.raisedGrey : classes.flatGrey]: variant === 'grey',
        [raised ? classes.raisedBlueGrey : classes.flatBlueGrey]: variant === 'blueGrey'
      },
      className
    )}
    {...other}
  >
    {text}
  </Button>
);

export default withStyles(styles)(VariantButton);
