import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import App from '../App';
import ProductDetails from '../pages/ProductDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'product/:platform/:item_id',
        element: <ProductDetails />,
      },
    ],
  },
]);

export default routes;
