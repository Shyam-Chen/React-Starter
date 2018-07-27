// @flow

import React from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    'flex-grow': 1,
    'z-index': 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  'o-title': {
    'text-decoration': 'none',
  },
  menu: {
    color: '#fff',
  },
  appBar: {
    'z-index': theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'fixed',
    width: '300px',
  },
  content: {
    'flex-grow': 1,
    'background-color': theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    'margin-left': '300px',
  },
  toolbar: theme.mixins.toolbar,
});

const Layout = ({ classes, children }) => (
  <div className={classes.root}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton>
          <MenuIcon className={classes.menu} />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap component={Link} to="/" className={classes['o-title']}>
          Oh My React
        </Typography>
      </Toolbar>
    </AppBar>

    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.toolbar} />
      {/* TODO: list rendering */}
      <List>
        <ListItem button component={Link} to="/hello-world">
          <ListItemIcon><FaceIcon /></ListItemIcon>
          <ListItemText primary="Hello World" />
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} to="/crud-operations/basic">
          <ListItemIcon><FaceIcon /></ListItemIcon>
          <ListItemText primary="CRUD Operations (Basic)" />
        </ListItem>
      </List>
    </Drawer>

    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div>{children}</div>
    </main>
  </div>
);

export default compose(
  withStyles(styles),
)(Layout);
