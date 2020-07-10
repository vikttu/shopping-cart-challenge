import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
