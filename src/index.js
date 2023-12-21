import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/myreset.css';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/common.css';
import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}> 
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
