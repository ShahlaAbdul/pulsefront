import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import WishListProvider from './context/useWishlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <WishListProvider>
        <App />
      </WishListProvider>
    </HelmetProvider>
  </React.StrictMode>
);


