import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action ,orginals } from './urls';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <RowPost url={orginals} title='Netflix Originals' />
      <RowPost  url={action} title='Action' isSmall={true} />
    </div>
  );
}

export default App;
