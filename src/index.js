import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


ReactDOM.render(
 
    <Provider store={store}>
      <Router>
        <Routes>
           <Route path='/*' element={<App />}/>
        </Routes>
      </Router>
    </Provider>,
  document.getElementById('root')
);


