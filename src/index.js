import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from './components';
import { CartProvider, FilterProvider } from './context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Router>
    <CartProvider>
    <FilterProvider>
    <ScrollToTop />
    <ToastContainer closeButton={false} autoClose={5000} position='bottom-right'/>
      <App />
    </FilterProvider>
    </CartProvider>
    </Router>
  
);
