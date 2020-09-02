import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  "palette":{
    "common":{
      "black":"rgba(10,10,10,10)",
      "white":"rgba(255, 255, 255, 1)"},
    "background":{
      "paper":"rgba(255,219,173, 1)",
      "default":"rgba(255,255,255,60)"},
    "primary":{"light":"rgba(219, 245, 186, 1)","main":"rgba(219, 245, 186, 1)","dark":"rgba(28, 48, 9, 1)","contrastText":"rgba(7, 3, 0, 1)"},"secondary":{"light":"rgba(223,242,216,100)","main":"rgba(255, 103, 0, 1)","dark":"rgba(197, 67, 17, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"rgba(208, 2, 27, 1)","dark":"rgba(247, 7, 23, 1)","contrastText":"rgba(252, 250, 248, 1)"},"text":{"primary":"rgba(0,0,0,0.85)","secondary":"rgba(0,0,0, 0.77)","disabled":"rgba(0, 0, 0, 0.5)","hint":"rgba(0, 0, 0, 0.38)"}},
  typography: {
    fontFamily: 'sans-serif',
    h3:{fontFamily:'Almendra Display',fontSize: 55},
    button:{fontFamily:'sans-serif'},
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
