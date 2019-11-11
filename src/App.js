import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
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

import Routes from '~/core/Router';

const useStyles = makeStyles(theme => ({
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
    padding: theme.spacing(3),
    'margin-left': '300px',
  },
  toolbar: theme.mixins.toolbar,
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton>
            <MenuIcon className={classes.menu} />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={Link}
            to="/"
            className={classes['o-title']}
          >
            Oh My React
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <div className={classes.toolbar} />
        {/* TODO: react-router-config */}
        <List>
          <ListItem button component={Link} to="/hello-world">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Hello World" />
          </ListItem>
        </List>

        <List>
          <ListItem button component={Link} to="/sort-filter-list">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Sort Filter List" />
          </ListItem>
        </List>

        <List>
          <ListItem button component={Link} to="/recursive-list">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="RecursiveList" />
          </ListItem>
        </List>

        <List>
          <ListItem button component={Link} to="/crud-operations/basic">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="CRUD Operations (Basic)" />
          </ListItem>
        </List>

        <List>
          <ListItem button component={Link} to="/github-repos/GithubRepos">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Github Repos" />
          </ListItem>
        </List>

        <List>
          <ListItem button component={Link} to="/markdown-editor">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Markdown Editor" />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Routes />
        </div>
      </main>
    </div>
  );
};

export default App;
