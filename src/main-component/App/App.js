import React from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CursorTrail from '../../components/CursorTrail';


const App = () => { 

  return (
    <div className="App" id='scrool'>
      <CursorTrail />
          <AllRoute/>
          <ToastContainer/>
    </div>
  );
}

export default App;