import React from 'react';
import { Route,Routes} from "react-router-dom";
import Newsletter from './components/Newsletter';
import SuccessMsg from './components/SuccessMsg';
import './App.css'

export default function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Newsletter/>}/>
        <Route path='/success' element={<SuccessMsg/>}/>
      </Routes>
    </div>
  )
}
