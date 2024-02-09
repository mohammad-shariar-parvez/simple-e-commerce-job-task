import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store.js';
import routes from './routes/routes.jsx';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import routes from "./components/routes/routes.tsx";
// import { Provider } from "react-redux";
// import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
