import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root.jsx';
import Form from './components/Form.jsx';
import Selling from './components/Selling.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Form/>,
  },
  {
    path: "sell",
    element: <Selling/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
