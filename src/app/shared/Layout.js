import React from 'react';
import { compose } from 'recompose';

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
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  menu: {
    color: '#fff',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'fixed',
    width: '20rem',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginLeft: '20rem',
  },
  toolbar: theme.mixins.toolbar,
});

const Layout = ({ classes, children }) => (
  <div className={classes.root}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton><MenuIcon className={classes.menu} /></IconButton>
        <Typography variant="title" color="inherit" noWrap onClick={() => { window.location.href = '/'; }}>Oh My React</Typography>
      </Toolbar>
    </AppBar>

    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.toolbar} />
      <List>
        <ListItem button onClick={() => { window.location.href = '/hello-world'; }}>
          <ListItemIcon><FaceIcon /></ListItemIcon>
          <ListItemText primary="Hello World" />
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
