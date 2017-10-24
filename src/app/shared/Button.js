import React from 'react';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import {
  red, pink, purple,
  deepPurple, indigo, blue,
  lightBlue, cyan, teal,
  green, lightGreen, lime,
  yellow, amber, orange,
  deepOrange, brown, grey,
  blueGrey
} from 'material-ui/colors';
import classNames from 'classnames';

export const styles = theme => {
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
    raisedPink: raisedTheme(white, pink),
    raisedPurple: raisedTheme(white, purple),
    raisedDeepPurple: raisedTheme(white, deepPurple),
    raisedIndigo: raisedTheme(white, indigo),
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
    flatPink: flatTheme(pink),
    flatPurple: flatTheme(purple),
    flatDeepPurple: flatTheme(deepPurple),
    flatIndigo: flatTheme(indigo),
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

export const _Button = ({ raised, classes, color, className, ...other }) => (
  <Button
    raised={raised}
    className={classNames(
      classes.root,
      {
        [raised ? classes.raisedRed : classes.flatRed]: color === 'red',
        [raised ? classes.raisedPink : classes.flatPink]: color === 'pink',
        [raised ? classes.raisedPurple : classes.flatPurple]: color === 'purple',
        [raised ? classes.raisedDeepPurple : classes.flatDeepPurple]: color === 'deepPurple',
        [raised ? classes.raisedIndigo : classes.flatIndigo]: color === 'indigo',
        [raised ? classes.raisedBlue : classes.flatBlue]: color === 'blue',
        [raised ? classes.raisedLightBlue : classes.flatLightBlue]: color === 'lightBlue',
        [raised ? classes.raisedCyan : classes.flatCyan]: color === 'cyan',
        [raised ? classes.raisedTeal : classes.flatTeal]: color === 'teal',
        [raised ? classes.raisedGreen : classes.flatGreen]: color === 'green',
        [raised ? classes.raisedLightGreen : classes.flatLightGreen]: color === 'lightGreen',
        [raised ? classes.raisedLime : classes.flatLime]: color === 'lime',
        [raised ? classes.raisedYellow : classes.flatYellow]: color === 'yellow',
        [raised ? classes.raisedAmber : classes.flatAmber]: color === 'amber',
        [raised ? classes.raisedOrange : classes.flatOrange]: color === 'orange',
        [raised ? classes.raisedDeepOrange : classes.flatDeepOrange]: color === 'deepOrange',
        [raised ? classes.raisedBrown : classes.flatBrown]: color === 'brown',
        [raised ? classes.raisedGrey : classes.flatGrey]: color === 'grey',
        [raised ? classes.raisedBlueGrey : classes.flatBlueGrey]: color === 'blueGrey'
      },
      className
    )}
    {...other}
  >
  </Button>
);

export default withStyles(styles)(_Button);
