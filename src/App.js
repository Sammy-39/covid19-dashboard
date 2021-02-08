import { useEffect } from 'react';

import Navbar from './navbar'
import LeftSideBar from './leftSidebar'
import RightSidebar from './rightSidebar';
import Center from './center';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='main'>
        <LeftSideBar />
        <Center />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
