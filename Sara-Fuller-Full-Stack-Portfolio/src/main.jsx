import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import AboutMe from './pages/AboutMePage.jsx';
import Portfolio from './pages/PortfolioPage.jsx';
import Resume from './pages/ResumePage.jsx';
import ContactMe from './pages/ContactPage.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/AboutMePage',
        element: <AboutMe />,
      },
      {
        path: '/PortfolioPage',
        element: <Portfolio />,
      },
      {
        path: '/ResumePage',
        element: <Resume />,
      },
      {
        path: '/ContactPage',
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
