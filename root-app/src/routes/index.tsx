import { Home } from 'pages/Home';
import ProductMFE from 'product-mfe/pages';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/product-mfe',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <div>
          <ProductMFE.Home />
        </div>, // Remote application
      },
    ],
  },
]);

export default router;
