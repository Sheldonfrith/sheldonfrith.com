import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Header from '@material-ui/core/Header';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <CssBaseline>
    <ThemeProvider>
    <Container className="App">
      <Header title="sheldonfrith.com" className="App-header">
      </Header>
      <main>
        <Grid container spacing={4}>
          <Button>testing button</Button>
        </Grid>
      </main>
    </Container>
    </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
