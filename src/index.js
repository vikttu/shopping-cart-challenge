import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import ShoppingBody from './components/ShoppingBody';
import Footer from './components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ShoppingBody />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
