/* App.js */
import React from 'react'
import CanvasJSReact from '@canvasjs/react-stockcharts';
//var CanvasJSReact = require('@canvasjs/react-stockcharts');

// router purposes
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChartCandleSticks from './charts';
import Login from './login';
import isAuthenticated from './auth';
import Register from './register'
import Reset from './resetpw'



function App () {

  return (
  
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/charts' element={<ChartCandleSticks/>}></Route>
        <Route path='/resetpw' element={<Reset/>}></Route>

      </Routes>

    </BrowserRouter>
    
  )

  
}



export default App;    
