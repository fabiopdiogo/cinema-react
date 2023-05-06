import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Poltronas } from "./routes/Poltronas";
import { Tickets } from "./routes/Tickets"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "poltronas",
    element: <Poltronas />
  },
  {
    path: "tickets",
    element: <Tickets />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals