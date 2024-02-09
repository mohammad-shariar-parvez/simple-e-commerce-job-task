import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import App from '../App';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
