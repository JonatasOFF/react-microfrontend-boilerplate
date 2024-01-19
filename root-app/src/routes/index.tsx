import { Home } from 'pages/Home';
import ProductMFE from 'product-mfe/pages';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/root',
    element: <Home />,
  },
  {
    path: '/root/product-mfe',
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
  {
    path: '/root/product-mfe/another-page',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <div>
          Outra pagina
          <ProductMFE.Home />
        </div>, // Remote application
      },
    ],
  },
]);

export default router;
