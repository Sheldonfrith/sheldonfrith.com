import React from 'react';
import logo from './logo.svg';
import './App.css';
import injectSheet from 'react-jss';



import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, createStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';

import ContactMailIcon from '@material-ui/icons/ContactMail';
import SchoolIcon from '@material-ui/icons/School';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  pageNarrower: {
  },
  header: {
    backgroundColor: theme.palette.type==='light'? theme.palette.primary.light: theme.palette.primary.dark,
    margin: 0,
    padding: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    zIndex: 1000,
    top: 0,
  },
  gridListWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginBottom: 0,
    marginTop: 0,
   backgroundColor: theme.palette.type === 'light'? theme.palette.background.paper: theme.palette.background.paper,
  },
  socialMediaIcon: {
    margin: 20,
    color: theme.palette.text.secondary,
  },
  gridList: {
    width: '100%',
    minHeight: 500,
    justifyContent: 'center',
    padding: 2,
  },
  gridListTile:{
    border: '100px',
    height: '100%',
    shadow: "1px 1px black",
  },
  gridListTileBar:{
    background: "rgba(75,110,115,0.75)",
    textShadow: "1px 1px black",
    "&:MuiGridListTitleBar-subtitle":{
    whiteSpace: "normal",
    color: theme.palette.secondary.main,
    },
  },
  gridListTitleTile: {
  },
  gridListTitle: {
  },
  bottomNavigation: {
    width: '100%',
    backgroundColor: 'inherit',
  },
  bottomNavigationWrapper:{
    backgroundColor: theme.palette.type === 'light'? theme.palette.secondary.light: theme.palette.secondary.dark,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    position:'sticky',
    bottom:0,
  },
  bottomNavigationAction:{
    color: theme.palette.text.disabled,
    '&.Mui-selected': {
      color: theme.palette.text.primary,
    },
  },
  hireMeButton: {
    backgroundColor: theme.palette.secondary.main,
    margin: 10,
    color: theme.palette.common.white,
  },

})
);

function App() {
  const classes = useStyles();
  const theme = useTheme();
  return (

    <div className={'App '+classes.root}>
      <CssBaseline />
      <Container component="div" maxWidth="sm" className={classes.pageNarrower}>
      <Container component="header" maxWidth="sm" className={'App-header '+classes.header}>
        <Typography variant="h3" component="h1">
          Sheldon Frith
        </Typography>
        {/* social media links go here */}
          <LinkedInIcon className={classes.socialMediaIcon}/>
          <InstagramIcon className={classes.socialMediaIcon}/>
          <GitHubIcon className={classes.socialMediaIcon}/>
      </Container>
      <div className={classes.gridListWrapper}>
      <GridList cellHeight={250} className={classes.gridList} cols={3} spacing={4}>
        {/* <GridListTile key="Subheader" cols={3} style={{height:'auto'}} className={classes.gridListTitleTile}>
          <ListSubheader component="div" className={classes.gridListTitle}>Projects</ListSubheader>
        </GridListTile> */}

        <GridListTile key="t-y-p-e_tile" cols={2} className={classes.gridListTile}>
          <img src={'./images/t-y-p-e_code.png'} alt={'t-y-p-e.com'}/>
          <GridListTileBar
            title={'T-Y-P-E'}
            subtitle={'Customizable typing speed training for programmers.'}
            className={classes.gridListTileBar}
            />
        </GridListTile>

        <GridListTile key="ebook_tile" cols={1} className={classes.gridListTile}>
          <img src={'./images/ltavn.png'} alt="letter to a vegetarian nation ebook"/>
          <GridListTileBar
            title={'Letter To A Vegetarian Nation'}
            subtitle={'Regenerative agriculture book.'}
            className={classes.gridListTileBar}
            />
        </GridListTile>

        <GridListTile key="wordpress_websites" cols={1} className={classes.gridListTile}>
          <img src={'./images/joinedwebsites.jpeg'} alt="image of my wordpress websites"/>
          <GridListTileBar
          title={'Simple Wordpress Websites'}
          subtitle={'From my pre-webdev days.'}
          className={classes.gridListTileBar}
          />
        </GridListTile>

        <GridListTile key="current_projects" cols={2} className={classes.gridListTile}>
          <img src={'./images/modelviewer.png'} alt="image of the projects I'm currently working on"/>
          <GridListTileBar
          title={'Ongoing Dev Projects'}
          subtitle={'This is what I\'m currently working on.'}
          className={classes.gridListTileBar}
          />
        </GridListTile>
      </GridList>
      </div>
      <Container component="div" maxWidth="sm" className={classes.bottomNavigationWrapper}>
      <BottomNavigation
        value={0}
        onChange={(event, newValue) => {console.log(newValue);}}
        className={classes.bottomNavigation}
        >
          <BottomNavigationAction showLabel label="My Projects" icon={<HomeIcon/>} className={classes.bottomNavigationAction}/>
          <BottomNavigationAction showLabel label="Links" icon={<ListAltIcon/>}  className={classes.bottomNavigationAction}/>
          {/* <BottomNavigationAction showLabel label="Hire Me" icon={<SentimentSatisfiedAltIcon/>} className={classes.hireMeButton}/> */}
          <Button variant="contained" className={classes.hireMeButton}>Hire Me</Button>
          <BottomNavigationAction showLabel label="My CV" icon={<SchoolIcon/>} className={classes.bottomNavigationAction}/>
        <BottomNavigationAction showLabel label="Contact Me" icon={<ContactMailIcon/>} className={classes.bottomNavigationAction}/>
        </BottomNavigation>
      </Container>
      </Container>
    </div>
  );
}

export default App;
