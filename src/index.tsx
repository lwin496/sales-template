import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import Home from './Pages/Home';
import AboutUs from './Pages/AbousUs';
import Contact from './Pages/Contact';
import Login from './Pages/Login'; 


const router = createBrowserRouter([
  { 
      path: '/',
      element: <Home />
  },
  { 
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  { 
    path: '/login',
    element: <Login />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
