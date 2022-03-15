import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

ReactDOM.render(
  <PayPalScriptProvider
  options={{ "client-id": 'AaQjU4jJpqm7k4_ihioRawP_h7rTIpIK2rFv1ksbr-3aAKQn0u2lMYgUKACvbjGxWjNA2TwtLCqdqEpd' }}
  >
    <App />
    </PayPalScriptProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
