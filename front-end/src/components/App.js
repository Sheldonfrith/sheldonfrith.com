import React from 'react';
import '../styles/App.css';
import Header from './Header';
import ContactInfo from './ContactInfo';
import Resume from './Resume';
import TabArea from './TabArea';
import Portfolio from './Portfolio';
import GlobalProvider from './providers/GlobalContext';
import Sidebar from './Sidebar';

function App() {
  return (
    <GlobalProvider>
    <div className="app">
      <Header/>
      <div className="body">
      <Sidebar/>
      <TabArea>
        <div label="Portfolio">
          <Portfolio/>
        </div>
        <div label="My CV">
          <Resume/>
        </div>
        <div label="Contact Me">
          <ContactInfo/>
        </div>
      </TabArea>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
