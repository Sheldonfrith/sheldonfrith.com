import React from 'react';
import '../styles/App.css';
import Header from './Header';
import ContactInfo from './ContactInfo';
import Resume from './Resume';
import TabArea from './TabArea';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="appContainer">
      <Header/>
      <TabArea>
        <div label="Portfolio">
          <Portfolio/>
        </div>
        <div label="My Resume">
          <Resume/>
        </div>
        <div label="Contact Me">
          <ContactInfo/>
        </div>
      </TabArea>
    </div>
  );
}

export default App;
