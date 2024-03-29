import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from "./App.js";
import Principal from "./Vistas/Principal";

ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path="/" element={<App/>} />
            <Route exact path="/Principal" element={<Principal/>} />
            <Route exact path="*" element={<App/>}/>
        </Routes>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
