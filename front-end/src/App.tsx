import React from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: theme.palette.type ==='light'? theme.palette.primary.light: theme.palette.primary.dark,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
  },
  gridList: {

  },
  gridItem1: {
    height: 150,
    width: 200
  },
  gridItem2: {
    height: 300,
    width: 100,
    backgroundColor: theme.palette.type === 'light'? theme.palette.warning.light : theme.palette.warning.dark,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();
  return (
    
    <div className={'App '+classes.root}>
      <CssBaseline />

      <Container component="header" maxWidth="sm" className={'App-header '+classes.header}>
        <Typography variant="h2" component="h1" gutterBottom>
          Sheldon Frith
        </Typography>
      </Container>

      <GridList cellHeight={180} container justify="center" className={classes.gridList} spacing={2}>
        <GridListTitle key="Subheader" cols={2} style={{height:'auto'}}>
          <ListSubheader component="div">Projects</ListSubheader>
        </GridListTitle>
        <GridListTile key="t-y-p-e_tile">
          <img src={} alt={'t-y-p-e.com image'}/>
          <GridListTileBar
            title={'T-Y-P-E'}
            subtitle={'Customizable typing speed training for programmers.'}
            />
        </GridListTile>
        <GridListTile key="ebook_tile">
          <img src={} alt="image of letter to a vegetarian nation ebook"/>
          <GridListTileBar
            title={'Letter To A Vegetarian Nation'}
            subtitle={'Regenerative agriculture book.'}
            />
        </GridListTile>
        <GridListTile key="wordpress_websites">
          <img src={} alt="image of my wordpress websites"/>
          <GridListTileBar 
          title={'Simple Wordpress Websites'}
          subtitle={'From my pre-webdev days.'}
          />
        </GridListTile>
        <GridListTile key="current_projects">
          <img src={} alt="image of the projects I'm currently working on"/>
          <GridListTileBar
          title={'Ongoing Dev Projects'}
          subtitle={'This is what I\'m currently working on.'}
          />
        </GridListTile>
      </GridList>

      <footer className = {classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Footer area</Typography>
        </Container>
      </footer>
      
    </div>
  );
}

export default App;
