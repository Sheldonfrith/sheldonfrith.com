import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './components/App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    //test the initial page structure with no user interaction except scroll
      //header image
      //main title
      //subtitle and topSocialButtons
      //Initial view with no scroll should be just header image, main title, and subtitle
      //Me with Izzy picture
      //About me area, with text and 'my cv' button
      //Toolkit area, with text
      //Recent projects area, with 1-3 projects displaying depending on screen width
      //contact me area, with text 
    //test the "My CV popup"

    //test all interactions with "Recent Projects section"

    //
  });
});