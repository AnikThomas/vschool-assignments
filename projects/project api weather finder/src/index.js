import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux';
import {BrowserRouter} from 'react-router-dom';

import './styles.css';
import App from './App';













ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>
, document.getElementById('root'));

