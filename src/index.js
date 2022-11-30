import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes,Route} from 'react-router-dom'

import {RoutlinesPage} from './routes/RoutlinesPage'
import {ClassesPage} from './routes/ClassesPage'
import {PlansPage} from './routes/PlansPage'
import {ContactPage} from './routes/ContactPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>      
      <Route path='/routlines' element={<RoutlinesPage/>}/>
      <Route path='/classes' element={<ClassesPage/>}/>
      <Route path='/prices' element={<PlansPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
