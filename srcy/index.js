import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Home/Sidebar';
import False from './mock/context';
import Test from './Test';
import Rout from './router'
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    {/* <BrowserRouter>
      <False>
        <Sidebar />
        <Rout />
      </False>
    </BrowserRouter> */}
    <Test />
  </React.StrictMode>
);

