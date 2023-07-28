import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route  path="*" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();