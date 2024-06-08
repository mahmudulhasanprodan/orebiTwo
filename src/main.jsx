import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import app from '../Firebase/FirebaseConfig.js'
import './index.css'
import { store } from './Redux/Store/Store.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
